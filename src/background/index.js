import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
    apiKey: ".....",
    authDomain: ".....firebaseapp.com",
    databaseURL: "https://<YOUR FIREBASE>.firebaseio.com ",
    projectId: "......",
    storageBucket: "......appspot.com",
    messagingSenderId: ".....",
    appId: "1:.....:web:......"
  };
const app = initializeApp(firebaseConfig);

// FIREBASE DATABASE
const dbRef = ref(getDatabase(app));
get(child(dbRef, `/`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

//FREBASE AUTH
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log('User logged in uid - ', uid)
  } else {
    // User is signed out
    console.log('User is not logged in')
  }
});

console.log('background script logic here...')
