import React,{useState} from 'react'
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen(props) {
    const [input, setInput] = useState("");
    //console.log(window.location.pathname);
    const [messages, setMessages] = useState([
        {
        name: 'sanjay',
        image: "https://sanjay000.000webhostapp.com/sanjayyadavpic.jpg",
        message: 'Whats up'
        },
        {
        name: 'sanjay kumar',
        image: "https://sanjay000.000webhostapp.com/sanjayyadavpic.jpg",
        message: 'Whats up yadav'
        },
        {
            message: 'Whats up yadav ji'
        }
    ])

    const handleSend = e => {
        e.preventDefault()
        setMessages([...messages, { message: input }]);
        setInput("");
    };
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You Match with {window.location.pathname} on 10/10/2020</p>
            {messages.map((message) => (
                message.name ? (
                <div className="chatScreen__message">
                    <Avatar
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image} />
                    <p className="chatScreen__text">{message.message}</p>
                    </div>)
                    : (
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser">{message.message}</p>
                        </div>
                        )
            ))}
            <form className="chatScreen__input">
                    <input value={input} onChange={e=>setInput(e.target.value)} className="chatScreen__inputField" type="text" placeholder="Type Your Message Here" />
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">Send</button>
            </form>
        </div>
    )
}

export default ChatScreen
