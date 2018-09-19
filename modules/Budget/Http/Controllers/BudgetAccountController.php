<?php

namespace Modules\Budget\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Modules\Budget\Models\BudgetAccount;
use Auth;

class BudgetAccountController extends Controller
{
    use ValidatesRequests;

    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index()
    {
        $records = BudgetAccount::all();
        return view('budget::accounts.list');
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {
        $header = [
            'route' => 'budget.accounts.store', 
            'method' => 'POST', 
            'role' => 'form',
            'class' => 'form-horizontal',
        ];
        $budget_accounts = BudgetAccount::template_choices(['subspecific' => '00']);
        return view('budget::accounts.create-edit-form', compact('header', 'budget_accounts'));
    }

    /**
     * Store a newly created resource in storage.
     * @param  Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'group' => 'required|digits:1',
            'item' => 'required|digits:2',
            'generic' => 'required|digits:2',
            'specific' => 'required|digits:2',
            'subspecific' => 'required|digits:2',
            'denomination' => 'required',
            'account_type' => 'required',
        ]);

        /** @var [object] Obtiene los datos de la cuenta ya registrada si existe */
        $budgetAccount = BudgetAccount::where('group', request('group'))
                                      ->where('item', request('item'))
                                      ->where('generic', request('generic'))
                                      ->where('specific', request('specific'))
                                      ->where('subspecific', request('subspecific'))
                                      ->where('active', true)->first();

        /**
         * Si la cuenta a registrar ya existe en la base de datos y la nueva cuenta se indica como activa, 
         * se desactiva la cuenta anterior
         */
        if ($budgetAccount && $request->input('active')!==null) {
            $budgetAccount->active = false;
            $budgetAccount->save();
        }

        /**
         * Busca la cuenta asociada de nivel superior
         */
        $parent = BudgetAccount::getParent(
            request('group'), request('item'), request('generic'), request('specific'), request('subspecific')
        );

        /**
         * Registra la nueva cuenta presupuestaria
         */
        BudgetAccount::create([
            'group' => $request->input('group'),
            'item' => $request->input('item'),
            'generic' => $request->input('generic'),
            'specific' => $request->input('specific'),
            'subspecific' => $request->input('subspecific'),
            'denomination' => $request->input('denomination'),
            'resource' => ($request->input('account_type')=="resource"),
            'egress' => ($request->input('account_type')=="egress"),
            'active' => ($request->input('active')!==null),
            'original' => ($request->input('original')!==null),
            'parent_id' => ($parent == false)?null:$parent->id
        ]);
        
        $request->session()->flash('message', ['type' => 'store']);
        return redirect()->route('budget.accounts.index');
    }

    /**
     * Show the specified resource.
     * @return Response
     */
    public function show()
    {
        //return view('budget::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @return Response
     */
    public function edit($id)
    {
        $budgetAccount = BudgetAccount::find($id);
        $header = [
            'route' => ['budget.accounts.update', $budgetAccount->id], 
            'method' => 'PUT', 
            'role' => 'form'
        ];
        $budget_accounts = BudgetAccount::template_choices(['subspecific' => '00']);
        $model = $budgetAccount;
        return view('budget::accounts.create-edit-form', compact('header', 'budget_accounts', 'model'));
    }

    /**
     * Update the specified resource in storage.
     * @param  Request $request
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'group' => 'required|digits:1',
            'item' => 'required|digits:2',
            'generic' => 'required|digits:2',
            'specific' => 'required|digits:2',
            'subspecific' => 'required|digits:2',
            'denomination' => 'required',
            'account_type' => 'required',
        ]);

        $budgetAccount = BudgetAccount::find($id);
        $budgetAccount->fill($request->all());
        $budgetAccount->save();

        $request->session()->flash('message', ['type' => 'update']);
        return redirect()->route('budget.accounts.index');
    }

    /**
     * Remove the specified resource from storage.
     * @return Response
     */
    public function destroy($id)
    {
        $budgetAccount = BudgetAccount::find($id);

        if ($budgetAccount) {
            $budgetAccount->delete();
        }
        
        return response()->json(['record' => $budgetAccount, 'message' => 'Success'], 200);
    }

    public function vueList()
    {
        return response()->json(['records' => BudgetAccount::all()], 200);
    }
}