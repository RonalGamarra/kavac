<?php

namespace Modules\Asset\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

use Illuminate\Foundation\Validation\ValidatesRequests;
use Modules\Asset\Models\AssetAsignation;
use Modules\Asset\Models\Asset;
/*
 * use Modules\Payroll\Models\PayrollStaff
 */
use Modules\Asset\Models\AssetType;
use Modules\Asset\Models\AssetCategory;
use Modules\Asset\Models\AssetSubcategory;
use Modules\Asset\Models\AssetSpecificCategory;

/**
 * @class AssetAsignationController
 * @brief Controlador de Asignaciones de Bienes Institucionales
 * 
 * Clase que gestiona las Asignaciones de Bienes Institucionales
 * 
 * @author Henry Paredes (henryp2804@gmail.com)
 * @copyright <a href='http://conocimientolibre.cenditel.gob.ve/licencia-de-software-v-1-3/'>LICENCIA DE SOFTWARE CENDITEL</a>
 */

class AssetAsignationController extends Controller
{
    use ValidatesRequests;

    /**
     * Muestra un listado de las Asignaciones de Bienes Institucionales
     *
     * @author Henry Paredes (henryp2804@gmail.com)
     * @return \Illuminate\Http\Response (JSON con los registros a mostrar)
     */
    public function index()
    {
        $assets = Asset::all();
        $asset_asignations = AssetAsignation::all();
        return view('asset::asignations.list', compact('assets','asset_asignations'));
    }

    /**
     * Muestra el formulario para registrar una nueva Asignación de Bienes Institucionales
     *
     * @author Henry Paredes (henryp2804@gmail.com)
     * @return \Illuminate\Http\Response (JSON con los registros a mostrar)
     */
    public function create()
    {
        $header = [
            'route' => 'asset.asignation.store', 'method' => 'POST', 'role' => 'form', 'class' => 'form-horizontal',
        ];

        $assets = Asset::template_choices();
        $types = AssetType::template_choices();
        $categories = AssetCategory::template_choices();
        $subcategories = AssetSubcategory::template_choices();
        $specific_categories = AssetSpecificCategory::template_choices();

        return view('asset::asignations.create', compact('header','assets','types','categories','subcategories','specific_categories'));
    }

    /**
     * Muestra el formulario para registrar una nueva Asignación de un Bien Institucional
     *
     * @author Henry Paredes (henryp2804@gmail.com)
      * @param  \Modules\Asset\Models\Asset  $asset (Datos del Bien)
     * @return \Illuminate\Http\Response (JSON con los registros a mostrar)
     */
    public function Asset_Assign(Asset $asset)
    {
        $header = [
            'route' => 'asset.asignation.store', 'method' => 'POST', 'role' => 'form', 'class' => 'form-horizontal',
        ];

        $asignation = new AssetAsignation;
        $asignation->asset_id = $asset->id;
        $assets = Asset::template_choices(['id' => $asset->id]);
        $types = AssetType::template_choices();
        $categories = AssetCategory::template_choices();
        $subcategories = AssetSubcategory::template_choices();
        $specific_categories = AssetSpecificCategory::template_choices();

        return view('asset::asignations.create', compact('header','asignation','assets','types','categories','subcategories','specific_categories'));
        }

    /**
     * Valida y Registra una nueva Asignación de Bienes Institucionales
     *
     * @author Henry Paredes (henryp2804@gmail.com)
     * @param  \Illuminate\Http\Request  $request (Datos de la petición)
     * @return \Illuminate\Http\Response (JSON con los registros a mostrar)
     */
    public function store(Request $request)
    {
        $this->validate($request, [

            'asset_type' => 'required',
            'asset_category' => 'required',
            'asset_subcategory' => 'required',
            'asset_specific_category' => 'required',
            'asset' => 'required',
            //'staff_ubication' => 'required',
            //'staff' => 'required',

        ]);
        $asignation = new AssetAsignation;

        $asignation->asset_id = $request->asset;
        $asignation->staff_id = $request->staff;

        $asignation->save();
        return redirect()->route('asset.asignation.index');

    }

    /**
     * Muestra los datos de las Asignaciones de Bienes Institucionales
     *
     * @author Henry Paredes (henryp2804@gmail.com)
     * @param  \Modules\Asset\Models\AssetAsignation  $asignation (Datos de la asignacion de un Bien)
     * @return \Illuminate\Http\Response (Objeto con los datos a mostrar)
     */
    public function show(AssetAsignation $asignation)
    {
        
    }

    /**
     * Muestra el formulario para actualizar la información de las Asignaciones de Bienes Institucionales
     *
     * @author Henry Paredes (henryp2804@gmail.com)
     * @param  \Modules\Asset\Models\AssetAsignation  $asignation (Datos de la Asignación de un Bien)
     * @return \Illuminate\Http\Response (Objeto con los datos a mostrar)
     */
    public function edit(AssetAsignation $asignation)
    {
        $header = [
            'route' => ['asset.asignation.update', $asignation], 'method' => 'PUT', 'role'=> 'form', 'class' => 'form',
        ];
        
        $assets = Asset::template_choices();
        $types = AssetType::template_choices();
        $categories = AssetCategory::template_choices();
        $subcategories = AssetSubcategory::template_choices();
        $specific_categories = AssetSpecificCategory::template_choices();

        return view('asset::asignations.create', compact('header', 'asignation', 'assets', 'types', 'categories', 'subcategories', 'specific_categories'));
    }

    /**
     * Actualiza la información de las Asignaciones de Bienes Institucionales
     *
     * @author Henry Paredes (henryp2804@gmail.com)
     * @param  \Illuminate\Http\Request  $request (Datos de la petición)
     * @param  \Modules\Asset\Models\AssetAsignation  $asignation (Datos de la Asignación de un Bien)
     * @return \Illuminate\Http\Response (JSON con los registros a mostrar)
     */
    public function update(Request $request, AssetAsignation $asignation)
    {
        $this->validate($request, [

            'asset_type' => 'required',
            'asset_category' => 'required',
            'asset_subcategory' => 'required',
            'asset_specific_category' => 'required',
            'asset' => 'required',
            'staff_ubication' => 'required',
            'staff' => 'required',

        ]);

        $asignation->asset_id = $request->asset;
        $asignation->staff_id = $request->staff;

        $asignation->save();
        return redirect()->route('asset.asignation.index');
    }

    /**
     * Elimina una Asignación de un Bien Institucional
     *
     * @author Henry Paredes (henryp2804@gmail.com)
     * @param  \Modules\Asset\Models\AssetAsignation $asignation (Datos de la Asignación de un Bien)
     * @return \Illuminate\Http\Response (JSON con los registros a mostrar)
     */
    public function destroy(AssetAsignation $asignation)
    {
        $asignation->delete();
        return back()->with('info', 'Fue eliminado exitosamente');
    }
}
