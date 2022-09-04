import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Vue3103View from '../views/Vue3103View.vue';
import Vue3104View from '../views/Vue3104View.vue';
import Vue31exView from '../views/Vue31exView.vue';
import Vue3403View from '../views/Vue3403View.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/vue3103',
        name: 'vue3103',
        component: Vue3103View
    },
    {
        /* url 과 컴포넌트 연결 */
        path: '/vue3104',
        name: 'vue3104',
        component: Vue3104View
    },
    {
        path: '/vue31ex',
        name: 'vue31ex',
        component: Vue31exView
    },
    {
        path: '/vue3403',
        name: 'vue3403',
        component: Vue3403View
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
