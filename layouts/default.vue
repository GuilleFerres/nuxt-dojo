<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
                    <li><NuxtLink to="/products/abc" class="btn">abc products</NuxtLink></li>
                </ul>
                
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
   
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
    .router-link-exact-active {
        color: #12b488;
    }
</style>
