// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfZw2HB_grja6uowQ6JDQoDDJrWenYy5g",
  authDomain: "klooma-admin-fe.firebaseapp.com",
  projectId: "klooma-admin-fe",
  storageBucket: "klooma-admin-fe.appspot.com",
  messagingSenderId: "593905627666",
  appId: "1:593905627666:web:44e3c61ad9d5ad392fdecb",
  measurementId: "G-SXTKGPE4Q9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const twitter = new TwitterAuthProvider();
const github = new GithubAuthProvider();

export { auth, google, facebook, twitter, github };
