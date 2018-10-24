<?php

namespace Modules\Asset\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

use Modules\Asset\Models\AssetCondition;

/**
 * @class AssetConditionTableSeeder
 * @brief Inicializar Condiciones Físicas de los bienes
 * 
 * 
 * @author Henry Paredes (henryp2804@gmail.com)
 * @copyright <a href='http://conocimientolibre.cenditel.gob.ve/licencia-de-software-v-1-3/'>LICENCIA DE SOFTWARE CENDITEL</a>
 */

class AssetConditionTableSeeder extends Seeder
{
    /**
     * Método que registra los valores iniciales de las formas de la condición física de un bien
     *
     * @author  Henry Paredes (henryp2804@gmail.com)
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $asset_condition = [
            ['name' => 'Óptimo'],
            ['name' => 'Regular'],
            ['name' => 'Deteriorado'],
            ['name' => 'Averiado'],
            ['name' => 'Chatarra'],
            ['name' => 'No Operativo'],
            ['name' => 'Otra Condición Física']
            
        ];


           
            foreach ($asset_condition as $condition) {
                AssetCondition::updateOrCreate(
                    ['name' => $condition['name']]
                );
            }
    }
}
