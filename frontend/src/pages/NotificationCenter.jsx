import React, { useState } from "react";
import NotificationNav from "../components/NotificationNav/NotificationNav";
import "../pageStyles/Notification.css";

const NotificationCenter = ({ fcmToken }) => {
    // Стейт для збереження статусу дозволу на сповіщення
    const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);

    // Функція для запиту дозволу на сповіщення
    const requestNotificationPermission = () => {
        // Перевіряємо чи підтримує браузер сповіщення
        if ("Notification" in window) {
            // Якщо дозвіл вже наданий
            if (Notification.permission === "granted") {
                alert("Уже є дозвіл на сповіщення!");
                setIsNotificationEnabled(true);
            } else {
                // Якщо дозвіл ще не наданий
                Notification.requestPermission().then((permission) => {
                    if (permission === "granted") {
                        alert("Дозвіл на сповіщення надано!");
                        setIsNotificationEnabled(true);
                    } else {
                        alert("Дозвіл на сповіщення відхилено!");
                        setIsNotificationEnabled(false);
                    }
                });
            }
        } else {
            alert("Ваш браузер не підтримує сповіщення.");
            setIsNotificationEnabled(false);
        }
    };

    const handleToggleChange = (event) => {
        if (event.target.checked) {
            requestNotificationPermission();
        } else {
            setIsNotificationEnabled(false);
            alert("Сповіщення вимкнено.");
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(fcmToken).then(
            () => alert("FCM Token copied to clipboard!"),
            (err) => alert("Failed to copy FCM Token.")
        );
    };
    return (
        <section className="notification-center-page">
            <div className="notification_container">
                <NotificationNav />
                <div className="notification_toggle">
                    <div className="toggle_container">
                        <p>Увімкнути повідомлення</p>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={isNotificationEnabled}
                                onChange={handleToggleChange}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <p className="fcm" onClick={copyToClipboard} title="Click to copy">
                        FCM Token: {fcmToken}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NotificationCenter;