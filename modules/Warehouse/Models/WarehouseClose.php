<?php

namespace Modules\Warehouse\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\SoftDeletes;
use Venturecraft\Revisionable\RevisionableTrait;
use OwenIt\Auditing\Contracts\Auditable;
use OwenIt\Auditing\Auditable as AuditableTrait;

/**
 * @class WarehouseClose
 * @brief Datos de los Cierres de Almacenes
 * 
 * Gestiona el modelo de datos para los Almacenes
 * 
 * @author Henry Paredes (henryp2804@gmail.com)
 * @copyright <a href='http://conocimientolibre.cenditel.gob.ve/licencia-de-software-v-1-3/'>LICENCIA DE SOFTWARE CENDITEL</a>
 */


class WarehouseClose extends Model implements Auditable
{
    use SoftDeletes;
    use RevisionableTrait;
    use AuditableTrait;

    /**
     * Establece el uso o no de bitácora de registros para este modelo
     * @var boolean $revisionCreationsEnabled
     */
    protected $revisionCreationsEnabled = true;

    /**
     * Lista de atributos para la gestión de fechas
     *
     * @var array $dates
     */
    protected $dates = ['deleted_at'];

    /**
     * Lista de atributos que pueden ser asignados masivamente
     * @var array $fillable
     */
    protected $fillable = ['date_init','date_end','user_init','user_end','warehouse_id','observation'];

     /**
     * Método que obtiene el usuario que inicio el cierre del almacén
     *
     * @author Henry Paredes (henryp2804@gmail.com)
     * @return Objeto con el registro relacionado al modelo User
     */
    public function start_user()
    {
        return $this->belongsTo('App\User','user_init');
    }

    /**
     * Método que obtiene el usuario que finalizó el cierre del almacén
     *
     * @author Henry Paredes (henryp2804@gmail.com)
     * @return Objeto con el registro relacionado al modelo User
     */
    public function end_user()
    {
        return $this->belongsTo('App\User','user_end');
    }

    /**
     * Método que obtiene el almacén involucrado el en cierre de funciones
     *
     * @author Henry Paredes (henryp2804@gmail.com)
     * @return Objeto con el registro relacionado al modelo Warehouse
     */
    public function warehouse()
    {
        return $this->belongsTo('Modules\Warehouse\Models\Warehouse','warehouse_id');
    }
}
