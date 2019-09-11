<?php

namespace Modules\Payroll\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Altek\Accountant\Contracts\Recordable;
use Altek\Accountant\Recordable as RecordableTrait;
use App\Traits\ModelsTrait;

/**
 * @class PayrollProfessionalInformation
 * @brief Datos de la información profesional del trabajador
 *
 * Gestiona el modelo de información profesional del trabajador
 *
 * @author William Páez <wpaez@cenditel.gob.ve>
 * @license <a href='http://conocimientolibre.cenditel.gob.ve/licencia-de-software-v-1-3/'>
 *              LICENCIA DE SOFTWARE CENDITEL
 *          </a>
 */
class PayrollProfessionalInformation extends Model implements Recordable
{
    use SoftDeletes;
    use RecordableTrait;
    use ModelsTrait;

    protected $table = 'payroll_professional_informations';

    /**
     * Lista de atributos para la gestión de fechas
     * @var array $dates
     */
    protected $dates = ['deleted_at'];

    /**
     * Lista de atributos que pueden ser asignados masivamente
     *
     * @var array $fillable
     */
    protected $fillable = [
        'payroll_instruction_degree_id', 'instruction_degree_name', 'is_student',
        'payroll_study_type_id', 'study_program_name', 'class_schedule',
        'payroll_language_id', 'payroll_language_level_id', 'payroll_staff_id'
    ];

    /**
     * Método que obtiene la información profesional del trabajador asociado a una información personal del mismo
     *
     * @author  William Páez <wpaez@cenditel.gob.ve>
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function payrollStaff()
    {
        return $this->belongsTo(PayrollStaff::class);
    }

    /**
     * Método que obtiene la información profesional del trabajador asociado a un grado de instrucción
     *
     * @author  William Páez <wpaez@cenditel.gob.ve>
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function payrollInstructionDegree()
    {
        return $this->belongsTo(PayrollInstructionDegree::class);
    }

    /**
     * Método que obtiene las informacines profesionales del trabajador que están asociadas a muchas profesiones
     *
     * @author  William Páez <wpaez@cenditel.gob.ve>
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function professions()
    {
        return $this->belongsToMany(Profession::class)->withTimestamps();
    }

    /**
     * Método que obtiene la información profesional del trabajador asociado a un tipo de estudio
     *
     * @author  William Páez <wpaez@cenditel.gob.ve>
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function payrollStudyType()
    {
        return $this->belongsTo(PayrollStudyType::class);
    }

    /**
     * Método que obtiene la información profesional del trabajador asociado a un idioma
     *
     * @author  William Páez <wpaez@cenditel.gob.ve>
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function payrollLanguage()
    {
        return $this->belongsTo(PayrollLanguage::class);
    }

    /**
     * Método que obtiene la información profesional del trabajador asociado a un nivel de idioma
     *
     * @author  William Páez <wpaez@cenditel.gob.ve>
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function payrollLanguageLevel()
    {
        return $this->belongsTo(PayrollLanguageLevel::class);
    }
}
