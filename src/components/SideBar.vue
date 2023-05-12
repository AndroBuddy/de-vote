<script setup>
import IconHome from './icons/IconHome.vue';
import IconActiveBids from './icons/IconActiveBids.vue';
import IconFavorites from './icons/IconFavorites.vue';

import IconAdd from './icons/IconAdd.vue';
import IconAccount from './icons/IconAccount.vue';
import IconSettings from './icons/IconSettings.vue';

import IconLogout from './icons/IconLogout.vue';

import anime from 'animejs/lib/anime.es.js';

const slideIn = () => {
    anime({
        targets: 'nav',
        translateX: [0, '-100%'],
        duration: 1000,
        easing: 'linear'
    });
}

const navGraph = [
    [
        {
            name: 'Home',
            path: '/',
            icon: IconHome,
        },
        {
            name: 'Active Bids',
            path: '/about',
            icon: IconActiveBids,
        },
        {
            name: 'Favorites',
            path: '/about',
            icon: IconFavorites,
        },
    ],
    [
        {
            name: 'Add Product',
            path: '/about',
            icon: IconAdd,
        },
        {
            name: 'Account',
            path: '/about',
            icon: IconAccount,
        },
        {
            name: 'Settings',
            path: '/about',
            icon: IconSettings,
        },
    ]
];
</script>

<template>
    <nav>
        <section class='flex flex-col gap-14 p-14 w-72 bg-white h-screen rounded-t-3xl rounded-b-3xl'>
            <section>
                <h1>!much</h1>
            </section>
            <section class='flex flex-col gap-14'>
                <section class='flex flex-col gap-8'>
                    <ul class='flex flex-col gap-8 text-black/60'>
                        <li v-for='(navItem, index) in navGraph[0]' :key='index'>
                            <router-link :to='navItem.path' class='flex gap-4 items-center'>
                                <component :is='navItem.icon' />
                                <span>{{ navItem.name }}</span>
                            </router-link>
                        </li>
                    </ul>
                    <div class='border-[1px]' />
                    <ul class='flex flex-col gap-8 text-black/60'>
                        <li v-for='(navItem, index) in navGraph[1]' :key='index'>
                            <router-link :to='navItem.path' class='flex gap-4 items-center'>
                                <component :is='navItem.icon' />
                                <span>{{ navItem.name }}</span>
                            </router-link>
                        </li>
                    </ul>
                </section>

                <div>
                    <div @click='slideIn' class='flex gap-4 items-center'>
                        <IconLogout />
                        <span class='text-red-600'>Logout</span>
                    </div>
                </div>
            </section>
        </section>
    </nav>
</template>
