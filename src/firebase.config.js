// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBojGufWzHIi9TpqhGfDhdE3JyKlg0ZDp4',
  authDomain: 'house-marketplace-app-bf1bc.firebaseapp.com',
  projectId: 'house-marketplace-app-bf1bc',
  storageBucket: 'house-marketplace-app-bf1bc.appspot.com',
  messagingSenderId: '319565763476',
  appId: '1:319565763476:web:80a91b66d41ccf20e67581',
};

initializeApp(firebaseConfig);

export const db = getFirestore();
