<?php

namespace Modules\Purchase\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Municipality as BaseMunicipality;

class Municipality extends BaseMunicipality
{
    /**
     * City has many Purchase_suppliers.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function purchase_suppliers()
    {
    	return $this->hasMany(PurchaseSupplier::class);
    }
}
