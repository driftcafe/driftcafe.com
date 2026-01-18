import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
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

        if (!process.env.OPENAI_API_KEY) {
            console.error('❌ OPENAI_API_KEY is not configured');
            return NextResponse.json(
                { error: 'API key not configured. Please add OPENAI_API_KEY to environment variables' },
                { status: 500 }
            );
        }

        console.log('✅ API key found, initializing OpenAI...');

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        // Build messages array with system prompt
        const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...history.map((msg: { role: string; content: string }) => ({
                role: msg.role as 'user' | 'assistant',
                content: msg.content,
            })),
            { role: 'user', content: message },
        ];

        console.log('✅ Sending request to OpenAI...');

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: messages,
            temperature: 0.7,
            max_tokens: 500,
        });

        const responseText = completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

        console.log('✅ Response generated successfully');

        return NextResponse.json({ response: responseText });
    } catch (error) {
        console.error('❌ Chat API error:', error);

        if (error instanceof Error) {
            console.error('Error message:', error.message);
            console.error('Error name:', error.name);
        }

        return NextResponse.json(
            { error: 'Sorry, I\'m having trouble responding right now. Please try again.' },
            { status: 500 }
        );
    }
}
