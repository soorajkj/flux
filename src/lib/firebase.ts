// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD53_fCCHagvy8R8ybQ742bbzlpwUOWTpE',
  authDomain: 'dashcloud-c5ff8.firebaseapp.com',
  projectId: 'dashcloud-c5ff8',
  storageBucket: 'dashcloud-c5ff8.appspot.com',
  messagingSenderId: '808103177213',
  appId: '1:808103177213:web:f6be1f574c00b8acfb4794',
  measurementId: 'G-Z6R9SHQ3G7',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const database = getFirestore(app);
