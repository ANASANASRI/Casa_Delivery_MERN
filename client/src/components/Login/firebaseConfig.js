import firebase from 'firebase/app';
import 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
apiKey: process.env.REACT_APP_apiKey,
authDomain: process.env.REACT_APP_authDomain,
projectId: process.env.REACT_APP_projectId,
storageBucket: process.env.REACT_APP_storageBucket,
messagingSenderId: process.env.REACT_APP_messagingSenderId,
appId: process.env.REACT_APP_appId,
measurementId: process.env.REACT_APP_measurementId
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();