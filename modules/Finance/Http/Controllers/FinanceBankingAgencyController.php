<?php

namespace Modules\Finance\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Modules\Finance\Models\FinanceBankingAgency;
use App\Models\City;

class FinanceBankingAgencyController extends Controller
{
    use ValidatesRequests;

    /** @var array Lista de elementos a mostrar */
    protected $data = [];

    /**
     * Método constructor de la clase
     *
     * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
     */
    public function __construct() {
        $this->data[0] = [
            'id' => '',
            'text' => 'Seleccione...'
        ];
    }

    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index()
    {
        return response()->json(['records' => FinanceBankingAgency::with(['bank', 'city', 'phones'])->get()], 200);
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     * @param  Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'direction' => 'required',
            'city_id' => 'required',
            'finance_bank_id' => 'required'
        ]);

        $bankingAgency = FinanceBankingAgency::create([
            'name' => $request->name,
            'direction' => $request->direction,
            'finance_bank_id' => $request->finance_bank_id,
            'contact_person' => (!empty($request->contact_person)) 
                                ? $request->contact_person 
                                : null,
            'contact_email' => (!empty($request->contact_email)) 
                               ? $request->contact_email 
                               : null,
            'headquarters' => (!is_null($request->headquarters)),
            'city_id' => $request->city_id,
        ]);


        if ($request->input('phones')) {
            // Guardar número telefónicos
        }

        return response()->json(['record' => $bankingAgency, 'message' => 'Success'], 200);
    }

    /**
     * Show the specified resource.
     * @return Response
     */
    public function show()
    {
        return view('finance::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @return Response
     */
    public function edit()
    {
        return view('finance::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param  Request $request
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required',
            'direction' => 'required',
            'city_id' => 'required',
            'finance_bank_id' => 'required'
        ]);

        $financeBankingAgency = FinanceBankingAgency::find($id);
        $financeBankingAgency->fill($request->all());
        $financeBankingAgency->contact_person = (!empty($request->contact_person)) 
                                                ? $request->contact_person 
                                                : null;
        $financeBankingAgency->contact_email = (!empty($request->contact_email)) 
                                               ? $request->contact_email 
                                               : null;
        $financeBankingAgency->headquarters = (!is_null($request->headquarters));
        $financeBankingAgency->save();

        return response()->json(['message' => 'Registro actualizado correctamente'], 200);

    }

    /**
     * Remove the specified resource from storage.
     * @return Response
     */
    public function destroy()
    {
    }

    /**
     * Obtiene las agencias bancarias registradas
     * @param  integer $bank_id Identificador del banco
     * @return Response         JSON con el listado de las agencias bancarias
     */
    public function getAgencies($bank_id = null)
    {
        $agencies = ($bank_id) 
                    ? FinanceBankingAgency::where('finance_bank_id', $bank_id)->get() 
                    : FinanceBankingAgency::all();

        foreach ($agencies as $agency) {
            $this->data[] = [
                'id' => $agency->id,
                'text' => $agency->name
            ];
        }

        return response()->json($this->data);
    }
}
