import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import 'vant/lib/index.css';
import Vant from 'vant'

import Hot from "../views/hot/Index.vue";
import Man from "../views/man/Index.vue";
import ProductDetails from "../views/productDetails/ProductDetails.vue";
import Pay from "../views/pay/Pay.vue";
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

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
                component: Man,
                lazyComponent: true
            },
            
        ],
        
    },
    {
        path:'/productDetails',
        component:ProductDetails,
    },
    {
        path:'/pay',
        component:Pay
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router