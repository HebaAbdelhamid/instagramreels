import { initializeApp } from 'firebase/app';  // Importing 'initializeApp' from the firebase package
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyCoYzaxssw0M5mAXNpBdfiKtEcA8TH9su4",
    authDomain: "instagram-reels-6d7e1.firebaseapp.com",
    projectId: "instagram-reels-6d7e1",
    storageBucket: "instagram-reels-6d7e1.appspot.com",
    messagingSenderId: "743747804563",
    appId: "1:743747804563:web:4bc5d9c3a1fb2df4bf9c66",
    measurementId: "G-LBJYMQG2K6"
  };
  const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };