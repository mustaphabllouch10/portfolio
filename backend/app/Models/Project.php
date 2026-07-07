<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title',
        'description',
        'image',
        'technologies',
        'features',
        'challenges',
        'lessons',
        'github',
        'demo',
    ];

    protected $casts = [
        'technologies' => 'array',
        'features' => 'array',
        'challenges' => 'array',
        'lessons' => 'array',
    ];
}
