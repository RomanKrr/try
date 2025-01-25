import React from 'react';

const Portfolio = ({ fcmToken }) => {
  // Функція для запиту дозволу на сповіщення
  const requestNotificationPermission = () => {
    // Перевіряємо чи підтримує браузер сповіщення
    if ('Notification' in window) {
      // Якщо дозвіл вже наданий
      if (Notification.permission === 'granted') {
        alert('Уже є дозвіл на сповіщення!');
      } else {
        // Якщо дозвіл ще не наданий
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            alert('Дозвіл на сповіщення надано!');
          } else {
            alert('Дозвіл на сповіщення відхилено!');
          }
        });
      }
    } else {
      alert('Ваш браузер не підтримує сповіщення.');
    }
  };

  return (
    <div>
      <h1>Portfolio Page</h1>
      <p>FCM Token: {fcmToken}</p>

      {/* Кнопка для запиту дозволу на сповіщення */}
      <button onClick={requestNotificationPermission}>Запросити дозвіл на сповіщення</button>
      
    </div>
  );
};

export default Portfolio;
