<template>
    <div class="card text-center flex flex-col justify-between">
        <NuxtImg :src="product.image" alt="product thumb" class="thumb" />
        <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn my-4">Ver detalle</p>
        </NuxtLink>
    </div>
</template>

<script setup>
    const { product } = defineProps(['product'])
</script>

<style lang="scss" scoped>
    .thumb {
        max-height: 120px;
        max-width: 70%;
        margin: 0 auto;
    }
</style>
