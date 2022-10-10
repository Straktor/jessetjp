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
                        <div class="row">
                            <div class="guest-list form-field col-sm-12"></div>
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

const rsvp = ref(undefined)
const name = ref("")
const email = ref("")
const guest = ref("")

const loading = ref(false)

const disabledSubmit = computed(() => {
    return !(rsvp.value && name.value && email.value) || loading.value
})

const submit = () => {
    console.log(rsvp.value)
    console.log(name.value)
    console.log(email.value)
    console.log(guest.value)

    loading.value = true
    sendRSVP({
        response: rsvp.value,
        name: rsvp.value,
        email: email.value,
        guest: guest.value,
    })
        .then(() => {
            console.log("rsvp sent")
        })
        .finally(() => {
            loading.value = false
        })
}
</script>

<style scoped>
.btn.btn-outline-black.btn-lg.send-button {
    color: white;
}
</style>
