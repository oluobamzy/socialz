import "./chat.css";
const Chat = () => {
  const getMessages = async () => {
    const options = {
      method : 'POST',
      headers : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages : "Hello, how are you?"
  
      })
    }
    try {
      const response =  await fetch(`http://localhost:8000/completions`, options)
        const data = await response.json();
        console.log(data);
    }catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="chat-container">
      <h1>Chat</h1>
      <div className="sender-container">
        <input type="text" placeholder="Enter your message" />
        <button onClick={getMessages}>Send</button>
      </div>
      <div className="message-container">
        <div className="message">
          <div className="sender">User</div>
          <div className="text">Hello, how are you?</div>
        </div>
      </div>

    </div>


  );
};
export default Chat;