<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        return response()->json(Project::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'image' => 'nullable|string',
            'technologies' => 'required|array',
            'features' => 'required|array',
            'challenges' => 'required|array',
            'lessons' => 'required|array',
            'github' => 'nullable|string',
            'demo' => 'nullable|string',
        ]);

        $project = Project::create($validated);

        return response()->json($project, 201);
    }

    public function show(Project $project)
    {
        return response()->json($project);
    }

    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'title' => 'sometimes|string',
            'description' => 'sometimes|string',
            'image' => 'nullable|string',
            'technologies' => 'sometimes|array',
            'features' => 'sometimes|array',
            'challenges' => 'sometimes|array',
            'lessons' => 'sometimes|array',
            'github' => 'nullable|string',
            'demo' => 'nullable|string',
        ]);

        $project->update($validated);

        return response()->json($project);
    }

    public function destroy(Project $project)
    {
        $project->delete();

        return response()->json(['message' => 'Project deleted']);
    }
}
