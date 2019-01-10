<?php

namespace Modules\Budget\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Foundation\Validation\ValidatesRequests;

use App\Models\Institution;
use App\Models\Department;
use Modules\Payroll\Models\PayrollPosition;
use Modules\Payroll\Models\PayrollStaff;
use Modules\Budget\Models\BudgetProject;

class BudgetProjectController extends Controller
{
    use ValidatesRequests;

    /**
     * Define la configuración de la clase
     *
     * @author Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
     */
    public function __construct()
    {
        /** Establece permisos de acceso para cada método del controlador */
        $this->middleware('permission:budget.project.list', ['only' => 'index', 'vueList']);
        $this->middleware('permission:budget.project.create', ['only' => ['create', 'store']]);
        $this->middleware('permission:budget.project.edit', ['only' => ['edit', 'update']]);
        $this->middleware('permission:budget.project.delete', ['only' => 'destroy']);
    }
    
    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index()
    {
        return view('budget::index');
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {
        $header = [
            'route' => 'budget.projects.store', 
            'method' => 'POST', 
            'role' => 'form',
            'class' => 'form-horizontal',
        ];
        $institutions = Institution::template_choices();
        $departments = Department::template_choices();
        $positions = PayrollPosition::template_choices();
        $staffs = PayrollStaff::template_choices();
        return view('budget::projects.create-edit-form', compact(
            'header', 'institutions', 'departments', 'positions', 'staffs'
        ));
    }

    /**
     * Store a newly created resource in storage.
     * @param  Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'institution_id' => 'required',
            'department_id' => 'required',
            'payroll_position_id' => 'required',
            'payroll_staff_id' => 'required',
            'code' => 'required',
            'onapre_code' => 'required',
            'name' => 'required',
        ]);

        /**
         * Registra el nuevo proyecto
         */
        BudgetProject::create([
            'name' => $request->name,
            'code' => $request->code,
            'onapre_code' => $request->onapre_code,
            'active' => ($request->active!==null),
            'department_id' => $request->department_id,
            'payroll_position_id' => $request->payroll_position_id,
            'payroll_staff_id' => $request->payroll_staff_id
        ]);

        $request->session()->flash('message', ['type' => 'store']);
        return redirect()->route('budget.settings.index');
    }

    /**
     * Show the specified resource.
     * @return Response
     */
    public function show()
    {
        return view('budget::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @return Response
     */
    public function edit($id)
    {
        $budgetProject = BudgetProject::find($id);
        $header = [
            'route' => ['budget.projects.update', $budgetProject->id], 
            'method' => 'PUT', 
            'role' => 'form'
        ];
        $model = $budgetProject;
        $institutions = Institution::template_choices();
        $departments = Department::template_choices();
        $positions = PayrollPosition::template_choices();
        $staffs = PayrollStaff::template_choices();
        return view('budget::projects.create-edit-form', compact(
            'header', 'model', 'institutions', 'departments', 'positions', 'staffs'
        ));
    }

    /**
     * Update the specified resource in storage.
     * @param  Request $request
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'institution_id' => 'required',
            'department_id' => 'required',
            'payroll_position_id' => 'required',
            'payroll_staff_id' => 'required',
            'code' => 'required',
            'onapre_code' => 'required',
            'name' => 'required',
        ]);

        $budgetProject = BudgetProject::find($id);
        $budgetProject->fill($request->all());
        $budgetProject->save();

        $request->session()->flash('message', ['type' => 'update']);
        return redirect()->route('budget.settings.index');
    }

    /**
     * Remove the specified resource from storage.
     * @return Response
     */
    public function destroy($id)
    {
        $budgetProject = BudgetProject::find($id);

        if ($budgetProject) {
            $budgetProject->delete();
        }
        
        return response()->json(['record' => $budgetProject, 'message' => 'Success'], 200);
    }

    public function vueList()
    {
        return response()->json([
            'records' => BudgetProject::where('active', true)->with('payroll_staff')->get()
        ], 200);
    }
}
