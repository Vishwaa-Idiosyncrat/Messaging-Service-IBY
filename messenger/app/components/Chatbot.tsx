import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';  // Ensure you have the correct styling

// Define the message type
interface Message {
  text: string;
  type: 'user' | 'ai'; // Types can be 'user' or 'ai'
}

const Chatbot = () => {
  // Use the defined type for the messages state
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (input.trim() === '') return;

    setMessages([...messages, { text: input, type: 'user' }]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post('/api/ai-chat', { message: input });
      setMessages([...messages, { text: input, type: 'user' }, { text: response.data.response, type: 'ai' }]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chatbot-message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="chatbot-message ai">Typing...</div>}
      </div>
      <form onSubmit={handleSubmit} className="chatbot-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="chatbot-input"
        />
        <button type="submit" className="chatbot-submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
