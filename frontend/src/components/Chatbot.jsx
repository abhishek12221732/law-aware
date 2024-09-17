// src/Chatbot.js
import React, { useState, useEffect, useRef } from 'react';

const API_KEY = "AIzaSyD9DZ7tPhOb9OjcAKArJqHzgvlOom7OFX0";
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatboxRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    chatboxRef.current?.scrollTo(0, chatboxRef.current.scrollHeight);
  }, [messages]);

  const handleChat = async () => {
    if (!userMessage.trim()) return;

    // Add user's message to chat
    setMessages([...messages, { text: userMessage, type: 'outgoing' }]);
    setUserMessage('');
    
    // Adjust textarea height
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

    // Add typing effect
    setMessages([...messages, { text: userMessage, type: 'outgoing' }, { text: 'Typing...', type: 'incoming', typing: true }]);

    // Simulate typing effect and fetch response
    setIsTyping(true);
    setTimeout(async () => {
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: userMessage }] }],
          }),
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error.message);

        // Simulate typing effect for the response
        const responseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1');
        const responseChars = responseText.split('');
        let index = 0;

        const typingInterval = setInterval(() => {
          setMessages(prevMessages => {
            const newMessages = prevMessages.map(msg =>
              msg.typing ? { ...msg, text: responseText.slice(0, index + 1) } : msg
            );
            return newMessages;
          });

          index++;
          if (index >= responseChars.length) {
            clearInterval(typingInterval);
            setIsTyping(false);
          }
        }, 50); // Adjust typing speed here
      } catch (error) {
        // Handle error
        setMessages(prevMessages => prevMessages.map(msg =>
          msg.typing ? { ...msg, text: error.message, typing: false, error: true } : msg
        ));
        setIsTyping(false);
      }
    }, 1000); // Simulate typing delay (1 second)
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleChat();
    }
  };

  return (
    <div className="relative">
      <button
  className="fixed bottom-4 right-4 p-4 bg-blue-500 text-white rounded-full shadow-lg focus:outline-none z-10"
  style={{ width: '64px', height: '64px', borderRadius: '50%' }}
  onClick={() => document.querySelector('.chatbot').classList.toggle('hidden')}
>
  <span className="material-symbols-rounded">mode_comment</span>
</button>


      <div className="chatbot hidden fixed bottom-4 right-20 w-full max-w-sm bg-white border border-gray-300 shadow-lg rounded-lg z-10">
        <header className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Chatbot</h2>
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={() => document.querySelector('.chatbot').classList.add('hidden')}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </header>
        <ul ref={chatboxRef} className="chatbox p-4 space-y-4 max-h-60 overflow-y-auto">
          {messages.map((msg, index) => (
            <li
              key={index}
              className={`chat ${msg.type === 'outgoing' ? 'text-right' : 'text-left'} p-2 rounded-lg ${
                msg.error ? 'bg-red-100 text-red-600' : 'bg-gray-100'
              }`}
            >
              {msg.type === 'incoming' && !msg.typing && (
                <span className="material-symbols-outlined inline-block mr-2">smart_toy</span>
              )}
              <p>{msg.text}</p>
            </li>
          ))}
        </ul>
        <div className="chat-input p-4 border-t border-gray-200 flex items-center">
          <textarea
            ref={textareaRef}
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter a message..."
            rows="1"
            className="flex-1 border border-gray-300 p-2 rounded-lg resize-none"
          />
          <button
            className="ml-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
            onClick={handleChat}
          >
            <span className="material-symbols-rounded">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
