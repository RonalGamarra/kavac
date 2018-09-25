<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\UploadImageRepository;
use App\Models\Institution;
use App\Models\Setting;

class InstitutionController extends Controller
{
    /** @var array Lista de elementos a mostrar */
    protected $data = [];

    /**
     * Método constructor de la clase
     *
     * @author  Ing. Roldan Vargas <rvargas at cenditel.gob.ve>
     */
    public function __construct() {
        $this->data[0] = [
            'id' => '',
            'text' => 'Seleccione...'
        ];
    }
    
    /**
     * Muesta todos los registros de las Instituciones
     *
     * @author  Ing. Roldan Vargas <rvargas at cenditel.gob.ve>
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['records' => Institution::all()], 200);
    }

    /**
     * Muestra el formulario para crear un nuevo registro de Institución
     *
     * @author  Ing. Roldan Vargas <rvargas at cenditel.gob.ve>
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Valida y registra una nueva Institución
     *
     * @author  Ing. Roldan Vargas <rvargas at cenditel.gob.ve>
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, UploadImageRepository $up)
    {
        $this->validate($request, [
            'onapre_code' => 'required|max:20',
            'rif' => 'required|max:10',
            'acronym' => 'required|max:100',
            'name' => 'required|max:100',
            'business_name' => 'required|max:100',
            'start_operations_date' => 'required|date',
            'legal_address' => 'required',
            'postal_code' => 'required|max:10',
            'institution_sector_id' => 'required',
            'institution_type_id' => 'required',
            'municipality_id' => 'required',
            'city_id' => 'required'
        ]);

        // AGREGAR VALIDACIÓN DE MULTIPLES INSTITUCIONES CUANDO SE DEFINEN COMO TRUE EN 
        // LA CONFIGURACION DE PARAMETROS

        $logo = $banner = null;
        if ($request->file('logo_id')) {
            /** Gestiona la carga del archivo de la imagen al servidor y la asigna al campo correspondiente */
            if ($up->uploadImage($request->file('logo_id'), 'pictures')) {
                $logo = $up->getImageStored()->id;
            }
        }
        if ($request->file('banner_id')) {
            /** Gestiona la carga del archivo de la imagen al servidor y la asigna al campo correspondiente */
            if ($up->uploadImage($request->file('banner_id'), 'pictures')) {
                $banner = $up->getImageStored()->id;
            }
        }

        $institution = Institution::updateOrCreate(
            ['active' => true, 'default' => true],
            [
                'onapre_code' => $request->input('onapre_code'),
                'rif' => $request->input('rif'),
                'acronym' => $request->input('acronym'),
                'name' => $request->input('name'),
                'business_name' => $request->input('business_name'),
                'start_operations_date' => $request->input('start_operations_date'),
                'legal_address' => $request->input('legal_address'),
                'postal_code' => $request->input('postal_code'),
                'institution_sector_id' => $request->input('institution_sector_id'),
                'institution_type_id' => $request->input('institution_type_id'),
                'municipality_id' => $request->input('municipality_id'),
                'city_id' => $request->input('city_id'),
                'default' => true,
                'active' => ($request->input('active')!==null),
                'legal_base' => ($request->input('legal_base'))?$request->input('legal_base'):null,
                'legal_form' => ($request->input('legal_form'))?$request->input('legal_form'):null,
                'main_activity' => ($request->input('main_activity'))?$request->input('main_activity'):null,
                'mission' => ($request->input('mission'))?$request->input('mission'):null,
                'vision' => ($request->input('vision'))?$request->input('vision'):null,
                'web' => ($request->input('web'))?$request->input('web'):null,
                'composition_assets' => ($request->input('composition_assets'))?$request->input('composition_assets'):null,
                'retention_agent' => ($request->input('retention_agent')!==null),
                'logo_id' => $logo,
                'banner_id' => $banner,
            ]
        );

        $request->session()->flash('message', ['type' => 'store']);
        return redirect()->route('settings.index');
    }

    /**
     * Muestra información acerca de la Institución
     *
     * @author  Ing. Roldan Vargas <rvargas at cenditel.gob.ve>
     * @param  \App\Models\Institution  $institution
     * @return \Illuminate\Http\Response
     */
    public function show(Institution $institution)
    {
        //
    }

    /**
     * Muestra el formulario para actualizar información de una Institución
     *
     * @author  Ing. Roldan Vargas <rvargas at cenditel.gob.ve>
     * @param  \App\Models\Institution  $institution
     * @return \Illuminate\Http\Response
     */
    public function edit(Institution $institution)
    {
        //
    }

    /**
     * Actualiza la información de la Institución
     *
     * @author  Ing. Roldan Vargas <rvargas at cenditel.gob.ve>
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Institution  $institution
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Institution $institution)
    {
        //
    }

    /**
     * Elimina la Institución seleccionada
     *
     * @author  Ing. Roldan Vargas <rvargas at cenditel.gob.ve>
     * @param  \App\Models\Institution  $institution
     * @return \Illuminate\Http\Response
     */
    public function destroy(Institution $institution)
    {
        //
    }

    public function getInstitutions()
    {
        foreach (Institution::all() as $institution) {
            $this->data[] = [
                'id' => $institution->id,
                'text' => $institution->name
            ];
        }

        return response()->json($this->data);
    }
}
