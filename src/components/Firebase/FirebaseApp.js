import * as firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/analytics";
import "firebase/auth";
import "firebase/storage";
import { FirebaseConfig } from './Config/web_config';

//firebase app initialization named export
const FirebaseApp = firebase.initializeApp(FirebaseConfig);
export { FirebaseApp };

//firestore named export
const FirebaseDB = FirebaseApp.firestore();
export { FirebaseDB };

//auth named export
const FirebaseAuth = FirebaseApp.auth();
export { FirebaseAuth };

//firebase analytics named export
const FirebaseAnalytics = firebase.analytics();
export { FirebaseAnalytics };

//firestore named export
const FirebaseStore = FirebaseApp.storage();
export { FirebaseStore };

