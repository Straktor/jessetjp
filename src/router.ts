import { createRouter, createWebHashHistory } from "vue-router"
import Home from "@/views/Home.vue"
import type { RouteRecordRaw } from "vue-router"

// Vue.use(VueRouter)

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
]

// const router = new VueRouter({
//     mode: "history",
//     base: process.env.BASE_URL,
//     routes,
// })

export default createRouter({
    history: createWebHashHistory(),
    routes,
})
