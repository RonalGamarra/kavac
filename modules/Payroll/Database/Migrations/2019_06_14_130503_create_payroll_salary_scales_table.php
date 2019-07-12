<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * @class CreatePayrollSalaryScalesTable
 * @brief Crear tabla de escalafones salariales
 *
 * Gestiona la creación o eliminación de la tabla de escalafones salariales
 * 
 * @author Henry Paredes (henryp2804@gmail.com)
 * @copyright <a href='http://conocimientolibre.cenditel.gob.ve/licencia-de-software-v-1-3/'>LICENCIA DE SOFTWARE CENDITEL</a>
 */
class CreatePayrollSalaryScalesTable extends Migration
{
    /**
     * Método que ejecuta las migraciones
     *
     * @author Henry Paredes (henryp2804@gmail.com)
     */
    public function up()
    {
        Schema::create('payroll_salary_scales', function (Blueprint $table) {
            $table->increments('id')->comment('Identificador único del registro');
            $table->string('name')->comment('Nombre del escalafón salarial');
            $table->text('description')->nullable()->comment('Descripción del escalafón salarial');
            
            $table->boolean('active')->default(false)->comment('Indica si el escalafón esta activo');
            $table->timestamps();
            $table->softDeletes()->comment('Fecha y hora en la que el registro fue eliminado');
        });
    }

    /**
     * Método que elimina las migraciones
     *
     * @author Henry Paredes (henryp2804@gmail.com)
     */
    public function down()
    {
        Schema::dropIfExists('payroll_salary_scales');
    }
}
