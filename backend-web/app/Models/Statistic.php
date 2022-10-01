<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Statistic extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
    'item_name',
    'item_count',
    'stat_source',
    'created_by',
    'updated_by',
    'deleted_by',
    'status',
    'created_at',
    'updated_at',
];
protected $dates = ['deleted_at'];

}