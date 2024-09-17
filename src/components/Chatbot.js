import React, { useEffect, useRef } from 'react';

const Chatbot = () => {
  const chatboxRef = useRef(null);
  const chatInputRef = useRef(null);
  const sendChatBtnRef = useRef(null);
  const chatbotTogglerRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const chatbotToggler = chatbotTogglerRef.current;
    const closeBtn = closeBtnRef.current;
    const chatbox = chatboxRef.current;
    const chatInput = chatInputRef.current;
    const sendChatBtn = sendChatBtnRef.current;

    let userMessage = null;
    const inputInitHeight = chatInput.scrollHeight;
    const API_KEY = "AIzaSyD9DZ7tPhOb9OjcAKArJqHzgvlOom7OFX0";
    const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

    const createChatLi = (message, className) => {
      const chatLi = document.createElement("li");
      chatLi.classList.add("chat", className);
      let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
      chatLi.innerHTML = chatContent;
      chatLi.querySelector("p").textContent = message;
      return chatLi;
    };

    const generateResponse = async (chatElement) => {
      const messageElement = chatElement.querySelector("p");
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            role: "user",
            parts: [{ text: userMessage }],
          }],
        }),
      };

      try {
        const response = await fetch(API_URL, requestOptions);
        const data = await response.json();
        if (!response.ok) throw new Error(data.error.message);
        messageElement.textContent = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1');
      } catch (error) {
        messageElement.classList.add("error");
        messageElement.textContent = error.message;
      } finally {
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }
    };

    const handleChat = () => {
      userMessage = chatInput.value.trim();
      if (!userMessage) return;

      chatInput.value = "";
      chatInput.style.height = `${inputInitHeight}px`;

      chatbox.appendChild(createChatLi(userMessage, "outgoing"));
      chatbox.scrollTo(0, chatbox.scrollHeight);

      setTimeout(() => {
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
      }, 600);
    };

    chatInput.addEventListener("input", () => {
      chatInput.style.height = `${inputInitHeight}px`;
      chatInput.style.height = `${chatInput.scrollHeight}px`;
    });

    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleChat();
      }
    });

    sendChatBtn.addEventListener("click", handleChat);
    closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
    chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

    return () => {
      chatInput.removeEventListener("input", null);
      chatInput.removeEventListener("keydown", null);
      sendChatBtn.removeEventListener("click", null);
      closeBtn.removeEventListener("click", null);
      chatbotToggler.removeEventListener("click", null);
    };
  }, []);

  return (
    <div>
      <button className="chatbot-toggler" ref={chatbotTogglerRef}>
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="chatbot">
        <header>
          <h2>Chatbot</h2>
          <span className="close-btn material-symbols-outlined" ref={closeBtnRef}>close</span>
        </header>
        <ul className="chatbox" ref={chatboxRef}>
          <li className="chat incoming">
            <span className="material-symbols-outlined">smart_toy</span>
            <p>Hi there <br />How can I help you today?</p>
          </li>
        </ul>
        <div className="chat-input">
          <textarea placeholder="Enter a message..." spellCheck="false" ref={chatInputRef} required></textarea>
          <span id="send-btn" className="material-symbols-rounded" ref={sendChatBtnRef}>send</span>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
