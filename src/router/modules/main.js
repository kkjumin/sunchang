export default [
    {
        path: '/',
        name: 'Main',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
    }
];
