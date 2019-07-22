<?php

namespace Modules\Asset\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Support\Facades\DB;

use Modules\Asset\Models\Asset;

/**
 * @class AssetController
 * @brief Controlador de bienes institucionales
 * 
 * Clase que gestiona los bienes institucionales
 * 
 * @author Henry Paredes <hparedes@cenditel.gob.ve>
 * @copyright <a href='http://conocimientolibre.cenditel.gob.ve/licencia-de-software-v-1-3/'>LICENCIA DE SOFTWARE CENDITEL</a>
 */
class AssetController extends Controller
{
    use ValidatesRequests;

    /**
     * Define la configuración de la clase
     *
     * @author Henry Paredes <hparedes@cenditel.gob.ve>
     */
    public function __construct()
    {
        /** Establece permisos de acceso para cada método del controlador */
        $this->middleware('permission:asset.list', ['only' => 'index']);
        $this->middleware('permission:asset.create', ['only' => ['create', 'store']]);
        $this->middleware('permission:asset.edit', ['only' => ['edit', 'update']]);
        $this->middleware('permission:asset.delete', ['only' => 'destroy']);
    }

    /**
     * Muestra un listado de los bienes institucionales
     *
     * @author Henry Paredes <hparedes@cenditel.gob.ve>
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('asset::registers.list');
    }

    /**
     * Muestra el formulario para registrar un nuevo bien institucional
     *
     * @author Henry Paredes <hparedes@cenditel.gob.ve>
     * @return \Illuminate\View\View 
     */
    public function create()
    {
        return view('asset::registers.create');
    }

    /**
     * Valida y registra un nuevo bien institucional
     *
     * @author Henry Paredes <hparedes@cenditel.gob.ve>
     * @param  \Illuminate\Http\Request  $request   Datos de la petición
     * @return \Illuminate\Http\JsonResponse        Objeto con los registros a mostrar
     */
    public function store(Request $request)
    {
        $this->validate($request, [

            'asset_type_id' => 'required',
            'asset_category_id' => 'required',
            'asset_subcategory_id' => 'required',
            'asset_specific_category_id' => 'required',
            'asset_acquisition_type_id' => 'required',
            'acquisition_year' => 'required|max:8',
            'asset_status_id' => 'required',
            'asset_condition_id' => 'required',
            'value' => 'required|regex:/^\d+(\.\d+)?$/u',
            'quantity' => 'required|regex:/^\d+$/u',
        ]);
        
        if ($request->asset_type_id == 1) {
            $this->validate($request,[
                'serial' => 'required|max:50',
                'marca'  => 'required|max:50',
                'model' => 'required|max:50',
            ]);
        }
        else if ($request->asset_type_id == 2) {
            $this->validate($request,[
                'asset_use_function_id' => 'required',
                'parish_id' => 'required',
                'address' => 'required',
            ]);
        }

        $cantidad = $request->quantity;
        if(is_null($cantidad))
            $cantidad = 1;
        while ($cantidad > 0) {
            $cantidad--;
            $asset = new Asset;

            $asset->asset_type_id = $request->asset_type_id;
            $asset->asset_category_id = $request->asset_category_id;
            $asset->asset_subcategory_id = $request->asset_subcategory_id;
            $asset->asset_specific_category_id = $request->asset_specific_category_id;
            $asset->specifications = $request->specifications;
            //$asset->proveedor_id = $request->proveedor_id;
            $asset->asset_condition_id = $request->asset_condition_id;
            $asset->asset_acquisition_type_id = $request->asset_acquisition_type_id;
            $asset->acquisition_year = $request->acquisition_year;
            $asset->asset_status_id = $request->asset_status_id;
            $asset->serial = $request->serial;
            $asset->marca = $request->marca;
            $asset->model = $request->model;
            $asset->value = $request->value;
            $asset->asset_use_function_id = $request->asset_use_function_id;
            $asset->parish_id = $request->parish_id;
            $asset->address = $request->address;


            $asset->save();
            $asset->inventory_serial = $asset->getCode();
            $asset->save();
        }

        $request->session()->flash('message', ['type' => 'store']);
        return response()->json(['result' => true, 'redirect' => route('asset.register.index')], 200);
    }

    /**
     * Muestra el formulario para actualizar la información de los bienes institucionales
     *
     * @author Henry Paredes <hparedes@cenditel.gob.ve>
     * @param  \Modules\Asset\Models\Asset  $asset  Datos del Bien
     * @return \Illuminate\View\View
     */
    public function edit($id)
    {
        $asset = Asset::find($id);
        return view('asset::registers.create', compact('asset'));
    }

