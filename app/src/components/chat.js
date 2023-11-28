// Chat.js
import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Container } from '@mui/material';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    setMessages([...messages, { text: inputMessage, sender: 'user' }]);
    setInputMessage('');

    // Add logic here to handle the response from the chat partner
    setTimeout(() => {
      let botResponse;

    // Example: If the user asks about the weather
    if (inputMessage.toLowerCase().includes('weather')) {
      botResponse = { text: 'The weather is great today!', sender: 'bot' };
    } else if (inputMessage.toLowerCase().includes('morning')) {
      // Default response for other queries
      botResponse = { text: 'Good morning. How can i help you?', sender: 'bot' };
    }
    else {
      // Default response for other queries
      botResponse = { text: 'I am a simple bot. Ask me about the weather!', sender: 'bot' };
    }
    setMessages(prevMessages => [...prevMessages, botResponse]);
  }, 1000);

  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Chat Interface
        </Typography>
        <div style={{ height: '300px', overflowY: 'auto', marginBottom: '10px' }}>
          {messages.map((message, index) => (
            <div key={index} style={{ textAlign: message.sender === 'user' ? 'right' : 'left' }}>
              <Typography variant="body1" style={{ display: 'inline-block', padding: '5px', borderRadius: '5px', backgroundColor: message.sender === 'user' ? '#e0e0e0' : '#2196f3', color: message.sender === 'user' ? '#000' : '#fff' }}>
                {message.text}
              </Typography>
            </div>
          ))}
        </div>
        <TextField
          label="Type a message"
          fullWidth
          variant="outlined"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          style={{ marginBottom: '10px' }}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </Paper>
    </Container>
  );
};

export default Chat;
