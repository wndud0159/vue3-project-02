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
firebase.analytics().logEvent('notification_received')
 

export const auth = firebase.auth()
export const database = firebase.firestore()
export const storage = firebase.storage()


export const USER_COLLECTION = database.collection('users')
export const HEART_COLLECTION = database.collection('heart')
export const FINANCE_COLLECTION = database.collection('finance')
export const DIGITAL_COLLECTION = database.collection('digital')
export const MAINTAIN_COLLECTION = database.collection('maintain')
export const PETS_COLLECTION = database.collection('pets')
export const INHERITANCES_COLLECTION = database.collection('inheritances')
export const CHECKLISTS_COLLECTION = database.collection('checklists')