"use client"; // This tells Next.js this is a client component

import { useEffect } from 'react';
import { createChat } from '@n8n/chat';
import '@n8n/chat/style.css';

export default function N8nChat() {
    useEffect(() => {
        createChat({
            webhookUrl: 'https://n8n.kreonex.com/webhook/a2b46661-1016-4843-b96a-4becba10414b/chat',
            mode: 'window',
            chatInputKey: 'chatInput',
            title: 'Kreonex Assistant',
            initialMessages: ["Hey! 👋 I'm the Kreonex AI. How can I help you today?"],
        });
    }, []);

    return null; // This component doesn't need to render HTML, it just runs the script
}