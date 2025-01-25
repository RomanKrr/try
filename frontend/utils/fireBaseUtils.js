import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCS2-OTLjhtGzF6QPz2aTCUsb61ASFEvrc",
    authDomain: "push-notification-a9e02.firebaseapp.com",
    projectId: "push-notification-a9e02",
    storageBucket: "push-notification-a9e02.firebasestorage.app",
    messagingSenderId: "150405356291",
    appId: "1:150405356291:web:0b488c1ccc2d72157fa736",
    measurementId: "G-S42M8LWJHP"
};


const vapidKey = "BBqnCGlK6V8H_BP2nYMgDrNWyVfOZnmZVvu5zfgzTeN4F-bzNvDa5glhNXfiC1kiHpBzkv9c3G1yd8UDsvLtVlQ";

const app = initializeApp(firebaseConfig); 
const messaging = getMessaging(app);

export const requestFCMToken = async () => {
    try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            const token = await getToken(messaging, { vapidKey });
            console.log("FCM Token:", token);
            return token;
        } else {
            throw new Error("Notification permission not granted");
        }
    } catch (err) {
        console.error("Error getting FCM token:", err);
        throw err;
    }
};
