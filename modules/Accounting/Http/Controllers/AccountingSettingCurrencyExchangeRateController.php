<?php

namespace Modules\Accounting\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Modules\Accounting\Models\AccountingCurrencyExchangeRate;
use Modules\Accounting\Models\Currency;
use Auth;

class AccountingSettingCurrencyExchangeRateController extends Controller
{
    use ValidatesRequests;
    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index()
    {
        return view('accounting::index');
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {
        return view('accounting::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'currency_id' => 'required',
            'value' => 'required',
        ]);
        /** @var object Objeto para almacenar la información para el nuevo registro */
        $updateCurrency = AccountingCurrencyExchangeRate::where('currency_id',$request->id)->where('date',date("Y").'-'.date("m").'-'.date("d"))->first();
        // si no existe registro en esa fecha lo crea
        if (is_null($updateCurrency)) {
            $currency = new AccountingCurrencyExchangeRate();
            $currency->currency_id = $request->id;
            $currency->value = $request->value;
            $currency->date = date("Y").'-'.date("m").'-'.date("d");
            $currency->save();
        } else {
            // si ya existe un registro ene sa fecha, lo actualiza
            $updateCurrency->value = $request->value;
            $updateCurrency->save();
        }
        return response()->json(['message'=>'Success'],200);

    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        return view('accounting::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Response
     */
    public function edit($id)
    {
        return view('accounting::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
}