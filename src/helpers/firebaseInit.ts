// const initFirebase = () => {
//     console.log("initFirebase")
// }

// export { initFirebase }

import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getFunctions } from "firebase/functions"

let app = undefined
let db = undefined
let auth = undefined
let functions = undefined

const initFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyAkEdfHxwLj9K_NTuvvNlQU1lVHTdZU07Q",
        authDomain: "jessetjp-f75ac.firebaseapp.com",
        projectId: "jessetjp-f75ac",
        storageBucket: "jessetjp-f75ac.appspot.com",
        messagingSenderId: "406617629544",
        appId: "1:406617629544:web:e9ccd51aac1c8ae5b16cdd",
        measurementId: "G-WN5TRV1RK5",
    }

    app = initializeApp(firebaseConfig)

    // getAnalytics(app)
    db = getFirestore(app)
    auth = getAuth(app)

    functions = getFunctions(app)

    // Activate to test local functions
    // connectFunctionsEmulator(functions, "localhost", 5001);
}

export { initFirebase, app, db, auth, functions }
