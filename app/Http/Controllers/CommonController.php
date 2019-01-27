<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

/**
 * @class CommonController
 * @brief Gestiona información de común de la aplicación
 * 
 * Controlador para gestionar datos comúnes en la aplicación
 * 
 * @author Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
 * @copyright <a href='http://conocimientolibre.cenditel.gob.ve/licencia-de-software-v-1-3/'>LICENCIA DE SOFTWARE CENDITEL</a>
 */
class CommonController extends Controller
{
    public function getSelectData(Request $request, $parent_id, $model, $module_name = null, $foreign_key = null)
    {
    	dd('entro');
    	$model_name = ($model == 'User')?'App\\' . $model:((!is_null($module_name))?'Modules\\' . $module_name:'App') . '\\Models\\';
    	$foreign_key = (is_null($foreign_key))?strtolower($model) . '_id':$foreign_key;
    	$items = [];
    	
    	return response()->json($items, 200);
    }
}
