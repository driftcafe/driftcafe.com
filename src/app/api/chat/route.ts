import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { SYSTEM_PROMPT } from '@/lib/ai-context';

export async function POST(request: NextRequest) {
    try {
        const { message, history = [] } = await request.json();

        if (!message || typeof message !== 'string') {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        if (!process.env.GEMINI_API_KEY) {
            console.error('❌ GEMINI_API_KEY is not configured');
            return NextResponse.json(
                { error: 'API key not configured. Please add GEMINI_API_KEY to .env.local' },
                { status: 500 }
            );
        }

        console.log('✅ API key found, initializing Gemini...');

        // Initialize with the correct SDK
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

        // Build the full conversation with system prompt
        const fullConversation =
            `${SYSTEM_PROMPT}\n\nConversation history:\n` +
            history.map((msg: { role: string; content: string }) =>
                `${msg.role}: ${msg.content}`
            ).join('\n') +
            `\n\nUser: ${message}\n\nAssistant:`;

        console.log('✅ Sending request to Gemini...');

        // Make the request
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: fullConversation,
        });

        const responseText = response.text || "I'm sorry, I couldn't generate a response.";

        console.log('✅ Response generated successfully');

        return NextResponse.json({ response: responseText });
    } catch (error) {
        console.error('❌ Chat API error:', error);

        if (error instanceof Error) {
            console.error('Error message:', error.message);
        }

        return NextResponse.json(
            { error: 'Failed to process your message. Check server logs for details.' },
            { status: 500 }
        );
    }
}
