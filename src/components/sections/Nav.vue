<template>
    <nav class="navbar" data-spy="affix" data-options="scrolltop:false">
        <div class="container">
            <div class="row">
                <div class="col-xs-2">
                    <div id="logo"><a href="/">#LaBelleEtLeBlond</a></div>
                </div>
                <div class="col-xs-10 menu-2">
                    <ul class="nav navbar-nav navbar-right">
                        <li v-if="!props.enableLogin" class="active">
                            <a class="page-scroll" href="#header">Accueil</a>
                        </li>
                        <li v-if="!props.enableLogin">
                            <a class="page-scroll" href="#events">Événement</a>
                        </li>
                        <li v-if="!props.enableLogin">
                            <a class="page-scroll" href="#couple-story">Nous</a>
                        </li>
                        <li v-if="!props.enableLogin">
                            <a class="page-scroll" href="#gallery">Photos</a>
                        </li>
                        <li v-if="!props.enableLogin">
                            <a class="page-scroll" href="#invitation"
                                >Réservation</a
                            >
                        </li>
                        <li v-if="props.enableLogin">
                            <a
                                v-if="JSON.stringify(loggedInUser) === '{}'"
                                class="logginNav"
                                @click="showLogin(true)"
                                >Connectez-vous</a
                            >
                            <a v-else class="logginNav" @click="logout()"
                                >logout</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <v-dialog
            v-model="dialog"
            width="600px"
            persistent
            transition="dialog-top-transition"
        >
            <v-card class="white--text">
                <v-card-title class="pa-4 mb-0">
                    {{ loginDialogSelected ? 'Se connecter' : "S'inscrire" }}
                </v-card-title>
                <v-divider class="my-2 mb-3" />
                <v-card-text class="lighten-5 pa-4 py-0">
                    <div class="field">
                        <p>Email</p>
                        <v-text-field
                            v-model="email"
                            placeholder="Email"
                            hide-details
                            required
                            bg-color="white"
                            class="cField white my-3 mt-1"
                        />
                    </div>
                    <div class="field">
                        <p>Password</p>
                        <v-text-field
                            v-model="password"
                            placeholder="Mot de passe"
                            password
                            class="cField white my-3 mt-1"
                            hide-details
                            required
                            bg-color="white"
                            :type="showPassword ? 'text' : 'password'"
                            @click:append-inner="showPassword = !showPassword"
                            :append-inner-icon="
                                showPassword ? 'mdi-eye' : 'mdi-eye-off'
                            "
                        />
                    </div>
                    <p class="dialogSwitch ma-0">
                        {{
                            loginDialogSelected
                                ? "Vous n'avez pas de compte?"
                                : 'Vous avez déjà un compte?'
                        }}
                        <span
                            class="toggleLoginSignInText"
                            @click="toggleLoginSignInText()"
                        >
                            {{
                                loginDialogSelected
                                    ? "S'inscrire"
                                    : 'Se connecter'
                            }}
                        </span>
                    </p>
                </v-card-text>
                <v-divider class="my-2" />
                <v-card-actions class="py-0">
                    <span class="white--text">{{ errorMessage }}</span>
                    <v-spacer />
                    <v-btn
                        class="white--text mx-2 mb-2"
                        variant="plain"
                        @click="close()"
                    >
                        Annuler
                    </v-btn>
                    <v-btn
                        class="white--text mx-2 mb-2"
                        variant="outlined"
                        :disabled="!(email && password)"
                        @click="actionBtn()"
                    >
                        {{
                            loginDialogSelected ? 'Se connecter' : "S'inscrire"
                        }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import firebaseStore from '@/stores/firebaseStore'
import { storeToRefs } from 'pinia'

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'

interface Props {
    enableLogin?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    enableLogin: false,
})

const loginDialogSelected = ref(false)
const dialog = ref(false)
const showPassword = ref(false)
const email = ref('')
const password = ref('')
const errorMessage = ref('')
const loggedInUser = ref({})

const store = firebaseStore()
const { auth } = storeToRefs(store)

function showLogin(login: boolean) {
    loginDialogSelected.value = login
    dialog.value = true
}

function toggleLoginSignInText() {
    loginDialogSelected.value = !loginDialogSelected.value
    errorMessage.value = ''
}

function actionBtn() {
    loginDialogSelected.value
        ? login(email.value, password.value)
        : signup(email.value, password.value)
}

function close() {
    dialog.value = false
}

function signup(email: string, password: string) {
    createUserWithEmailAndPassword(auth.value, email, password)
        .then(() => {
            close()
        })
        .catch((error) => {
            errorMessage.value = error.message
        })
}

function login(email: string, password: string) {
    signInWithEmailAndPassword(auth.value, email, password)
        .then(() => {
            close()
        })
        .catch((error) => {
            errorMessage.value = error.message
        })
}

function logout() {
    signOut(auth.value)
        .then(() => {
            console.log('signed out')
        })
        .catch((error) => {
            console.log(error)
        })
}

onAuthStateChanged(auth.value, (user) => {
    if (user) {
        loggedInUser.value = user
    } else {
        loggedInUser.value = {}
        console.log('logged out')
    }
})
</script>

<style scoped>
.navbar {
    background-color: white;
}

.navbar a,
.navbar ul li.active > a {
    color: #000 !important;
    font-weight: 500;
}

.navbar ul li.active > a::after {
    background-color: #000 !important;
}

.navbar.affix-top {
    border-bottom: 1px solid #ccc;
}

.v-card-text p {
    margin-bottom: 0px;
}
.cField {
    border: 1px solid black;
}

.dialogSwitch {
    display: flex;
    justify-content: center;
    align-self: center;
    color: #999 !important;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}

.v-card-title {
    display: flex;
    justify-content: center;
    align-self: center;
    font-size: 40px;
    font-weight: bold;
    font-family: 'Good Vibes Pro', cursive;
    margin: 0.2em;
}

.logginNav {
    cursor: pointer;
}

.toggleLoginSignInText {
    padding-left: 0.3em;
    color: #000 !important;
    cursor: pointer;
}
</style>
