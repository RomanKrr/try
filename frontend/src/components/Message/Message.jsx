import React from 'react';
import { RxCross2 } from "react-icons/rx";
import '../Message/Message.css';

const Message = ({ subject, text, date }) => {
    return (
        <div className='message'>
            <div className="message_container">
                <p className="subjectName">{subject}</p>
                <h3 className="message_text">{text}</h3>
                <RxCross2 className='cross' />
                <p className="date">{date}</p>
            </div>
        </div>
    );
};

export default Message;
