<template>
    <v-app>
        <Nav :enable-login="true" />
        <v-divider class="pb-8" />
        <v-main>
            <v-container>
                <h1>RSVP</h1>
                <h3>Total: {{ stats.numOfYes + stats.guest + stats.kids }}</h3>
                <h3>Nombre Oui: {{ stats.numOfYes }}</h3>
                <h3>Nombre Non: {{ stats.numOfNo }}</h3>
                <h3>Nombre d'invités: {{ stats.guest }}</h3>
                <h3>Nombre d'enfants: {{ stats.kids }}</h3>
                <v-divider />
                <h2>Réponses</h2>
                <v-table density="compact" class="cContainer">
                    <thead>
                        <tr>
                            <th class="text-left">#</th>
                            <th class="text-left">Réponse</th>
                            <th class="text-left">Nom</th>
                            <th class="text-left">Courriel</th>
                            <th class="text-left">Invité</th>
                            <th class="text-left">Enfants</th>
                            <!-- <th class="text-left">Date</th> -->
                            <th class="text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in rsvp" :key="item.id">
                            <td>{{ index + 1 }}</td>
                            <td>
                                {{ item.response === 'Yes' ? 'Oui' : 'Non' }}
                            </td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{ item.guest }}</td>
                            <td>{{ item.kids }}</td>
                            <!-- <td>{{ item.createdAt }}</td> -->
                            <td>
                                <v-btn
                                    variant="text"
                                    icon="mdi-delete"
                                    size="small"
                                    @click="openDialog(item)"
                                />
                            </td>
                        </tr>
                    </tbody>
                </v-table>

                <v-dialog v-model="dialog" max-width="600px">
                    <v-card>
                        <v-card-title> Delete </v-card-title>
                        <v-card-text v-if="dialogContext">
                            <div>Réponse: {{ dialogContext.response }}</div>
                            <div>Nom: {{ dialogContext.name }}</div>
                            <div>Courriel: {{ dialogContext.email }}</div>
                            <div>Invité: {{ dialogContext.guest }}</div>
                            <div>Enfants: {{ dialogContext.kids }}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer />
                            <v-btn @click="dialog = false">Cancel</v-btn>
                            <v-btn
                                @click="deleteEntry()"
                                :loading="dialogLoading"
                                >Delete</v-btn
                            >
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts" setup>
import Nav from '@/components/sections/Nav.vue'
import { ref, onMounted, computed } from 'vue'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { storeToRefs } from 'pinia'
import firebaseStore from '@/stores/firebaseStore'

import { useRepo } from 'pinia-orm'
import RSVP from '@/models/rsvpModel'
import { g } from 'pinia-orm/dist/Data-95444d16'

const store = firebaseStore()
const { db } = storeToRefs(store)
const { removeRSVP } = store

const rsvpRepo = useRepo(RSVP)

const dialog = ref(false)
const dialogLoading = ref(false)
const dialogContext: g = ref(undefined)

const rsvp = computed(() => {
    return rsvpRepo.all().filter((r) => r?.response && !r.archive)
})

const stats = computed(() => {
    if (!rsvp.value || rsvp.value.length === 0)
        return {
            numOfYes: 0,
            numOfNo: 0,
            guest: 0,
            kids: 0,
        }

    return {
        numOfYes: rsvp.value.filter(
            (r) => r?.response && r.response.toLowerCase() === 'yes',
        ).length,
        numOfNo: rsvp.value.filter(
            (r) => r?.response && r?.response.toLowerCase() === 'no',
        ).length,
        guest: rsvp.value.filter((r) => r?.guest && r?.guest).length,
        kids: rsvp.value
            .filter((r) => r?.kids && r?.kids)
            .reduce((partialSum, r) => partialSum + r.kids, 0),
    }
})

const openDialog = (item: g) => {
    dialogContext.value = item
    dialog.value = true
}

const closeDialog = () => {
    dialogLoading.value = false
    dialogContext.value = undefined
    dialog.value = false
}

const deleteEntry = () => {
    dialogLoading.value = true

    removeRSVP({ id: dialogContext.value.id }).finally(() => {
        closeDialog()
    })
}

onMounted(() => {
    onSnapshot(query(collection(db.value, 'rsvp')), (docs) => {
        const rsvps: g = []

        docs.forEach((doc) => {
            // Set firebase id as orm id
            // if ("createdAt" in doc.data()) doc.data().createdAt = doc.data().createdAt.seconds * 1000
            const r = { id: doc.id, ...doc.data() }

            rsvps.push(r)
        })

        rsvpRepo.save(rsvps)
    })
})
</script>

<style scoped>
.cContainer {
    padding: 0;
    border: 1px solid #ccc;
}
</style>
