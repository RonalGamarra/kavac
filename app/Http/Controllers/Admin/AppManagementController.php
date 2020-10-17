<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use OwenIt\Auditing\Models\Audit;
use App\Http\Controllers\Controller;
use App\Traits\ModelsTrait;
use App\User;

/**
 * @class AppManagementController
 * @brief Gestiona los procesos, registros, etc., de la aplicación, de uso exclusivo para el administrador
 *
 * Controlador para gestionar procesos y registros de la aplicación
 *
 * @author Ing. Roldan Vargas <rvargas@cenditel.gob.ve> | <roldandvg@gmail.com>
 * @license <a href='http://conocimientolibre.cenditel.gob.ve/licencia-de-software-v-1-3/'>
 *              LICENCIA DE SOFTWARE CENDITEL
 *          </a>
 */
class AppManagementController extends Controller
{
    use ModelsTrait;

    /**
     * Método constructor de la clase
     *
     * @method    __construct
     *
     * @author     Ing. Roldan Vargas <rvargas@cenditel.gob.ve> | <roldandvg@gmail.com>
     */
    public function __construct()
    {
        /** Restringe el acceso solo a usuarios con el rol admin */
        $this->middleware('role:admin');
    }

    /**
     * Obtiene un listado de los últimos 20 registros eliminados
     *
     * @method    getDeletedRecords
     *
     * @author     Ing. Roldan Vargas <rvargas@cenditel.gob.ve> | <roldandvg@gmail.com>
     *
     * @param     Request              $request    Objeto con información de la petición
     *
     * @return    JsonResponse       Objeto Json con datos de respuesta a la petición
     */
    public function getDeletedRecords(Request $request)
    {
        $trashed = [];

        foreach ($this->getModels() as $model_name) {
            $model = app($model_name);

            if ($this->isModelSoftDelete($model)) {
                if ($request->start_delete_at) {
                    $model = $model->whereDate('deleted_at', '>=', $request->start_delete_at);
                }
                if ($request->end_delete_at) {
                    $model = $model->whereDate('deleted_at', '<=', $request->end_delete_at);
                }
                if ($request->module_delete_at && strpos($model_name, $request->module_delete_at) === false) {
                    continue;
                }
                $filtered = $model->onlyTrashed()->orderBy('deleted_at', 'desc');

                $deleted = $filtered->get();
                if (!$deleted->isEmpty()) {
                    /** Si ya dispone de un listado de 20 registros, se detiene y se retorna la consulta */
                    if (count($trashed) >= 20) {
                        break;
                    }
                    foreach ($deleted as $del) {
                        $regs = '<div class="row">';
                        foreach ($del->getAttributes() as $attr => $value) {
                            if (!in_array($attr, ['created_at', 'updated_at', 'deleted_at'])) {
                                $regs .= "<div class='col-6 break-words'><b>$attr:</b> $value</div>";
                            }
                        }
                        $regs .= '</div>';
                        array_push($trashed, [
                            'id' => secure_record($del->id),
                            'deleted_at' => $del->deleted_at->format("d-m-Y"),
                            'module' => $model_name,
                            'registers' => $regs
                        ]);
                    }
                }
            }
        }

        return response()->json(['result' => true, 'records' => $trashed]);
    }

    /**
     * Restaura un archivo eliminado
     *
     * @method    restoreRecord
     *
     * @author     Ing. Roldan Vargas <rvargas@cenditel.gob.ve> | <roldandvg@gmail.com>
     *
     * @param     Request          $request    Objeto con datos de la petición
     *
     * @return    JsonResponse       Objeto Json con datos de respuesta a la petición
     */
    public function restoreRecord(Request $request)
    {
        $this->validate($request, [
            'module' => ['required'],
            'id' => ['required']
        ]);

        $model = $request->module;
        $id = secure_record($request->id, true);
        $model::withTrashed()->find($id)->restore();

        return response()->json(['result' => true], 200);
    }

    /**
     * Obtiene un listado de registros a auditar
     *
     * @method    getAuditRecords
     *
     * @author     Ing. Roldan Vargas <rvargas@cenditel.gob.ve> | <roldandvg@gmail.com>
     *
     * @param     Request            $request    Objeto con información de la petición
     *
     * @return    JsonResponse       Objeto Json con datos de respuesta a la petición
     */
    public function getAuditRecords(Request $request)
    {
        $auditables = new Audit;

        if ($request->start_date) {
            $auditables = $auditables->whereDate('created_at', '>=', $request->start_date);
        }
        if ($request->end_date) {
            $auditables = $auditables->whereDate('created_at', '<=', $request->end_date);
        }
        if ($request->user) {
            $users = User::where('name', 'like', "{$request->user}%")
                        ->orWhere('name', 'like', "%{$request->user}%")
                        ->orWhere('name', 'like', "%{$request->user}")
                        ->orWhere('username', 'like', "{$request->user}%")
                        ->orWhere('username', 'like', "%{$request->user}%")
                        ->orWhere('username', 'like', "%{$request->user}")->get('id');

            if (!$user->isEmpty()) {
                $auditables = $auditables->whereIn('user_id', $users);
            }
        }
        if ($request->module) {
            $auditables = $auditables->where('auditable_type', 'like', "{$request->module}%")
                                     ->orWhere('auditable_type', 'like', "%{$request->module}%")
                                     ->orWhere('auditable_type', 'like', "%{$request->module}");
        }

        $records = [];
        foreach ($auditables->orderBy('id', 'desc')->take(20)->get() as $audit) {
            if ($audit->user_id !== null) {
                switch ($audit->event) {
                    case 'created':
                        $registerClass = 'text-success';
                        break;
                    case 'deleted':
                        $registerClass = 'text-danger';
                        break;
                    case 'restored':
                        $registerClass = 'text-info';
                        break;
                    case 'updated':
                        $registerClass = 'text-warning';
                        break;
                    default:
                        $registerClass = 'text-default';
                        break;
                }

                $badgeClass = str_replace('text', 'badge', $registerClass);
                $model_user = $audit->user_type;
                $user = $model_user::find($audit->user_id);

                $name = ($user) ? $user->name : '';
                $username = ($user) ? $user->username : '';

                array_push($records, [
                    'id' => secure_record($audit->id),
                    'status' => '<i class="ion-android-checkbox-blank ' . $registerClass . '"></i>',
                    'date' => $audit->created_at->format('d-m-Y h:i:s A'),
                    'ip' => $audit->ip_address,
                    'module' => $audit->auditable_type,
                    'users' => "<b>Nombre:</b> $name<br><b>Usuario:</b> $username"
                ]);
            }
        }
        return response()->json(['result' => true, 'records' => $records], 200);
    }

    /**
     * Obtiene detalles de un registro seleccionado
     *
     * @method    getAuditDetails
     *
     * @author     Ing. Roldan Vargas <rvargas@cenditel.gob.ve> | <roldandvg@gmail.com>
     *
     * @param     Request            $request    Objeto con datos de la petición
     *
     * @return    JsonResponse       Objeto Json con detalles del registro
     */
    public function getAuditDetails(Request $request)
    {
        $this->validate($request, [
            'id' => ['required']
        ]);
        $id = secure_record($request->id, true);
        $audit = Audit::find($id);
        return response()->json(['result' => true, 'audit' => $audit], 200);
    }
}