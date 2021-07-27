import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Upload from '../views/upload.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: "/home"
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component:Login
        // component: () =>
        //     import ( /* webpackChunkName: "login" */ '../views/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component:Register
        // component: () =>
        //     import ( /* webpackChunkName: "register" */ '../views/register.vue')
    },
    {
        path: '/upload',
        name: 'upload',
        component:Upload
        // component: () =>
        //     import ( /* webpackChunkName: "register" */ '../views/register.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router