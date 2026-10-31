importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
apiKey: "AIzaSyBQUJ3lm2aYl5bC2j-n74Rd5hlpCXChmX8",
authDomain: "testcatering-82592.firebaseapp.com",
projectId: "testcatering-82592",
storageBucket: "testcatering-82592.firebasestorage.app",
messagingSenderId: "948180327087",
appId: "1:948180327087:web:7b7fb730c3a03ddea0d25a"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
const notificationTitle =
payload.notification?.title || "New Notification";

const notificationOptions = {
    body: payload.notification?.body || "You have a new message!"
};

self.registration.showNotification(
    notificationTitle,
    notificationOptions
);

});
