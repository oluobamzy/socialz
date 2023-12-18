import "./chat.css";
import Nav from "./Nav";
import { useState } from "react";
const Chat = () => {
  const [topics, setTopics] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  const getTopics = async () => {
    setTopics([...topics, userMessage]);
    setUserMessage("");
  };
  const getMessages = async () => {
    getTopics();
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages: "Hello, how are you?"

      })
    };
    try {
      const response = await fetch(`http://localhost:8000/completions`, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
    
  };
  return (
    <div className="main">
      <Nav className="nav-chat" />
      <div className="chat-case">
        <div className="sidebar">
          <h3>Topics</h3>
          <ul>{topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}</ul>
          <p>@oluobamzy2023</p>
        </div>
        <div className="chat-container">
          <h1>My Assistant</h1>
          <div className="sender-container">
            <input type="text"
              placeholder="What can I do for you today?"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)} />
            <button onClick={getMessages}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z" /></svg></button>

          </div>
          <div className="message-container">
            <div className="message">
              {/* <div className="sender">User</div>
          <div className="text">Hello, how are you?</div> */}
            </div>
          </div>

        </div>
      </div>

    </div>


  );
};
export default Chat;