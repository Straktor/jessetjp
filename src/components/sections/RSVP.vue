<template>
    <section id="invitation" class="section invitation section-gray">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center heading">
                    <h2>Réservation</h2>
                    <p>
                        C'est ici que vous pourrez éventuellement confirmer votre présence et celle de vos enfants. Vous pourrez en même temps choisir votre menu et nous indiquer si vous serez présent
                        au brunch. Nous vous tiendrons au courant du moment où il sera possible de confirmer le tout.
                    </p>
                    <p>Pour ce faire, pouvez-vous nous laisser votre nom et votre email?</p>
                </div>
            </div>
            <div class="row h-flex-md">
                <div class="form-wrapper col-md-12">
                    <form id="contact-form" class="form-horizontal" @submit.prevent="">
                        <h3 class="invitation_heading">Serez-vous des nôtres?</h3>
                        <div class="row">
                            <div class="form-field switch-field col-sm-12">
                                <input v-model="rsvp" type="radio" name="rdo" id="yes" value="Yes" />
                                <input v-model="rsvp" type="radio" name="rdo" id="no" value="No" />
                                <div class="switch">
                                    <label for="yes">Oui</label>
                                    <label for="no">Non</label>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div id="name-field" class="form-field col-sm-6">
                                <label for="form-name" class="control-label">Nom*</label>
                                <input v-model="name" type="text" class="form-control" id="form-name" name="form-name" required />
                            </div>
                            <div id="email-field" class="form-field col-sm-6">
                                <label for="form-email" class="control-label">Email*</label>
                                <input v-model="email" type="email" class="form-control" id="form-email" name="form-email" required />
                            </div>
                        </div>
                        <h3 class="invitation_heading">Est-ce que vous allez être accompagné?</h3>
                        <div class="row">
                            <div id="guest-name-field" class="form-field col-sm-12">
                                <label for="form-guest-name" class="control-label">Nom de l'invité</label>
                                <input v-model="guest" type="text" class="form-control" id="form-guest-name" name="form-name" />
                            </div>
                        </div>
                        <h3 class="invitation_heading">Nombre d'enfants?</h3>
                        <div class="row">
                            <div id="guest-name-field" class="form-field col-sm-12">
                                <input v-model="kids" type="number" placeholder="0" class="form-control" id="form-guest-name" name="form-name" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 text-center">
                                <button type="submit" class="btn btn-outline-black btn-lg send-button" :class="disabledSubmit ? 'disabled' : ''" @click="submit()">
                                    <div v-if="!loading">Envoyer</div>
                                    <v-progress-circular v-else indeterminate :size="25" color="white"></v-progress-circular>
                                </button>
                            </div>
                        </div>
                    </form>

                    <v-dialog v-model="dialog" max-width="600px">
                        <v-card>
                            <v-card-title> Merci de votre réponse! </v-card-title>
                            <v-card-text>
                                <div>Serez-vous des nôtres?: {{ rsvp === "Yes" ? "Oui" : "Non" }}</div>
                                <div>Nom: {{ name }}</div>
                                <div>Courriel: {{ email }}</div>
                                <div v-if="guest">Invité: {{ guest }}</div>
                                <div v-if="kids">Enfants: {{ kids }}</div>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer />
                                <v-btn @click="dialog = false">Close</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"

import firebaseStore from "@/stores/firebaseStore"

const store = firebaseStore()
const { sendRSVP } = store

const dialog = ref(false)

const rsvp = ref(undefined)
const name = ref("")
const email = ref("")
const guest = ref("")
const kids = ref("")

const loading = ref(false)

const disabledSubmit = computed(() => {
    return !(rsvp.value && name.value && email.value) || loading.value
})

const submit = () => {
    if (disabledSubmit.value) return

    loading.value = true
    sendRSVP({
        response: rsvp.value,
        name: name.value,
        email: email.value,
        guest: guest.value,
        kids: kids.value,
    }).finally(() => {
        loading.value = false
        dialog.value = true
    })
}
</script>

<style scoped>
.btn.btn-outline-black.btn-lg.send-button {
    color: white;
}
</style>
