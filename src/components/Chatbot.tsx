'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './Chatbot.module.css';

const BOT_AVATAR = '🌸';

interface FAQItem {
  keywords: string[];
  answer: string;
}

interface Message {
  id: number;
  sender: 'bot' | 'user';
  text: string;
  time: Date;
}

const FAQ: FAQItem[] = [
  {
    keywords: ['price', 'cost', 'how much', 'pricing'],
    answer: "Our hijabs range from **PKR 600–800**. The Soft Modal Cotton is PKR 600, Luxury Silk Chiffon is PKR 790, and Premium Cotton Jersey is PKR 800. All orders above PKR 2,000 get free shipping! 🌸",
  },
  {
    keywords: ['material', 'fabric', 'made of', 'silk', 'jersey', 'modal', 'cotton'],
    answer: "We offer three premium fabrics:\n• **Luxury Silk Chiffon** – ultra-lightweight & breathable\n• **Premium Cotton Jersey** – stretchy & comfortable for everyday wear\n• **Soft Modal Cotton** – silky-soft with beautiful drape\nAll are skin-friendly & carefully sourced! ✨",
  },
  {
    keywords: ['size', 'dimension', 'length', 'width', 'fit'],
    answer: "Our hijabs come in a standard generous size of **175cm × 70cm**, perfect for a variety of wrapping styles. One size fits all — with enough fabric for full coverage and elegant layering! 📐",
  },
  {
    keywords: ['color', 'colour', 'shade', 'available'],
    answer: "Each style is available in a curated collection of **10+ colors** including blush rose, ivory cream, sand beige, dusty mauve, sage green, and midnight blue. Visit our Collections page to see all shades! 🎨",
  },
  {
    keywords: ['ship', 'delivery', 'shipping', 'arrive', 'how long'],
    answer: "We offer:\n• **Standard Shipping** – 5–7 business days (Free over PKR 2,000)\n• **Express Shipping** – 2–3 business days (PKR 500)\n• **International** – 10–14 business days\nYour order is carefully packaged in our signature Haya&Co gift box! 📦",
  },
  {
    keywords: ['return', 'refund', 'exchange', 'policy'],
    answer: "We have a hassle-free **30-day return policy**. Items must be unworn and in original packaging. Exchanges are free! Simply contact us at thehayaandco@gmail.com and we'll take care of you. 💛",
  },
  {
    keywords: ['care', 'wash', 'clean', 'laundry'],
    answer: "To keep your hijab beautiful:\n• **Silk Chiffon** – Hand wash cold or dry clean\n• **Jersey & Modal** – Machine wash cold, gentle cycle\n• Air dry flat, avoid tumble drying\n• Iron on low heat with a pressing cloth\nProper care ensures your hijab lasts for years! 🌿",
  },
  {
    keywords: ['style', 'wrap', 'wear', 'how to'],
    answer: "We have a Style Guide section on our website with video tutorials for 8 different wrapping styles — from the classic drape to the turban look. Perfect for beginners and experts alike! 🎀",
  },
  {
    keywords: ['contact', 'email', 'phone', 'support', 'help'],
    answer: "You can reach us at:\n📧 **thehayaandco@gmail.com**\n📸 **@thehaya&Co** on Instagram\n🕐 We reply within 24 hours, Mon–Sat\n\nWe love hearing from our Haya&Co family! 💌",
  },
  {
    keywords: ['gift', 'present', 'gift wrap', 'gifting'],
    answer: "Yes! Every Haya&Co order comes in a beautiful signature gift box — perfect as a gift. We also offer a **personalized gift card** option at checkout. Add a heartfelt note and we'll include it! 🎁",
  },
  {
    keywords: ['hello', 'hi', 'hey', 'salam', 'assalam'],
    answer: "As-salamu alaykum! 🌸 Welcome to **Haya&Co**. I'm here to help you find your perfect hijab. You can ask me about our fabrics, sizing, pricing, shipping, or care tips!",
  },
  {
    keywords: ['thank', 'thanks', 'shukran', 'jazak'],
    answer: "You're so welcome! 💛 It's our pleasure to help. If you have any more questions, don't hesitate to ask. Happy shopping with Haya&Co! 🌸",
  },
];

