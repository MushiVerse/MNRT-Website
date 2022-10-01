<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Forest extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'image_slider',
        'image_slider_description',
        'media_title',
        'media_description',
        'media_link',
        'media_video',
        'card_link',
        'card_img',
        'about_description',
        'about_img',
        'about_link',
        'status',
        'pub_date',
        'created_by',
        'updated_by',
        'deleted_by',
        'created_at',
        'updated_at',
    ];
    protected $dates = ['deleted_at'];
}
