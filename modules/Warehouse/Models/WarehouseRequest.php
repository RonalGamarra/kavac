<?php

namespace Modules\Warehouse\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\SoftDeletes;
use Venturecraft\Revisionable\RevisionableTrait;
use OwenIt\Auditing\Contracts\Auditable;
use OwenIt\Auditing\Auditable as AuditableTrait;
use App\Traits\ModelsTrait;

/**
 * @class WarehouseRequest
 * @brief Datos de las solicitudes de Articulos de Amacén
 * 
 * Gestiona el modelo de datos para las solicitudes de los artículos de almacén
 * 
 * @author Henry Paredes (henryp2804@gmail.com)
 * @copyright <a href='http://conocimientolibre.cenditel.gob.ve/licencia-de-software-v-1-3/'>LICENCIA DE SOFTWARE CENDITEL</a>
 */

class WarehouseRequest extends Model implements Auditable
{
	use SoftDeletes;
    use RevisionableTrait;
    use AuditableTrait;
    use ModelsTrait;

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
    protected $fillable = ['state','observation','delivered','delivery_date','motive','specific_action_id','dependence_id'];

    /**
     * Método que obtiene el departamento que realiza la solicitud
     *
     * @author Henry Paredes (henryp2804@gmail.com)
     * @return Objeto con el registro relacionado al modelo Departments
     */

    public function department()
    {
        return $this->belongsTo('App\Models\Department','dependence_id');
    }

    /**
     * Método que obtiene la acción Específica
     *
     * @author Henry Paredes (henryp2804@gmail.com)
     * @return Objeto con el registro relacionado al modelo BudgetSpecificAction
     */

    public function specificAction()
    {
        return $this->belongsTo('Modules\Budget\Models\BudgetSpecificAction','specific_action_id');
    }

    /**
     * Método que obtiene los productos asociados a la solicitud
     *
     * @author Henry Paredes (henryp2804@gmail.com)
     * @return Objeto con el registro relacionado al modelo WarehouseRequestProduct
     */

    public function requestProduct()
    {
        return $this->hasMany('Modules\Warehouse\Models\WarehouseRequestProduct');
    }
}
