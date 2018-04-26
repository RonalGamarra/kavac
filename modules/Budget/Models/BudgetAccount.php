<?php

namespace Modules\Budget\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \Venturecraft\Revisionable\RevisionableTrait;

class BudgetAccount extends Model
{
	use SoftDeletes;
    use RevisionableTrait;
    protected $revisionCreationsEnabled = true;

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
    	'group', 'item', 'generic', 'specific', 'subspecific', 'denomination', 'active', 'resource',
    	'egress', 'tax_id', 'parent_id'
    ];

    public static function getParent($group, $item, $generic, $specific, $subspecific)
    {
        if ($item !== '00') {
            $parent = self::where('group', $group);
            if ($generic !== '00') {
                $parent = $parent->where('item', $item);
                if ($specific !== '00') {
                    $parent = $parent->where('generic', $generic);
                    if ($subspecific !== '00') {
                        $parent = $parent->where('specific', $specific);
                    }
                    else {
                        $parent = $parent->where('subspecific', '00');
                    }
                }
                else {
                    $parent = $parent->where('specific', '00');
                }
            }
            else {
                $parent = $parent->where('generic', '00');
            }
        }
        
        if (!isset($parent)) {
            return false;
        }

        return $parent->first();
    }

}
