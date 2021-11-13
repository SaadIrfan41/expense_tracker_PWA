importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js')

firebase.initializeApp({
  apiKey: 'AIzaSyCkzfQmX_lFHK6D-HJgBM34blS_VXY5kec',

  authDomain: 'expence-tracker-pwa.firebaseapp.com',

  projectId: 'expence-tracker-pwa',

  storageBucket: 'expence-tracker-pwa.appspot.com',

  messagingSenderId: '627764282137',

  appId: '1:627764282137:web:9903d6680b5c5819673b88',
})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

messaging.onBackgroundMessage(function (payload) {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  )
  // Customize notification here
  const notificationTitle = 'Background Message Title'
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png',
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})
