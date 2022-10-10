<template>
    <v-app>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import { onMounted } from "vue"

import firebaseStore from "@/stores/firebaseStore"
import { storeToRefs } from "pinia"

const store = firebaseStore()
const { app } = storeToRefs(store)

console.log(app.value)

onMounted(() => {
    console.log("here")
})
</script>
