<?php

namespace Modules\Purchase\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use OwenIt\Auditing\Contracts\Auditable;
use OwenIt\Auditing\Auditable as AuditableTrait;
use App\Traits\ModelsTrait;

class PurchasePlan extends Model implements Auditable
{
    use SoftDeletes;
    use AuditableTrait;
    use ModelsTrait;

    /**
     * Lista de atributos para la gestión de fechas
     * @var array $dates
     */
    protected $dates = ['deleted_at'];

    /**
     * Lista de atributos que pueden ser asignados masivamente
     * @var array $fillable
     */
    protected $fillable = ['init_date', 'end_date', 'purchase_processes_id', 'purchase_type_id'];

    /**
     * PurchasePlan belongs to PurchaseProcess.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function purchaseProcess()
    {
        // belongsTo(RelatedModel, foreignKey = purchaseProcess_id, keyOnRelatedModel = id)
        return $this->belongsTo(PurchaseProcess::class, 'purchase_processes_id');
    }

    /**
     * PurchasePlan belongs to PurchaseType.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function purchaseType()
    {
        // belongsTo(RelatedModel, foreignKey = purchaseType_id, keyOnRelatedModel = id)
        return $this->belongsTo(PurchaseType::class);
    }
}
