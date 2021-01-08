<?php

/** Modelos generales de base de datos */
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use OwenIt\Auditing\Contracts\Auditable;
use OwenIt\Auditing\Auditable as AuditableTrait;

/**
 * @class DocumentStatus
 * @brief Datos de estatus de documentos
 *
 * Gestiona el modelo de datos para los estados de documentos
 *
 * @property  string $name
 * @property  string $description
 * @property  string $color
 * @property  string $action
 *
 * @author Ing. Roldan Vargas <rvargas@cenditel.gob.ve> | <roldandvg@gmail.com>
 *
 * @license
 *     [LICENCIA DE SOFTWARE CENDITEL](http://conocimientolibre.cenditel.gob.ve/licencia-de-software-v-1-3/)
 */
class DocumentStatus extends Model implements Auditable
{
    use SoftDeletes;
    use AuditableTrait;

    /**
     * Nombre de la tabla a usar en la base de datos
     *
     * @var string $table
     */
    protected $table = 'document_status';

    /**
     * Lista de atributos para la gestión de fechas
     *
     * @var array $dates
     */
    protected $dates = ['deleted_at'];

    /**
     * Lista de atributos que pueden ser asignados masivamente
     *
     * @var array $fillable
     */
    protected $fillable = ['name', 'description', 'color', 'action'];

    /**
     * Oculta los campos de fechas de creación, actualización y eliminación
     *
     * @var    array $hidden
     */
    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];

    /**
     * Obtiene el estatus del documento según los filtros indicados
     *
     * @method  scopeGetStatus
     *
     * @author Ing. Roldan Vargas <rvargas@cenditel.gob.ve> | <roldandvg@gmail.com>
     *
     * @param  object $query    Objeto que contiene la consulta del modelo
     * @param  string $status   Estatus por el cual filtrar la información
     * @param  string $operator Operador por el cual se va a filtrar los datos, el valor por defecto es '='
     *
     * @return object           Consulta filtrada
     */
    public function scopeGetStatus($query, $status, $operator = null)
    {
        /**
         * @var string Define el operador por el cual filtrar la consulta, si no se indica el valor
         *             por defecto es '='
         */
        $operator = (!is_null($operator)) ? $operator : "=";

        return $query->where('action', $operator, $status)->first();
    }
}
