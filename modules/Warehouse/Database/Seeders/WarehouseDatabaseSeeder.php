<?php

namespace Modules\Warehouse\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

/**
 * @class WarehouseDatabaseSeeder
 * @brief Inicializa el Modulo de Almacén
 * 
 * 
 * @author Henry Paredes (henryp2804@gmail.com)
 * @copyright <a href='http://conocimientolibre.cenditel.gob.ve/licencia-de-software-v-1-3/'>LICENCIA DE SOFTWARE CENDITEL</a>
 */

class WarehouseDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call(WarehouseRoleAndPermissionsTableSeeder::class);
    }
}
