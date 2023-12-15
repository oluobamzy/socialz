import "./chat.css";
import Nav from "./Nav";
const Chat = () => {
  const getMessages = async () => {
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
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main">
      <Nav className="nav-chat" />
      <div className="chat-case">
        <div className="sidebar">
             <h3>Topics</h3>
             <ul></ul>
             <p>@oluobamzy2023</p>
        </div>
        <div className="chat-container">
          <h1>My Assistant</h1>
          <div className="sender-container">
            <input type="text" placeholder="What can i do for you today?" />
            <button onClick={getMessages}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg></button>
            
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