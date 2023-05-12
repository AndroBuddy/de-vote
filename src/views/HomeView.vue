<script setup>
import ContentPanel from '../components/ContentPanel.vue';
import SearchBar from '../components/SearchBar.vue';

const testItems = [
    { name: "Product 1", id: "1", img: "", price: "$10", quickBid: "$2" },
    { name: "Product 2", id: "2", img: "", price: "$20", quickBid: "$5" },
    { name: "Product 3", id: "3", img: "", price: "$13", quickBid: "$4" },
    { name: "Product 4", id: "4", img: "", price: "$15", quickBid: "$1" },
];
</script>

<template>
    <section class='flex flex-col px-14 py-10 flex-grow gap-12 overflow-auto'>
        <SearchBar />
        <section class='flex flex-col gap-10'>
            <ContentPanel title='Recent Auctions' :items='testItems' />
            <ContentPanel title=' High Value Bids' :items='testItems' />
        </section>
    </section>
</template>
