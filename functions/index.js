const functions = require('firebase-functions')
// const axios = require("axios").default

const { initializeApp } = require('firebase-admin/app')
const { getFirestore, FieldValue } = require('firebase-admin/firestore')

initializeApp()
const db = getFirestore()

exports.rsvp = functions.https.onCall(async (data, context) => {
    await db.collection('rsvp').add({
        ...data,
        createdAt: FieldValue.serverTimestamp(),
    })
})

exports.repas = functions.https.onCall(async (data, context) => {
    await db.collection('repas').add({
        ...data,
        createdAt: FieldValue.serverTimestamp(),
    })
})

exports.deleteRsvp = functions.https.onCall(async (data, context) => {
    await db.collection('rsvp').doc(data.id).update({
        archive: true,
    })
})

exports.deleteRepas = functions.https.onCall(async (data, context) => {
    await db.collection('repas').doc(data.id).update({
        archive: true,
    })
})
