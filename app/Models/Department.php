<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \Venturecraft\Revisionable\RevisionableTrait;

/**
 * @class Department
 * @brief Datos de las Unidades, Departamentos o Dependencias
 * 
 * Gestiona el modelo de datos para las Unidades, Departamentos o Dependencias
 * 
 * @author Ing. Roldan Vargas (rvargas@cenditel.gob.ve)
 * @copyright <a href='http://conocimientolibre.cenditel.gob.ve/licencia-de-software-v-1-3/'>LICENCIA DE SOFTWARE CENDITEL</a>
 */
class Department extends Model
{
    use SoftDeletes;
    use RevisionableTrait;

    /**
     * Establece el uso o no de bitácora de registros para este modelo
     * @var boolean $revisionCreationsEnabled
     */
    protected $revisionCreationsEnabled = true;

    /**
     * Lista de atributos para la gestión de fechas
     * @var array $dates
     */
    protected $dates = ['deleted_at'];

    /**
     * Lista de atributos que pueden ser asignados masivamente
     * @var array $fillable
     */
    protected $fillable = [
    	'name', 'acronym', 'hierarchy', 'issue_requests', 'active', 'administrative', 'department_id', 
    	'institution_id'
    ];

    /**
     * Department belongs to Parent.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function parent()
    {
    	return $this->belongsTo(Department::class, 'parent_id');
    }

    /**
     * Department has many Childrens.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function childrens()
    {
    	return $this->hasMany(Department::class, 'parent_id');
    }

    /**
     * Department belongs to Institution.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function institution()
    {
    	return $this->belongsTo(Institution::class);
    }
}