<template>
    <div>
        <main class="grid grid-cols-4 gap-5">
            <section v-for="product in products" :key="product.id">
                <ProductCard :product="product"/>
            </section>
        </main>
    </div>
</template>
<script setup>
    definePageMeta({
        layout: 'products'
    })
    // fetch products
    const { data: products } = await useFetch('https://fakestoreapi.com/products')

    useHead({
        title: 'Nuxt Dojo | Merch',
        meta: [
            { name: 'description', content: 'Dojo Merch products page'}
        ]
    })

</script>
<style lang="scss" scoped>
    
</style>
