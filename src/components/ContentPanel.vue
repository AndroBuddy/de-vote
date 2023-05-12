<script setup>
defineProps({
    title: String,
    items: Array
});
</script>

<template>
    <div class='flex flex-col gap-6'>
        <h2>{{ title }}</h2>
        <div class='flex gap-8 flex-wrap'>
            <div v-for='item in items' :key='item.id' class='flex flex-col bg-white p-6 rounded-2xl w-80'>
                <div class='h-60 bg-black/5 rounded-xl mb-4'></div> <!-- Replace with img -->
                <h3>{{ item.name }}</h3>
                <div class='flex justify-between items-center'>
                    <span>{{ item.price }}</span>
                    <span class='text-green-500 bg-green-500/10 px-2 py-1 rounded-lg'>+{{ item.quickBid }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
