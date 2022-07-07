import Main from '@/pages/Main';
import PostPage from '@/pages/PostPage.vue';
import About from '@/pages/About.vue';
import PostPageWithVuex from '@/pages/PostPageWithVuex.vue';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/posts',
        component: PostPage,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/store',
        component: PostPageWithVuex,
    },
];

const router = createRouter({
    routes, 
    history: createWebHistory(process.env.BASE_URL)
});

export default router;