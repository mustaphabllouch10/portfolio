<?php

use App\Http\Controllers\ContactMessageController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SkillController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('projects', ProjectController::class);
Route::apiResource('skills', SkillController::class);
Route::apiResource('experiences', ExperienceController::class);
Route::post('contact', [ContactMessageController::class, 'store']);
