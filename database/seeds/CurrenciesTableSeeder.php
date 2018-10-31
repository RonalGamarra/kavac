<?php

use Illuminate\Database\Seeder;

use Illuminate\Database\Eloquent\Model;
use Ultraware\Roles\Models\Role;
use Ultraware\Roles\Models\Permission;
use App\Models\Currency;
use App\Models\Country;

class CurrenciesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $country = Country::where('name', 'Venezuela')->first();

        Currency::updateOrCreate(
        	['country_id' => $country->id, 'symbol' => 'BsS'],
        	['name' => 'Bolívar Soberano', 'default' => true]
        );

        $adminRole = Role::where('slug', 'admin')->first();

        $permissions = [
        	[
        		'name' => 'Crear Monedas', 'slug' => 'currency.create',
                'description' => 'Acceso al registro de monedas', 
                'model' => 'App\Models\Currency', 'model_prefix' => '0general',
                'slug_alt' => 'moneda.crear', 'short_description' => 'agregar moneda'
        	],
        	[
                'name' => 'Editar Monedas', 'slug' => 'currency.edit',
                'description' => 'Acceso para editar monedas', 
                'model' => 'App\Models\Currency', 'model_prefix' => '0general',
                'slug_alt' => 'moneda.editar', 'short_description' => 'editar moneda'
            ],
            [
                'name' => 'Eliminar Monedas', 'slug' => 'currency.delete',
                'description' => 'Acceso para eliminar monedas', 
                'model' => 'App\Models\Currency', 'model_prefix' => '0general',
                'slug_alt' => 'moneda.eliminar', 'short_description' => 'eliminar moneda'
            ],
            [
                'name' => 'Ver Monedas', 'slug' => 'currency.list',
                'description' => 'Acceso para ver monedas', 
                'model' => 'App\Models\Currency', 'model_prefix' => '0general',
                'slug_alt' => 'moneda.ver', 'short_description' => 'ver monedas'
            ],
        ];

        foreach ($permissions as $permission) {
            $per = Permission::updateOrCreate(
                ['slug' => $permission['slug']],
                [
                    'name' => $permission['name'], 'description' => $permission['description'],
                    'model' => $permission['model'], 'model_prefix' => $permission['model_prefix'],
                    'slug_alt' => $permission['slug_alt'], 'short_description' => $permission['short_description']
                ]
            );
            if ($adminRole) {
                $adminRole->attachPermission($per);
            }
        }
    }
}