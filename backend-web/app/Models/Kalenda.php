<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Kalenda extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'event_name',
        'event_des',
        'location',
        'event_date',
        'end_date',
        'participants',
        'guest_of_honor',
        'created_by',
        'updated_by',
        'deleted_by',
        'status',
        'created_at',
        'updated_at',
    ];
    protected $dates = ['deleted_at'];
    
}