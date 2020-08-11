import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/analytics";
import "firebase/auth";
import "firebase/storage";
import { firebaseConfig } from './Config/dev_config';
//firebase app initialization
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

//firestore named export
const FirebaseDB = firebase.firestore();
export { FirebaseDB };

//auth named export
const FirebaseAuth = firebase.auth();
export { FirebaseAuth };

//firebase analytics named export
const FirebaseAnalytics = firebase.analytics();
export { FirebaseAnalytics };

//firestore named export
const FirebaseStore = firebase.storage();
export { FirebaseStore };

