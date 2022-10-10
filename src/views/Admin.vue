<template>
    <div class="main">
        {{ rsvp }}

        <v-table density="compact">
            <thead>
                <tr>
                    <th class="text-left">Réponse</th>
                    <th class="text-left">Nom</th>
                    <th class="text-left">Courriel</th>
                    <th class="text-left">Invité</th>
                    <!-- <th class="text-left">Date</th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in rsvp" :key="item.id">
                    <td>{{ item.response }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.guest }}</td>
                    <!-- <td>{{ item.createdAt }}</td> -->
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from "vue"
import { collection, onSnapshot, query } from "firebase/firestore"
import { storeToRefs } from "pinia"
import firebaseStore from "@/stores/firebaseStore"

import { useRepo } from "pinia-orm"
import RSVP from "@/models/rsvpModel"
import { g } from "pinia-orm/dist/Data-95444d16"

const store = firebaseStore()
const { db } = storeToRefs(store)

const rsvpRepo = useRepo(RSVP)

const rsvp = computed(() => {
    return rsvpRepo.all()
})

onMounted(() => {
    onSnapshot(query(collection(db.value, "rsvp")), (docs) => {
        const rsvps: g = []

        docs.forEach((doc) => {
            // Set firebase id as orm id
            console.log(doc)
            const r = { id: doc.id, ...doc.data() }
            // if ("createdAt" in r) r.createdAt = doc.data().createdAt.seconds * 1000

            rsvps.push(r)
        })

        rsvpRepo.save(rsvps)
    })
})
</script>

<style scoped></style>
