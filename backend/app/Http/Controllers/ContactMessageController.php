<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactMessageController extends Controller
{
    public function index()
    {
        return response()->json(ContactMessage::latest()->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'message' => 'required|string|min:10',
        ]);

        $message = ContactMessage::create($validated);

        try {
            Mail::raw(
                "Name: {$validated['name']}\nEmail: {$validated['email']}\n\nMessage:\n{$validated['message']}",
                function ($mail) use ($validated) {
                    $mail->to(config('mail.from.address'))
                        ->subject('New contact message from portfolio website');
                    $mail->replyTo($validated['email'], $validated['name']);
                }
            );
        } catch (\Throwable $exception) {
            return response()->json([
                'message' => $message,
                'mail_error' => 'Email delivery is not configured correctly. Please set a valid SMTP app password.',
            ], 201);
        }

        return response()->json($message, 201);
    }
}
