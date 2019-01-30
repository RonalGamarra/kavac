<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWarehouseProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('warehouse_products')) {    
            Schema::create('warehouse_products', function (Blueprint $table) {
                
                $table->increments('id')->comment('Identificador único del registro');
                $table->text('name')->nullable()->comment('Nombre del producto');
                $table->text('description')->nullable()->comment('Descripción del producto');
                
                $table->integer('unit_id')->unsigned()->comment('Unidad de medida del producto en la tabla unidades');
                $table->foreign('unit_id')->references('id')->on('warehouse_product_units')->onDelete('restrict')->onUpdate('cascade');            

                /**
                 * Fecha en la que se registra el Producto
                 */
                $table->timestamps();
                $table->softDeletes()->comment('Fecha y hora en la que el registro fue eliminado');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('warehouse_products');
    }
}