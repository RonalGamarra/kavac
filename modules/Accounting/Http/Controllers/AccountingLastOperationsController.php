<?php

namespace Modules\Accounting\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

use Modules\Accounting\Models\AccountingReportHistory;
use Modules\Accounting\Models\AccountingSeat;
use Modules\Accounting\Models\Currency;
use Auth;
class AccountingLastOperationsController extends Controller
{
    public function get_operations()
    {
        /** @var Object con la información de la modena por defecto establecida en la aplicación */
        $currency = Currency::where('default',true)->first();

        /** @var Object con la información de la modena por defecto establecida en la aplicación */
        $report_histories = AccountingReportHistory::orderBy('created_at','DESC')->get();

        /** @var Object con la información de los ultimos 10 asientos contables generados */
        $lastRecords = AccountingSeat::orderBy('updated_at','DESC')->take(10)->get();

        return response()->json(['lastRecords' => $lastRecords, 'currency' => $currency],200);
    }

    public function get_report_histories()
    {
        /** @var Object con la información de la modena por defecto establecida en la aplicación */
        $report_histories = [];

        for ($i=1; $i <= 6 ; $i++) { 
            $aux = AccountingReportHistory::where('report', $i)->orderBy('created_at','DESC')->first();
            if (!is_null($aux)) {
                array_push($report_histories, [
                                                'created_at' => $aux['created_at']->format('m/d/Y'),
                                                'name' => $aux['name'],
                                                'id' => $aux['id']
                                                ]);
            }
        }

        // $report_histories = json_encode($report_histories);
        return response()->json(['report_histories' => $report_histories],200);
    }
}
