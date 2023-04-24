import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Admin from '@/views/Admin.vue'
import AdminRepas from '@/views/AdminRepas.vue'
import type { RouteRecordRaw } from 'vue-router'

// Vue.use(VueRouter)

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
    },
    {
        path: '/adminrepas',
        name: 'AdminRepas',
        component: AdminRepas,
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
