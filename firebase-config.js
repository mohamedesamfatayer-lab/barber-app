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
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
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
