import { track } from '@vercel/analytics';

// Analytics event types
export type ChatEvent =
    | 'chat_opened'
    | 'chat_closed'
    | 'conversation_started'
    | 'question_asked'
    | 'suggested_question_clicked'
    | 'chat_error';

// Track chat events
export const trackChatEvent = (
    event: ChatEvent,
    properties?: Record<string, string | number | boolean>
) => {
    try {
        track(event, properties);
    } catch (error) {
        // Silently fail - don't break the app if analytics fails
        console.error('Analytics tracking error:', error);
    }
};

// Helper to truncate question text for privacy
export const truncateQuestion = (question: string, maxLength: number = 100): string => {
    if (question.length <= maxLength) return question;
    return question.substring(0, maxLength) + '...';
};

// Track question asked
export const trackQuestionAsked = (
    question: string,
    isSuggested: boolean,
    conversationLength: number
) => {
    trackChatEvent('question_asked', {
        question_type: isSuggested ? 'suggested' : 'custom',
        question_preview: truncateQuestion(question),
        conversation_length: conversationLength,
    });
};

// Track suggested question clicked
export const trackSuggestedQuestion = (questionIndex: number, question: string) => {
    trackChatEvent('suggested_question_clicked', {
        question_index: questionIndex,
        question_preview: truncateQuestion(question),
    });
};

// Track chat opened/closed
export const trackChatToggle = (isOpen: boolean) => {
    trackChatEvent(isOpen ? 'chat_opened' : 'chat_closed');
};

// Track conversation started
export const trackConversationStart = () => {
    trackChatEvent('conversation_started');
};

// Track errors
export const trackChatError = (errorType: string) => {
    trackChatEvent('chat_error', {
        error_type: errorType,
    });
};
