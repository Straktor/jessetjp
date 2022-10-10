import { defineStore } from "pinia"
import { ref } from "vue"

import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { connectFunctionsEmulator, getFunctions, httpsCallable } from "firebase/functions"

const firebaseConfig = {
    apiKey: "AIzaSyAkEdfHxwLj9K_NTuvvNlQU1lVHTdZU07Q",
    authDomain: "jessetjp-f75ac.firebaseapp.com",
    projectId: "jessetjp-f75ac",
    storageBucket: "jessetjp-f75ac.appspot.com",
    messagingSenderId: "406617629544",
    appId: "1:406617629544:web:e9ccd51aac1c8ae5b16cdd",
    measurementId: "G-WN5TRV1RK5",
}

export default defineStore("firebaseStore", () => {
    const app = ref(initializeApp(firebaseConfig))
    const db = ref(getFirestore(app.value))
    const auth = ref(getAuth(app.value))
    const functions = ref(getFunctions(app.value))

    // Activate to test local functions
    // connectFunctionsEmulator(functions.value, "localhost", 5001)

    const sendRSVP = (data: unknown) => {
        // Get cloud functions
        const createRSVP = httpsCallable(functions.value, "rsvp")
        return createRSVP(data)
    }

    return { app, db, auth, functions, sendRSVP }
})
