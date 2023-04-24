<template>
    <section id="invitation" class="section invitation section-gray">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center heading">
                    <h2>Choix de repas</h2>
                    <p>Faite votre choix de repas</p>
                </div>
            </div>
            <div class="row h-flex-md">
                <div class="form-wrapper col-md-12">
                    <form
                        id="contact-form"
                        class="form-horizontal"
                        @submit.prevent=""
                    >
                        <!-- Main Person -->
                        <h3 class="invitation_heading">Votre Repas</h3>
                        <div class="row pt-3">
                            <div id="name-field" class="form-field col-sm-6">
                                <label for="form-name" class="control-label">
                                    Nom*
                                </label>
                                <input
                                    v-model="data.name"
                                    type="text"
                                    class="form-control"
                                    id="form-name"
                                    name="form-name"
                                    required
                                />
                            </div>
                            <div id="email-field" class="form-field col-sm-6">
                                <label for="form-email" class="control-label">
                                    Email*
                                </label>
                                <input
                                    v-model="data.email"
                                    type="email"
                                    class="form-control"
                                    id="form-email"
                                    name="form-email"
                                    required
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div
                                id="guest-name-field"
                                class="form-field col-sm-6"
                            >
                                <label
                                    for="form-guest-name"
                                    class="control-label"
                                >
                                    Entrée*
                                </label>
                                <select
                                    v-model="data.entree"
                                    class="form-control"
                                    name="entree"
                                    id="entree"
                                >
                                    <option value=""></option>
                                    <option value="gravlax">
                                        Gravlax de saumon aux herbes du bas du
                                        fleuve
                                    </option>
                                    <option value="vege">
                                        Option végétarienne
                                    </option>
                                </select>
                            </div>

                            <div
                                id="guest-name-field"
                                class="form-field col-sm-6"
                            >
                                <label
                                    for="form-guest-name"
                                    class="control-label"
                                >
                                    Repas*
                                </label>
                                <select
                                    v-model="data.repas"
                                    class="form-control"
                                    name="entree"
                                    id="entree"
                                >
                                    <option value=""></option>
                                    <option value="canard">
                                        Cuisse de canard confite aux 5 épices
                                    </option>
                                    <option value="macreuse">
                                        Macreuse de bœuf sauce aux poivres (une
                                        seule cuisson — médium saignant)
                                    </option>
                                    <option value="vege">
                                        Option végétarienne
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div
                                id="guest-name-field"
                                class="form-field col-sm-12"
                            >
                                <label
                                    for="form-guest-name"
                                    class="control-label"
                                >
                                    Allergies / restrictions alimentaires
                                </label>
                                <input
                                    v-model="data.restriction"
                                    type="text"
                                    class="form-control"
                                    id="form-guest-name"
                                    name="form-name"
                                />
                            </div>
                        </div>
                        <!-- Invité -->
                        <h3 class="invitation_heading">
                            Repas de votre invité
                        </h3>
                        (Laisser le champ vide si vous n'avez pas de +1)
                        <div class="row pt-3">
                            <div id="name-field" class="form-field col-sm-6">
                                <label for="form-name" class="control-label">
                                    Nom
                                </label>
                                <input
                                    v-model="data.nameGuest"
                                    type="text"
                                    class="form-control"
                                    id="form-name"
                                    name="form-name"
                                    required
                                />
                            </div>
                        </div>
                        <div class="row" v-if="data.nameGuest">
                            <div
                                id="guest-name-field"
                                class="form-field col-sm-6"
                            >
                                <label
                                    for="form-guest-name"
                                    class="control-label"
                                >
                                    Entrée*
                                </label>
                                <select
                                    v-model="data.entreeGuest"
                                    class="form-control"
                                    name="entree"
                                    id="entree"
                                >
                                    <option value=""></option>
                                    <option value="gravlax">
                                        Gravlax de saumon aux herbes du bas du
                                        fleuve
                                    </option>
                                    <option value="vege">
                                        Option végétarienne
                                    </option>
                                </select>
                            </div>

                            <div
                                id="guest-name-field"
                                class="form-field col-sm-6"
                            >
                                <label
                                    for="form-guest-name"
                                    class="control-label"
                                >
                                    Repas*
                                </label>
                                <select
                                    v-model="data.repasGuest"
                                    class="form-control"
                                    name="entree"
                                    id="entree"
                                >
                                    <option value=""></option>
                                    <option value="canard">
                                        Cuisse de canard confite aux 5 épices
                                    </option>
                                    <option value="macreuse">
                                        Macreuse de bœuf sauce aux poivres (une
                                        seule cuisson — médium saignant)
                                    </option>
                                    <option value="vege">
                                        Option végétarienne
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="row" v-if="data.nameGuest">
                            <div
                                id="guest-name-field"
                                class="form-field col-sm-12"
                            >
                                <label
                                    for="form-guest-name"
                                    class="control-label"
                                >
                                    Allergies / restrictions alimentaires de
                                    l'invité
                                </label>
                                <input
                                    v-model="data.restrictionGuest"
                                    type="text"
                                    class="form-control"
                                    id="form-guest-name"
                                    name="form-name"
                                />
                            </div>
                        </div>

                        <!-- Enfants -->
                        <h3 class="invitation_heading">Repas enfants</h3>
                        Les enfants de 12 ans et moins auront droit une assiette
                        de doigts de poulet et frites. <br />
                        (Laisser le champ vide si vous n'êtes pas accompagné
                        d'enfants)
                        <div class="row pt-3">
                            <div
                                id="guest-name-field"
                                class="form-field col-sm-6"
                            >
                                <label
                                    for="form-guest-name"
                                    class="control-label"
                                    id="fakefilled"
                                >
                                    Nombre d'enfants 0-5
                                </label>
                                <input
                                    v-model="data.kids05"
                                    type="number"
                                    placeholder="0"
                                    class="form-control"
                                    id="form-guest-name"
                                    name="form-name"
                                />
                            </div>
                            <div
                                id="guest-name-field"
                                class="form-field col-sm-6"
                            >
                                <label
                                    for="form-guest-name"
                                    class="control-label"
                                    id="fakefilled"
                                >
                                    Nombre d'enfants 6-12
                                </label>
                                <input
                                    v-model="data.kids612"
                                    type="number"
                                    placeholder="0"
                                    class="form-control"
                                    id="form-guest-name"
                                    name="form-name"
                                />
                            </div>
                            <div
                                id="guest-name-field"
                                class="form-field col-sm-12"
                                v-if="data.kids05 || data.kids612"
                            >
                                <label
                                    for="form-guest-name"
                                    class="control-label"
                                >
                                    Allergies / restrictions alimentaires des
                                    enfants
                                </label>
                                <input
                                    v-model="data.restrictionKids"
                                    type="text"
                                    class="form-control"
                                    id="form-guest-name"
                                    name="form-name"
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 text-center">
                                <button
                                    type="submit"
                                    class="btn btn-outline-black btn-lg send-button"
                                    :class="disabledSubmit ? 'disabled' : ''"
                                    @click="submit()"
                                >
                                    <div v-if="!loading">Envoyer</div>
                                    <v-progress-circular
                                        v-else
                                        indeterminate
                                        :size="25"
                                        color="white"
                                    ></v-progress-circular>
                                </button>
                            </div>
                        </div>
                    </form>

                    <v-dialog v-model="dialog" max-width="600px">
                        <v-card>
                            <v-card-title>
                                Merci de votre réponse!
                            </v-card-title>
                            <v-card-text>
                                <h2>Vos choix:</h2>
                                <div>Nom: {{ data.name }}</div>
                                <div>Courriel: {{ data.email }}</div>
                                <div>Entrée: {{ data.entree }}</div>
                                <div>Repas: {{ data.repas }}</div>
                                <div>
                                    Restriction alimentaires:
                                    {{ data.restriction }}
                                </div>

                                <h3 v-if="data.nameGuest">Invité:</h3>
                                <div v-if="data.nameGuest">
                                    Invité: {{ data.nameGuest }}
                                </div>
                                <div v-if="data.nameGuest">
                                    Entrée invité: {{ data.entreeGuest }}
                                </div>
                                <div v-if="data.nameGuest">
                                    Repas invité: {{ data.repasGuest }}
                                </div>
                                <div v-if="data.nameGuest">
                                    Restriction alimentaires invité:
                                    {{ data.restrictionGuest }}
                                </div>

                                <h3>Enfants:</h3>
                                <div v-if="data.kids05">
                                    Enfants 0-5 ans: {{ data.kids05 }}
                                </div>
                                <div v-if="data.kids612">
                                    Enfants 6-12 ans: {{ data.kids612 }}
                                </div>
                                <div v-if="data.kids05 || data.kids612">
                                    Restriction alimentaires enfants:
                                    {{ data.restrictionKids }}
                                </div>
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
import { ref, computed, reactive } from 'vue'

import firebaseStore from '@/stores/firebaseStore'

const store = firebaseStore()
const { sendRepas } = store

const dialog = ref(false)

const data = reactive({
    name: '',
    email: '',
    entree: '',
    repas: '',
    restriction: '',
    nameGuest: '',
    entreeGuest: '',
    repasGuest: '',
    restrictionGuest: '',
    kids05: 0,
    kids612: 0,
    restrictionKids: '',
})

const loading = ref(false)

const disabledSubmit = computed(() => {
    let result =
        !(data.name && data.email && data.entree && data.repas) || loading.value

    // Guest
    if (data.nameGuest && (!data.entreeGuest || !data.repasGuest)) result = true

    return result
})

const getDataObj = () => {
    const parsedData = JSON.parse(JSON.stringify(data))

    if (!parsedData.nameGuest) {
        parsedData.entreeGuest = ''
        parsedData.repasGuest = ''
        parsedData.restrictionGuest = ''
    }

    if (!parsedData.kids05 && !parsedData.kids612)
        parsedData.restrictionKids = ''

    return parsedData
}

const submit = () => {
    if (disabledSubmit.value) return
    loading.value = true
    sendRepas(getDataObj()).finally(() => {
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
