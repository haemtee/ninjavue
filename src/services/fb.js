// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxCImB5QPIRsFpHaUmaGZxtSn45GZ6iuU",
    authDomain: "todo-ninja-d0395.firebaseapp.com",
    projectId: "todo-ninja-d0395",
    storageBucket: "todo-ninja-d0395.appspot.com",
    messagingSenderId: "336623680691",
    appId: "1:336623680691:web:1bbf2a4e47816b701b04c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

// Saves a new message to Cloud Firestore.
export async function saveProject(project) {
    // Add a new message entry to the Firebase database.
    try {
        await addDoc(collection(getFirestore(), 'projects'), project
        );
    }
    catch (error) {
        console.error('Error writing new message to Firebase Database', error);
    }
}


