<?php

namespace Modules\Budget\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \Venturecraft\Revisionable\RevisionableTrait;

class BudgetAccount extends Model
{
	use SoftDeletes;
    use RevisionableTrait;
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
    	'group', 'item', 'generic', 'specific', 'subspecific', 'denomination', 'active', 'resource',
    	'egress', 'tax_id', 'parent_id', 'original'
    ];

    /**
     * Método que permite obtener la cuenta asociada de nivel superior
     *
     * @author  Ing. Roldan Vargas <rvargas at cenditel.gob.ve>
     * @param  [string] $group       Grupo de la cuenta
     * @param  [string] $item        Ítem de la cuenta
     * @param  [string] $generic     Genérica de la cuenta
     * @param  [string] $specific    Específica de la cuenta
     * @param  [string] $subspecific Subespecífica de la cuenta
     * @return [boolean|object]      Retorna falso si no existe una cuenta de nivel superior, de lo contrario obtiene los datos de la misma
     */
    public static function getParent($group, $item, $generic, $specific, $subspecific)
    {
        if ($item !== '00') {
            $parent = self::where('group', $group);
            if ($generic !== '00') {
                $parent = $parent->where('item', $item);
                if ($specific !== '00') {
                    $parent = $parent->where('generic', $generic);
                    if ($subspecific !== '00') {
                        $parent = $parent->where('specific', $specific);
                    }
                    else {
                        $parent = $parent->where('subspecific', '00');
                    }
                }
                else {
                    $parent = $parent->where('specific', '00');
                }
            }
            else {
                $parent = $parent->where('generic', '00');
            }
        }
        
        if (!isset($parent)) {
            return false;
        }

        return $parent->first();
    }

    /**
     * Método que permite obtener el código de una cuenta presupuestaria
     *
     * @author  Ing. Roldan Vargas <rvargas at cenditel.gob.ve>
     * @return [string] Retorna el código de la cuenta
     */
    public function getCode()
    {
        $code = $this->group .'.'. $this->item .'.'. $this->generic .'.'. $this->specific .'.'. $this->subspecific;

        return $code;
    }

    /**
     * Construye un arreglo de elementos para usar en palntillas blade
     *
     * @author  Ing. Roldan Vargas <rvargas at cenditel.gob.ve>
     * @return [array] Arreglo con los registros
     */
    public static function template_choices($filters = [])
    {
        $records = self::all();
        if ($filters) {
            $records = self::where('original', true);
            foreach ($filters as $key => $value) {
                $records = $records->where($key, $value);
            }
            $records = $records->get();
        }
        $options = [];
        foreach ($records as $rec) {
            $options[$rec->id] = $rec->getCode() . " - " . $rec->denomination;
        }
        return $options;
    }

}