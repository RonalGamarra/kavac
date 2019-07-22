<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * @class CreateAssetDisincorporationAssetsTable
 * @brief Crear tabla de los bienes registrados en una desincorporación
 * 
 * Gestiona la creación o eliminación de los bienes registrados en una desincorporación
 * 
 * @author Henry Paredes <hparedes@cenditel.gob.ve>
 * @copyright <a href='http://conocimientolibre.cenditel.gob.ve/licencia-de-software-v-1-3/'>LICENCIA DE SOFTWARE CENDITEL</a>
 */
class CreateAssetDisincorporationAssetsTable extends Migration
{
    /**
     * Método que ejecuta las migraciones
     *
     * @author  Henry Paredes <hparedes@cenditel.gob.ve>
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('asset_disincorporation_assets')) {
            Schema::create('asset_disincorporation_assets', function (Blueprint $table) {
                $table->increments('id')->comment('Identificador único del registro');

                $table->integer('asset_id')->unsigned()->nullable()->comment('Identificador único del bien en la tabla de bienes');
                $table->foreign('asset_id')->references('id')->on('assets')->onDelete('restrict')->onUpdate('cascade');

                $table->integer('asset_disincorporation_id')->unsigned()->nullable()->comment('Identificador único de la asignación generada');
                $table->foreign('asset_disincorporation_id')->references('id')->on('asset_disincorporations')->onDelete('restrict')->onUpdate('cascade');

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
        Schema::dropIfExists('asset_disincorporation_assets');
    }
}
