<?php

namespace Modules\Asset\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\SoftDeletes;
use \Venturecraft\Revisionable\RevisionableTrait;

/**
 * @class AssetSpecificCategory
 * @brief Datos de las Categorias Especificas de un bien
 * 
 * Gestiona el modelo de datos para las categorias especificas de un bien
 * 
 * @author Henry Paredes (henryp2804@gmail.com)
 * @copyright <a href='http://conocimientolibre.cenditel.gob.ve/licencia-de-software-v-1-3/'>LICENCIA DE SOFTWARE CENDITEL</a>
 */

class AssetSpecificCategory extends Model
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
     *
     * @var array $dates
     */
    protected $dates = ['deleted_at'];

    /**
     * Lista de atributos que pueden ser asignados masivamente
     * @var array $fillable
     */
    protected $fillable = ['code','name', 'asset_subcategory_id'];

    /**
     * Método que obtiene la subcategoria del bien al que pertenece la categoria especifica
     *
     * @author Henry Paredes (henryp2804@gmail.com)
     * @return Objeto con el registro relacionado al modelo AssetSubcategory
     */
	public function subcategory()
    {
        return $this->belongsTo('Modules\Asset\Models\AssetSubcategory', 'asset_subcategory_id');
    }

    /**
     * Método que obtiene los bienes de la categoria especifica
     *
     * @author Henry Paredes (henryp2804@gmail.com)
     * @return Objeto con el registro relacionado al modelo Asset
     */
    public function assets()
    {
        return $this->hasMany('Modules\Asset\Models\Asset');
    }


    /**
     * Método que genera un listado de opciones a implementar en elementos tipo select
     *
     * @author Henry Paredes (henryp2804@gmail.com)
     * @return Listado de categorias generales registradas para ser implementados en plantillas
     */
     public static function template_choices($filters = [])
    {
        $records = self::all();
        if ($filters) {
            foreach ($filters as $key => $value) {
                $records = $records->where($key, $value);
            }
        }
        $options = [];
        foreach ($records as $rec) {
            $options[$rec->id] = $rec->name;
        }
        return $options;
    }


}
