<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use Illuminate\Http\Request;

class ExperienceController extends Controller
{
    public function index()
    {
        return response()->json(Experience::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'period' => 'required|string',
            'description' => 'required|string',
        ]);

        return response()->json(Experience::create($validated), 201);
    }

    public function show(Experience $experience)
    {
        return response()->json($experience);
    }

    public function update(Request $request, Experience $experience)
    {
        $validated = $request->validate([
            'title' => 'sometimes|string',
            'period' => 'sometimes|string',
            'description' => 'sometimes|string',
        ]);

        $experience->update($validated);

        return response()->json($experience);
    }

    public function destroy(Experience $experience)
    {
        $experience->delete();

        return response()->json(['message' => 'Experience deleted']);
    }
}