const QUICK_REPLIES: string[] = [
  "What fabrics do you offer?",
  "What are your prices?",
  "How long does shipping take?",
  "What's your return policy?",
];

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const faq of FAQ) {
    if (faq.keywords.some((kw) => lower.includes(kw))) {
      return faq.answer;
    }
  }
  return "Thank you for your question! 🌸 For detailed help, please reach out to us at **thehayaandco@gmail.com** or DM us on Instagram **@thehaya&Co**. Our team responds within 24 hours!";
}

function formatMessage(text: string): string {
  // Bold
  let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Newlines to <br>
  formatted = formatted.replace(/\n/g, '<br/>');
  return formatted;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'bot',
      text: "As-salamu alaykum! 🌸 Welcome to **Haya&Co**. I'm your personal style assistant. Ask me anything about our hijabs — fabrics, sizing, shipping, or styling tips!",
      time: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open, messages]);

  const sendMessage = (text?: string) => {
    const userText = text || input.trim();
    if (!userText) return;
    setInput('');

    const userMsg: Message = { id: Date.now(), sender: 'user', text: userText, time: new Date() };
    setMessages((prev) => [...prev, userMsg]);

    setIsTyping(true);
    setTimeout(() => {
      const botReply = getBotResponse(userText);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'bot', text: botReply, time: new Date() },
      ]);
      setIsTyping(false);
    }, 900 + Math.random() * 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        className={`${styles.floatBtn} ${open ? styles.floatBtnOpen : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle Chatbot"
        id="chatbot-toggle"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
        {hasUnread && !open && <span className={styles.unreadDot} />}
      </button>

      {/* Chat Window */}
      <div className={`${styles.chatWindow} ${open ? styles.chatWindowOpen : ''}`} role="dialog" aria-label="Haya&Co Chat Assistant">
        {/* Header */}
        <div className={styles.chatHeader}>
          <div className={styles.chatHeaderLeft}>
            <div className={styles.avatarWrap}>
              <span className={styles.avatarEmoji}>{BOT_AVATAR}</span>
              <span className={styles.onlineDot} />
            </div>
            <div>
              <p className={styles.botName}>Haya&Co Assistant</p>
              <p className={styles.botStatus}>Online — Here to help</p>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Close chat">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className={styles.messagesArea}>
          {messages.map((msg) => (
            <div key={msg.id} className={`${styles.messageRow} ${msg.sender === 'user' ? styles.userRow : styles.botRow}`}>
              {msg.sender === 'bot' && (
                <div className={styles.botAvatarSmall}>{BOT_AVATAR}</div>
              )}
              <div className={styles.messageBubbleWrap}>
                <div
                  className={`${styles.bubble} ${msg.sender === 'user' ? styles.userBubble : styles.botBubble}`}
                  dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                />
                <span className={styles.timeStamp}>{formatTime(msg.time)}</span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className={`${styles.messageRow} ${styles.botRow}`}>
              <div className={styles.botAvatarSmall}>{BOT_AVATAR}</div>
              <div className={styles.typingIndicator}>
                <span /><span /><span />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        <div className={styles.quickReplies}>
          {QUICK_REPLIES.map((qr) => (
            <button key={qr} className={styles.quickReplyBtn} onClick={() => sendMessage(qr)}>
              {qr}
            </button>
          ))}
        </div>

        {/* Input Area */}
        <div className={styles.inputArea}>
          <input
            ref={inputRef}
            type="text"
            className={styles.chatInput}
            placeholder="Ask me anything…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            id="chatbot-input"
            aria-label="Chat message input"
          />
          <button
            className={styles.sendBtn}
            onClick={() => sendMessage()}
            disabled={!input.trim()}
            aria-label="Send message"
            id="chatbot-send"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
