<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    public function index()
    {
        return response()->json(Skill::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'group' => 'required|string',
            'name' => 'required|string',
            'level' => 'required|string',
            'icon' => 'nullable|string',
            'progress' => 'required|integer',
        ]);

        return response()->json(Skill::create($validated), 201);
    }

    public function show(Skill $skill)
    {
        return response()->json($skill);
    }

    public function update(Request $request, Skill $skill)
    {
        $validated = $request->validate([
            'group' => 'sometimes|string',
            'name' => 'sometimes|string',
            'level' => 'sometimes|string',
            'icon' => 'nullable|string',
            'progress' => 'sometimes|integer',
        ]);

        $skill->update($validated);

        return response()->json($skill);
    }

    public function destroy(Skill $skill)
    {
        $skill->delete();

        return response()->json(['message' => 'Skill deleted']);
    }
}
