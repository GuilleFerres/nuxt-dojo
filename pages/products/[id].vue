<template>
    <div>
        <ProductsDetails :product="product" />
    </div>
</template>
<script setup>
const { id } = useRoute().params;
// fetch product
const uri = `https://fakestoreapi.com/products/${id}`
const {data: product} = await useFetch(uri, {key: id})
definePageMeta({
    layout: 'products'
})
</script>
<style lang="scss" scoped>
    
</style>
