import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { SYSTEM_PROMPT } from '@/lib/ai-context';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
    try {
        const { message, history = [] } = await request.json();

        if (!message || typeof message !== 'string') {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        // Build conversation history for context
        const messages = [
            { role: 'system' as const, content: SYSTEM_PROMPT },
            ...history.map((msg: { role: string; content: string }) => ({
                role: msg.role as 'user' | 'assistant',
                content: msg.content,
            })),
            { role: 'user' as const, content: message },
        ];

        // Call OpenAI API
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini', // Cost-effective model
            messages,
            temperature: 0.7,
            max_tokens: 500, // Keep responses concise
        });

        const response = completion.choices[0]?.message?.content ||
            "I'm sorry, I couldn't generate a response. Please try again.";

        return NextResponse.json({ response });
    } catch (error) {
        console.error('Chat API error:', error);

        // Handle specific OpenAI errors
        if (error instanceof OpenAI.APIError) {
            if (error.status === 401) {
                return NextResponse.json(
                    { error: 'API key configuration error' },
                    { status: 500 }
                );
            }
        }

        return NextResponse.json(
            { error: 'Failed to process your message. Please try again.' },
            { status: 500 }
        );
    }
}
