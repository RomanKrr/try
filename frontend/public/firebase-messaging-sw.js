importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');


const firebaseConfig = {
  apiKey: "AIzaSyCS2-OTLjhtGzF6QPz2aTCUsb61ASFEvrc",
  authDomain: "push-notification-a9e02.firebaseapp.com",
  projectId: "push-notification-a9e02",
  storageBucket: "push-notification-a9e02.firebasestorage.app",
  messagingSenderId: "150405356291",
  appId: "1:150405356291:web:0b488c1ccc2d72157fa736",
  measurementId: "G-S42M8LWJHP"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
});
