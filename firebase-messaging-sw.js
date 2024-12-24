
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');
// Initialize Firebase in the service worker
firebase.initializeApp({
 	apiKey: "AIzaSyDzDlUanuT-n9vuEw6PMtGjCFHpP99jVqs",
	authDomain: "wihcloud-app.firebaseapp.com",
	projectId: "wihcloud-app",
	storageBucket: "wihcloud-app.firebasestorage.app",
	messagingSenderId: "380864257222",
	appId: "1:380864257222:web:22d6ca27aa449474d74bc7",
	measurementId: "G-82HKJQ6F87"
});

const messaging = firebase.messaging();

// self.addEventListener('notificationclick', (event) => {
//     clients.openWindow(event.notification.data.url);
// });