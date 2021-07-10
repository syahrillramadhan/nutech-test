import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBxsb7nfM2AqRIWVGRwpqDESHwQ9z6NgfE',
  authDomain: 'nutech-firebase.firebaseapp.com',
  projectId: 'nutech-firebase',
  storageBucket: 'nutech-firebase.appspot.com',
  messagingSenderId: '829157293998',
  appId: '1:829157293998:web:371c54bcb0f32c5e1c923f',
  measurementId: 'G-MF03J82JRV',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export default firebase;
