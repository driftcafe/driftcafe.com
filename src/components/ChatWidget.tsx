'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const SUGGESTED_QUESTIONS = [
    "What's Josh's experience with AI/ML?",
    "Tell me about Josh's design process",
    "What projects has Josh worked on?",
    "What technologies does Josh use?",
    "What's Josh looking for in his next role?",
];

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const handleToggleChat = () => {
            setIsOpen(true);
        };
        window.addEventListener('toggleChat', handleToggleChat);
        return () => window.removeEventListener('toggleChat', handleToggleChat);
    }, []);

    const sendMessage = async (messageText: string) => {
        if (!messageText.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', content: messageText };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: messageText,
                    history: messages.slice(-4), // Last 4 messages for context
                }),
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            const assistantMessage: Message = {
                role: 'assistant',
                content: data.response,
            };
            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
            console.error('Chat error:', error);
            const errorMessage: Message = {
                role: 'assistant',
                content: "Sorry, I'm having trouble responding right now. Please try again.",
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSuggestedQuestion = (question: string) => {
        sendMessage(question);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(input);
    };

    // Simple markdown formatting for chat messages
    const formatMessage = (content: string) => {
        // Helper to convert **bold** to <strong>
        const convertBold = (text: string) => text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Convert * bullet points to HTML list items
        const lines = content.split('\n');
        let formatted = '';
        let inList = false;

        lines.forEach((line) => {
            const trimmed = line.trim();
            if (trimmed.startsWith('*') && !trimmed.startsWith('**')) {
                if (!inList) {
                    formatted += '<ul style="margin: 0; padding-left: 20px;">';
                    inList = true;
                }
                const itemText = trimmed.substring(1).trim();
                formatted += `<li>${convertBold(itemText)}</li>`;
            } else {
                if (inList) {
                    formatted += '</ul>';
                    inList = false;
                }
                if (trimmed) {
                    formatted += `<p style="margin: 0 0 8px 0;">${convertBold(trimmed)}</p>`;
                }
            }
        });

        if (inList) {
            formatted += '</ul>';
        }

        return formatted;
    };

    return (
        <>
            {/* Chat Button - Hidden since we have nav link */}
            {/* Uncomment if you want both nav link AND floating button
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    color: 'white',
                    zIndex: 1000,
                    transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                aria-label="Open chat"
            >
                {isOpen ? '✕' : '💬'}
            </button>
            */}

            {/* Chat Window */}
            {isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: '80px',
                        right: '16px',
                        left: '16px',
                        width: 'auto',
                        maxWidth: '400px',
                        marginLeft: 'auto',
                        height: 'calc(100vh - 100px)',
                        maxHeight: '600px',
                        background: '#F2F2EB',
                        borderRadius: '16px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                        display: 'flex',
                        flexDirection: 'column',
                        zIndex: 999,
                        overflow: 'hidden',
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            padding: '8px',
                            background: '#1A1A1A',
                            color: 'white',
                            position: 'relative',
                            paddingTop: '40px',
                            paddingBottom: '16px',
                        }}
                    >
                        {/* Top left: Start Over button */}
                        {messages.length > 0 && (
                            <button
                                onClick={() => setMessages([])}
                                style={{
                                    position: 'absolute',
                                    top: '8px',
                                    left: '8px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '0 16px',
                                    height: '26px',
                                    color: 'white',
                                    cursor: 'pointer',
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    whiteSpace: 'nowrap',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')
                                }
                            >
                                Start Over
                            </button>
                        )}

                        {/* Top right: Close button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: 'absolute',
                                top: '8px',
                                right: '8px',
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '0',
                                width: '26px',
                                height: '26px',
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '16px',
                                fontWeight: 400,
                                lineHeight: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')
                            }
                            aria-label="Close chat"
                        >
                            ✕
                        </button>

                        {/* Center: Title and subtitle */}
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 500, marginBottom: '4px' }}>
                                Ask AI About Me
                            </h3>
                            <p style={{ margin: 0, fontSize: '12px', opacity: 0.7 }}>
                                Questions about my work & experience
                            </p>
                        </div>
                    </div>

                    {/* Messages */}
                    <div
                        style={{
                            flex: 1,
                            overflowY: 'auto',
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                        }}
                    >
                        {messages.length === 0 && (
                            <div style={{ textAlign: 'center', color: '#666' }}>
                                <p style={{ marginBottom: '16px' }}>
                                    Hi! Ask me anything about Josh's professional background.
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {SUGGESTED_QUESTIONS.map((question, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSuggestedQuestion(question)}
                                            style={{
                                                padding: '12px',
                                                background: '#EAEAE4',
                                                border: '1px solid #DADAD4',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                fontSize: '14px',
                                                textAlign: 'left',
                                                transition: 'background 0.2s',
                                                color: '#333',
                                                textDecoration: 'none',
                                                WebkitTapHighlightColor: 'transparent',
                                            }}
                                            onMouseEnter={(e) =>
                                                (e.currentTarget.style.background = '#DADAD4')
                                            }
                                            onMouseLeave={(e) =>
                                                (e.currentTarget.style.background = '#EAEAE4')
                                            }
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {messages.map((message, index) => (
                            <div
                                key={index}
                                style={{
                                    alignSelf: message.role === 'user' ? 'flex-end' : 'flex-start',
                                    maxWidth: '80%',
                                }}
                            >
                                <div
                                    style={{
                                        padding: '12px 16px',
                                        borderRadius: '12px',
                                        background:
                                            message.role === 'user'
                                                ? '#1A1A1A'
                                                : '#EAEAE4',
                                        color: message.role === 'user' ? 'white' : '#333',
                                        fontSize: '14px',
                                        lineHeight: '1.5',
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: message.role === 'assistant'
                                            ? formatMessage(message.content)
                                            : message.content
                                    }}
                                />
                            </div>
                        ))}

                        {isLoading && (
                            <div style={{ alignSelf: 'flex-start', maxWidth: '80%' }}>
                                <div
                                    style={{
                                        padding: '12px 16px',
                                        borderRadius: '12px',
                                        background: '#EAEAE4',
                                        color: '#666',
                                        fontSize: '14px',
                                    }}
                                >
                                    Thinking...
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            padding: '16px',
                            borderTop: '1px solid #e0e0e0',
                            display: 'flex',
                            gap: '8px',
                        }}
                    >
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask a question..."
                            disabled={isLoading}
                            style={{
                                flex: 1,
                                padding: '12px',
                                border: '1px solid #DADAD4',
                                borderRadius: '8px',
                                fontSize: '16px',
                                outline: 'none',
                            }}
                        />
                        <button
                            type="submit"
                            disabled={!input.trim() || isLoading}
                            style={{
                                padding: '12px 20px',
                                background: input.trim() && !isLoading ? '#1A1A1A' : '#ccc',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: input.trim() && !isLoading ? 'pointer' : 'not-allowed',
                                fontSize: '14px',
                                fontWeight: 600,
                            }}
                        >
                            Send
                        </button>
                    </form>
                </div >
            )
            }
        </>
    );
}
