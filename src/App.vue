<template>
    <v-app>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import firebaseStore from '@/stores/firebaseStore'

firebaseStore()
</script>
