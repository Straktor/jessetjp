<template>
    <div class="main">
        <div class="loader"></div>
        <Nav />
        <Header />
        <AboutUs />
        <Countdown />
        <Event :enable-maps="true" />
        <OurStory />
        <Gallery />
        <Counter />
        <Reservation />
        <BottomBanner />
    </div>
</template>

<script lang="ts" setup>
import Nav from '@/components/sections/Nav.vue'
import Header from '@/components/sections/Header.vue'
import OurStory from '@/components/sections/OurStory.vue'
import AboutUs from '@/components/sections/AboutUs.vue'
import Countdown from '@/components/sections/Countdown.vue'
import Event from '@/components/sections/Event.vue'
import Gallery from '@/components/sections/Gallery.vue'
import Counter from '@/components/sections/Counter.vue'
// import RSVP from '@/components/sections/RSVP.vue'
import Reservation from '@/components/sections/Reservation.vue'
import BottomBanner from '@/components/sections/BottomBanner.vue'
</script>

<style scoped></style>
