<?php

namespace Modules\Budget\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Venturecraft\Revisionable\RevisionableTrait;
use OwenIt\Auditing\Contracts\Auditable;
use OwenIt\Auditing\Auditable as AuditableTrait;

/**
 * @class BudgetCentralizedAction
 * @brief Datos de Acciones Centralizadas
 * 
 * Gestiona el modelo de datos para las Acciones Centralizadas
 * 
 * @author Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
 * @copyright <a href='http://conocimientolibre.cenditel.gob.ve/licencia-de-software-v-1-3/'>LICENCIA DE SOFTWARE CENDITEL</a>
 */
class BudgetCentralizedAction extends Model implements Auditable
{
	use SoftDeletes;
    use RevisionableTrait;
    use AuditableTrait;
    
    protected $revisionCreationsEnabled = true;

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
    	'name', 'code', 'custom_date', 'active', 'department_id', 'payroll_position_id', 'payroll_staff_id'
    ];

    public function getDescriptionAttribute()
    {
        return "{$this->code} - {$this->name}";
    }

    /**
     * BudgetProject belongs to Department.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function department()
    {
    	return $this->belongsTo(\App\Models\Department::class);
    }

    /**
     * BudgetProject belongs to PayrollPosition.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function payroll_position()
    {
    	return $this->belongsTo(\Modules\Payroll\Models\PayrollPosition::class);
    }

    /**
     * BudgetProject belongs to PayrollStaff.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function payroll_staff()
    {
    	return $this->belongsTo(\Modules\Payroll\Models\PayrollStaff::class);
    }

    /**
     * Get all of the budget centralized action's specific actions.
     */
    public function specific_actions()
    {
        return $this->morphMany(BudgetSpecificAction::class, 'specificable');
    }
}
