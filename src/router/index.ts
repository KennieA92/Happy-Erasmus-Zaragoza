import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase'
import { createRouter, createWebHashHistory } from 'vue-router';

const routes: Array<any> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/events',
        name: 'Events',
        component: () => import('../views/EventsView.vue'),
        meta: {
            requiresAuth: true
        }
    }

]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            };
        }
        return { x: 0, y: 0 };  // Go to the top of the page if no hash
    },
});


const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeEventListener = onAuthStateChanged(
            auth,
            (user) => {
                removeEventListener();
                resolve(user);
            },
            reject
        )
    });
}
router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    if (requiresAuth) {
        if (await getCurrentUser()) {
            next();
        }
        else {
            next('/');
        }
    }
    else {
        next();
    }
})



export default router