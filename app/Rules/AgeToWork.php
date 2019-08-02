<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

/**
 * @class AgeToWork
 * @brief Reglas de validación para la edad requerida para trabajar
 *
 * Gestiona las reglas de validación para validar la edad de un trabajar
 *
 * @author William Páez <wpaez@cenditel.gob.ve>
 * @license <a href='http://conocimientolibre.cenditel.gob.ve/licencia-de-software-v-1-3/'>LICENCIA DE SOFTWARE CENDITEL</a>
 */
class AgeToWork implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($age)
    {
        $this->age = $age;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return age(date($value)) >= $this->age;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        if( $this->age == 0 ) {
            return 'Todavía no ha configurado una edad laboral permitida en el panel de configuración de talento humano';
        }
        else {
            return 'El campo :attribute debe ser mayor o igual a '.$this->age;
        }
    }
}
