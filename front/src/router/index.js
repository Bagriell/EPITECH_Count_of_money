import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Register from "../views/Register";
import Dashboard from "../views/Dashboard";
import Profil from "../views/Profil";
import Coins from "../views/Coins";
import CoinPresse from '../views/CoinPresse'

Vue.use(VueRouter)

const routes = [
    {
        path: '/coins',
        name: "coins",
        component: Coins,
        meta: {title: 'Coins'}
    },
    {
        path: '/coin-presse',
        name: "coin-presse",
        component: CoinPresse,
        meta: {title: 'Coin Presse'}
    },
    {
        path: '/',
        name: 'login',
        component: Login,
        meta: { title: 'Login' }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: { title: 'Register' }
    },
    {
        path: '/dashboard/:currency',
        name: 'dashboard',
        component: Dashboard,
        meta: { title: 'Dashboard' }
    },
    {
        path: '/profil',
        name: 'profil',
        component: Profil,
        meta: { title: 'Profil' }
    }
]
const router = new VueRouter({
    routes
})

export default router