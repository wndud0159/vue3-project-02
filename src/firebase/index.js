import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUjRpQZXu5EtLVwURgocV-IE-soZK6rAU",
  authDomain: "iback-project.firebaseapp.com",
  projectId: "iback-project",
  storageBucket: "iback-project.appspot.com",
  messagingSenderId: "812368313872",
  appId: "1:812368313872:web:f6761266734d59a9d7d495",
  measurementId: "G-8LSLX0EP5P"
};

firebase.initializeApp(firebaseConfig)



export const auth = firebase.auth()
export const database = firebase.firestore()
export const storage = firebase.storage()

export const USER_COLLECTION = database.collection('users')