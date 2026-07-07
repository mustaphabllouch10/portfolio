<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $fillable = ['group', 'name', 'level', 'icon', 'progress'];
}
