import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAdfQnUUJ9Y6dodRG9vfg26_gBCWEYu2Ro",
    authDomain: "tesk-90567.firebaseapp.com",
    projectId: "tesk-90567",
    storageBucket: "tesk-90567.appspot.com",
    messagingSenderId: "273322207465",
    appId: "1:273322207465:web:df994578c6c05bdeaee878",
    measurementId: "G-Z2M636NZ60"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
};

export{firebase};
