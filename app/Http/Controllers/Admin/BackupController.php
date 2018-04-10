<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Repositories\BackupRepository;

use Artisan;
use Log;
use Storage; //Eliminar
use Session;
use Carbon\Carbon;

class BackupController extends Controller
{
    /**
     * Muestra un listado de respaldos del sistema
     *
     * @author  Ing. Roldan Vargas <rvargas at cenditel.gob.ve>
     * @param  BackupRepository $backup Objeto con los métodos a implementar para la gestión de respaldos
     * @return [view]                   Devuelve la vista con los datos a mostrar
     */
    public function index(BackupRepository $backup)
    {
    	$backups = $backup->getList(
            config('backup.backup.destination.disks'), config('backup.backup.name')
        );
        return view("admin.backups")->with(compact('backups'));
    }


    /**
     * Crea un nuevo respaldo
     *
     * @author  Ing. Roldan Vargas <rvargas at cenditel.gob.ve>
     * @param  BackupRepository $backup Objeto con los métodos a implementar para la gestión de respaldos
     * @return [object]                 Redirecciona a la página anterior después de realizar el respaldo
     */
    public function create(BackupRepository $backup)
    {
        $backup->create();

        return redirect()->back();
    }

    /**
     * Descarga un respaldo solicitado
     *
     * @author  Ing. Roldan Vargas <rvargas at cenditel.gob.ve>
     * @param  [string]           $file_name Nombre del archivo a descargar
     * @param  BackupRepository   $backup    Objeto con los métodos para la gestión de respaldos
     * @return [response]                    Retorna el response para la descarga del archivo
     */
    public function download($file_name, BackupRepository $backup)
    {
        $down = $backup->getFile(
            config('backup.backup.destination.disks'), config('backup.backup.name'), $file_name
        );

        if (!$down[0]) {
            abort(404, "El archivo de respaldo no existe.");
        }

        $stream = $down['stream'];
        $fs = $down['fs'];
        $file = $down['file'];

        return \Response::stream(function () use ($stream) {
            fpassthru($stream);
        }, 200, [
            "Content-Type" => $fs->getMimetype($file),
            "Content-Length" => $fs->getSize($file),
            "Content-disposition" => "attachment; filename=\"" . basename($file) . "\"",
        ]);
    }

    /**
     * Deletes a backup file.
     */
    /**
     * Elimina un archivo de respaldo
     * @param  [string]         $file_name Nombre del archivo a eliminar
     * @param  BackupRepository $backup    Objeto con los métodos para la gestión de respaldos
     * @return [response]                  Muestra una página de error 404 si el archivo no pudo ser 
     *                                     eliminado, si el procedimiento fue exitoso retorna al 
     *                                     listado de respaldos
     */
    public function delete($file_name, BackupRepository $backup)
    {
        $removed = $backup->delFile(
            config('backup.backup.destination.disks'), config('backup.backup.name'), $file_name
        );

        if (!$removed) {
            abort(404, "El archivo de respaldo no existe.");
        }

        return redirect()->back();
    }
    
}