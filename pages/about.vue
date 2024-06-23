<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatem minus ratione blanditiis adipisci exercitationem, quam maiores sequi. Harum, dolore.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatem minus ratione blanditiis adipisci exercitationem, quam maiores sequi. Harum, dolore.</p>
        <p>{{ data }}</p>
    </div>
   
</template>
<script setup>
    // const { data } = await useFetch('/api/ninja?name=guille', {
    //     method: 'post',
    //     body: {age: 36}
    // })
    const { data } = await useFetch('/api/currency/EUR')
</script>
<style lang="scss" scoped>
    
</style>
