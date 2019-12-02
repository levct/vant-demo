import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import 'vant/lib/index.css';
import Vant from 'vant'

import Hot from "../views/hot/Index.vue";
import Man from "../views/man/Index.vue";

Vue.use(VueRouter)
Vue.use(Vant)

const routes = [{
        path: '',
        name: 'Home',
        component: Home,
        children: [{
                path: '/hot',
                component: Hot
            },
            {
                path: '',
                component: Hot
            },
            {
                path: '/man',
                component: Man
            },
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router