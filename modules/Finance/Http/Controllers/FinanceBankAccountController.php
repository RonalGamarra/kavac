<?php

namespace Modules\Finance\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Modules\Finance\Models\FinanceBank;
use Modules\Finance\Models\FinanceBankAccount;

class FinanceBankAccountController extends Controller
{
    use ValidatesRequests;

    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index()
    {
        return response()->json([
            'records' => FinanceBankAccount::with(['finance_banking_agency' => function($query) {
                return $query->with('finance_bank');
            }])->orderBy('ccc_number')->get()
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {
        return view('finance::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param  Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'ccc_number' => 'required|max:20|unique:finance_bank_accounts,ccc_number',
            'description' => 'required',
            'opened_at' => 'required|date',
            'finance_banking_agency_id' => 'required',
            'finance_account_type_id' => 'required'
        ]);

        $financeBankAccount = FinanceBankAccount::create([
            'ccc_number' => $request->bank_code . $request->ccc_number,
            'description' => $request->description,
            'opened_at' => $request->opened_at,
            'finance_banking_agency_id' => $request->finance_banking_agency_id,
            'finance_account_type_id' => $request->finance_account_type_id
        ]);

        return response()->json(['record' => $financeBankAccount, 'message' => 'Success'], 200);
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
        $bankAccount = FinanceBankAccount::find($id);

        $this->validate($request, [
            'ccc_number' => 'required|max:20|unique:finance_bank_accounts,ccc_number,' . substr($bankAccount->ccc_number, 4),
            'description' => 'required',
            'opened_at' => 'required|date',
            'finance_banking_agency_id' => 'required',
            'finance_account_type_id' => 'required'
        ]);
 
        $bankAccount->ccc_number = $request->bank_code . $request->ccc_number;
        $bankAccount->description = $request->description;
        $bankAccount->opened_at = $request->opened_at;
        $bankAccount->finance_banking_agency_id = $request->finance_banking_agency_id;
        $bankAccount->finance_account_type_id = $request->finance_account_type_id;
        $bankAccount->save();
 
        return response()->json(['message' => 'Registro actualizado correctamente'], 200);
    }

    /**
     * Remove the specified resource from storage.
     * @return Response
     */
    public function destroy($id)
    {
        $financeBankAccount = FinanceBankAccount::find($id);
        $financeBankAccount->delete();
        return response()->json(['record' => $financeBankAccount, 'message' => 'Success'], 200);
    }

    /**
     * Obtiene todas las cuentas bancarias asociadas a una entidad bancaria
     *
     * @author Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
     * @param  integer $bank_id Identificador de la entidad bancaria de la que se desean obtener las cuentas
     * @return JSON             JSON con los datos de las cuentas bancarias asociadas al banco
     */
    public function getBankAccounts($bank_id)
    {
        $bank = FinanceBank::where('id', $bank_id)->with(['finance_agencies' => function($query) {
            return $query->with('bank_accounts');
        }])->first();

        $accounts = [['id' => '', 'text' => 'Seleccione...']];
        foreach ($bank->finance_agencies as $agency) {
            foreach ($agency->bank_accounts as $bank_account) {
                $accounts[] = [
                    'id' => $bank_account->id,
                    'text' => $bank->code . $bank_account->ccc_number
                ];
            }
        }
        
        return response()->json(['result' => true, 'accounts' => $accounts], 200);
    }
}
