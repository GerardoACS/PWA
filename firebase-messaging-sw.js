// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
//   apiKey: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_API_KEY`,
//   authDomain: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_AUTH_DOMAIN`,
//   projectId: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_PROJECT_ID`,
//   storageBucket: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_STORAGE_BUCKET`,
//   messagingSenderId: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_SENDER_ID`,
//   appId: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_APP_ID`,
//   measurementId: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_MEASUREMENT_ID`,

apiKey: "AIzaSyD_aIQgy7or4Tq6W8oQ5ntkqHxtIQtNoxE",
authDomain: "pwareact-169d2.firebaseapp.com",
projectId: "pwareact-169d2",
storageBucket: "pwareact-169d2.appspot.com",
messagingSenderId: "440576754245",
appId: "1:440576754245:web:31070616548ca3ea87d92c",
measurementId: "G-L2MJV3LWYW"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});