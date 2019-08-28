<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * @class UpdateFieldsToWarehouseProductValuesTable
 * @brief Actualiza los campos de la tabla de valores de los atributos de productos almacenables
 *
 * Gestiona la actualización de los campos de la tabla de valores de los atributos de productos almacenables
 *
 * @author Henry Paredes <hparedes@cenditel.gob.ve>
 * @license <a href='http://conocimientolibre.cenditel.gob.ve/licencia-de-software-v-1-3/'>
 *              LICENCIA DE SOFTWARE CENDITEL
 *          </a>
 */
class UpdateFieldsToWarehouseProductValuesTable extends Migration
{
    /**
     * Método que ejecuta las migraciones
     *
     * @author  Henry Paredes <hparedes@cenditel.gob.ve>
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('warehouse_product_values');
        
        if (!Schema::hasTable('warehouse_product_values')) {
            Schema::create('warehouse_product_values', function (Blueprint $table) {
                $table->increments('id')->comment('Identificador único del registro');
                $table->string('value', 100)->comment('Valor o descripción del atributo');
                
                $table->integer('warehouse_product_attribute_id')->unsigned()
                      ->comment('Identificador único del atributo del producto');
                $table->foreign('warehouse_product_attribute_id')->references('id')->on('warehouse_product_attributes')
                      ->onDelete('restrict')->onUpdate('cascade');

                $table->integer('warehouse_inventory_product_id')->unsigned()
                      ->comment('Identificador único del producto en el inventario');
                $table->foreign('warehouse_inventory_product_id')->references('id')->on('warehouse_inventory_products')
                      ->onDelete('restrict')->onUpdate('cascade');

                $table->timestamps();
            });
        }
    }

    /**
     * Método que elimina las migraciones
     *
     * @author Henry Paredes <hparedes@cenditel.gob.ve>
     * @return void
     */
    public function down()
    {
        Schema::table('warehouse_product_values', function (Blueprint $table) {
        });
    }
}
