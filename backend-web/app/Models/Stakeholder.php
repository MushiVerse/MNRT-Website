<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Stakeholder extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'category',
        'sthdr_name',
        'phone',
        'email',
        'postal_address',
        'physical_address',
        'country',
        'website',
        'licence_status',
        'created_by',
        'updated_by',
        'deleted_by',
        'status',
        'created_at',
        'updated_at',
    ];
    protected $dates = ['deleted_at'];
    
}