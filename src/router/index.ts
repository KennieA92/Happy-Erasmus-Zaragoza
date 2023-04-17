import { createRouter, createWebHashHistory } from 'vue-router';

const routes: Array<any> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    }

]


const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router