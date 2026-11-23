// ============================================================
//  Firebase Configuration
//  1. اذهب إلى https://console.firebase.google.com
//  2. أنشئ مشروعاً جديداً
//  3. أضف تطبيق ويب (Web App)
//  4. انسخ الـ config هنا
//  5. فعّل Authentication > Email/Password
//  6. فعّل Firestore Database
// ============================================================

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyB2WVBRuxop55kOJ0i7iSHBjrkxDsm__cM",
  authDomain: "mhfazte.firebaseapp.com",
  projectId: "mhfazte",
  storageBucket: "mhfazte.firebasestorage.app",
  messagingSenderId: "770888739081",
  appId: "1:770888739081:web:17c30d2034d49ac47a0bd8",
  measurementId: "G-GGCP633EV8"
};

// Firestore Rules (ضعها في Firebase Console > Firestore > Rules):
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /barbers/{barberId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /bookings/{bookingId} {
      allow read, write: if request.auth != null;
    }
    match /reviews/{reviewId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
*/