    /**
     * Actualiza la información de los bienes institucionales
     *
     * @author Henry Paredes <hparedes@cenditel.gob.ve>
     * @param  \Illuminate\Http\Request  $request   Datos de la petición
     * @param  [Integer] $id                        Identificador único del bien
     * @return \Illuminate\Http\JsonResponse        Objeto con los registros a mostrar
     */
    public function update(Request $request, $id)
    {
        $asset = Asset::find($id);
        $this->validate($request, [

            'asset_type_id' => 'required',
            'asset_category_id' => 'required',
            'asset_subcategory_id' => 'required',
            'asset_specific_category_id' => 'required',
            'asset_acquisition_type_id' => 'required',
            'acquisition_year' => 'required|max:8',
            'asset_status_id' => 'required',
            'asset_condition_id' => 'required',
            'value' => 'required|regex:/^\d+(\.\d+)?$/u',
        ]);
        
        if ($request->asset_type_id == 1) {
            $this->validate($request,[
                'serial' => 'required|max:50',
                'marca'  => 'required|max:50',
                'model' => 'required|max:50',
            ]);
        }
        else if ($request->type_id == 2) {
            $this->validate($request,[
                'asset_use_function_id' => 'required',
                'parish_id' => 'required',
                'address' => 'required',
            ]);
        }

        $asset->asset_type_id = $request->asset_type_id;
        $asset->asset_category_id = $request->asset_category_id;
        $asset->asset_subcategory_id = $request->asset_subcategory_id;
        $asset->asset_specific_category_id = $request->asset_specific_category_id;
        $asset->specifications = $request->specifications;
        //$asset->proveedor_id = $request->proveedor_id;
        $asset->asset_condition_id = $request->asset_condition_id;
        $asset->asset_acquisition_type_id = $request->asset_acquisition_type_id;
        $asset->acquisition_year = $request->acquisition_year;
        $asset->serial = $request->serial;
        $asset->marca = $request->marca;
        $asset->model = $request->model;
        $asset->value = $request->value;
        $asset->asset_use_function_id = $request->asset_use_function_id;
        $asset->parish_id = $request->parish_id;
        $asset->address = $request->address;
        $asset->asset_status_id = $request->asset_status_id;
        
        $asset->save();

        $request->session()->flash('message', ['type' => 'update']);
        return response()->json(['result' => true, 'redirect' => route('asset.register.index')], 200);
    }

    /**
     * Elimina un bien institucional
     *
     * @author Henry Paredes <hparedes@cenditel.gob.ve>
     * @param  \Modules\Asset\Models\Asset $asset   Datos del Bien
     * @return \Illuminate\Http\JsonResponse        Objeto con los registros a mostrar
     */
    public function destroy(Asset $asset)
    {
        $asset->delete();
        return response()->json(['message' => 'destroy'], 200);
    }

    /**
     * Obtiene la información del bien institucional registrado
     *
     * @author Henry Paredes <hparedes@cenditel.gob.ve>
     * @param  \Modules\Asset\Models\Asset $asset   Datos del bien institucional
     * @return \Illuminate\Http\JsonResponse        Objeto con los registros a mostrar
     */
    public function vueInfo($id)
    {

        $asset = Asset::where('id', $id)->with(['asset_type', 'asset_category', 'asset_subcategory', 'asset_specific_category', 'asset_acquisition_type', 'asset_condition', 'asset_status', 'asset_use_function', 'parish' => function($query) {
                $query->with(['municipality' => function($query) {
                    $query->with(['estate' => function($query) {
                        $query->with('country')->get();
                    }])->get();
                }])->get();
        }])->first();

        return response()->json(['records' => $asset], 200);
        
    }

    /**
     * Otiene un listado de los bienes registradas
     *
     * @author Henry Paredes <hparedes@cenditel.gob.ve>
     * @return \Illuminate\Http\JsonResponse Objeto con los registros a mostrar
     */
    public function vueList()
    {
        return response()->json(['records' => Asset::with('asset_condition', 'asset_status')->get()], 200);
    }

    /**
     * Filtra por su código de clasificación los bienes registradas
     *
     * @author Henry Paredes <hparedes@cenditel.gob.ve>
     * @param  \Illuminate\Http\Request  $request   Datos de la petición
     * @return \Illuminate\Http\JsonResponse        Objeto con los registros a mostrar
     */
    public function searchClasification(Request $request)
    {
        $assets = Asset::AssetCodeClasification($request->asset_type, $request->asset_category, $request->asset_subcategory, $request->asset_specific_category)->with('asset_condition', 'asset_status')->get();

        return response()->json(['records' => $assets], 200);

    }

    /**
     * Filtra por su fecha de registro los bienes registradas
     *
     * @author Henry Paredes <hparedes@cenditel.gob.ve>
     * @param  \Illuminate\Http\Request  $request   Datos de la petición
     * @return \Illuminate\Http\JsonResponse        Objeto con los registros a mostrar
     */
    public function searchGeneral(Request $request)
    {
        $assets = Asset::DateClasification($request->start_date, $request->end_date, $request->mes_id, $request->year)->with('asset_condition','asset_status')->get();
        
        return response()->json(['records' => $assets], 200);
    }

    /**
     * Filtra por su ubicación en la institución los bienes registradas
     *
     * @author Henry Paredes <hparedes@cenditel.gob.ve>
     * @param  \Illuminate\Http\Request  $request   Datos de la petición
     * @return \Illuminate\Http\JsonResponse        Objeto con los registros a mostrar
     */
    public function searchDependence(Request $request){
        /*
         *  Falta filtrar por dependencia solicitante
         *  Validar tambien para múltiples instituciones
         *
         */
        return response()->json(['records' => Asset::with('asset_condition','asset_status')->get()], 200);
    }

}
