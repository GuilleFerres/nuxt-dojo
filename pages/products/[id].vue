<template>
    <div>
        <p>Product details for {{ id  }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe culpa alias at, neque praesentium dignissimos nam consequatur voluptate, modi et blanditiis ipsum dolores rem commodi maxime, incidunt atque iste dolorem.</p>
    </div>
</template>
<script lang="ts" setup>
const { id } = useRoute().params;
definePageMeta({
    layout: 'products'
})
</script>
<style lang="scss" scoped>
    
</style>
