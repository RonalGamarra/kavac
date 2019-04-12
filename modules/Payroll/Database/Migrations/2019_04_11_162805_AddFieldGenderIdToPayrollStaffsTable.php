<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddFieldGenderIdToPayrollStaffsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('payroll_staffs', function (Blueprint $table) {
            $table->integer('payroll_gender_id')->unsigned()
                  ->comment('identificador de género que pertenece al personal');
            $table->foreign('payroll_gender_id')->references('id')->on('payroll_genders')
                  ->onDelete('restrict')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
