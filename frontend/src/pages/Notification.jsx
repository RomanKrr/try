import React, { useEffect, useState } from 'react';
import NotificationNav from '../components/NotificationNav/NotificationNav';
import Message from '../components/Message/Message';
import "../pageStyles/Notification.css";

const Notification = () => {
    const [messages, setMessages] = useState(() => {
        try {
            const savedMessages = localStorage.getItem('newMessage');
            return savedMessages ? JSON.parse(savedMessages) : [];
        } catch (error) {
            console.error("Помилка читання з localStorage:", error);
            return [];
        }
    });

    useEffect(() => {
        const broadcastChannel = new BroadcastChannel('notification_channel');

        broadcastChannel.onmessage = (event) => {
            const { title, body, date } = event.data;

            // Додамо нове повідомлення до стану
            setMessages((prevMessages) => {
                const updatedMessages = [
                    ...prevMessages,
                    { 
                        id: Date.now(), 
                        subject: title, 
                        text: body, 
                        date: new Date(date).toLocaleDateString('uk-UA') 
                    }
                ];

                // Гарантоване збереження оновленого масиву
                localStorage.setItem("newMessage", JSON.stringify(updatedMessages));
                return updatedMessages;
            });
        };

        return () => {
            broadcastChannel.close();
        };
    }, []);

    const handleClearMessages = () => {
        setMessages([]);
        localStorage.removeItem("newMessage");
    };

    return (
        <section className='notification-page'>
            <NotificationNav />
            <p className='delete_all' onClick={handleClearMessages}>Видалити всі</p>
            <div className="messages_container">
                {messages.length === 0 ? (
                    <p className='some_text'>Немає повідомлень</p>
                ) : (
                    messages.map((message) => (
                        <Message
                            key={message.id}
                            subject={message.subject}
                            text={message.text}
                            date={message.date}
                        />
                    ))
                )}
            </div>
        </section>
    );
};

export default Notification;
