import firebase from 'firebase/app'
import 'firebase/auth'

let app=firebase.initializeApp({
    apiKey: "AIzaSyAMYax_5hkgASf0L0aNIS14KWllO-Bs0eM",
  authDomain: "picsome-development.firebaseapp.com",
  projectId: "picsome-development",
  storageBucket: "picsome-development.appspot.com",
  messagingSenderId: "284920494808",
  appId: "1:284920494808:web:f5cabe40af4ce4e970f5ad" 
})

export const auth = app.auth()
export default app