import React from 'react'
import './Chat.css'
import { Link } from 'react-router-dom';
import Avatar from "@material-ui/core/Avatar";
function Chat({name, message,timestamp,profilePic}) {
    return (
        <Link to={`/chat/${name}`}>
        <div className="chat">
            <Avatar className="chat__image" alt={name} src={profilePic} />
            <div className="chat__details">
                <h3>{name}</h3>
                <p>{message}</p>
            </div>
            <p className="chat__timestamp">{timestamp}</p>
        </div>
        </Link>
    )
}

export default Chat
