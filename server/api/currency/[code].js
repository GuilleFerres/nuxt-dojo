export default defineEventHandler(async(event)=> {
    const { code } = event.context.params
    const { currencykey } = useRuntimeConfig()
    debugger
    console.log(currencykey, "currencykey")
    const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencykey}`

    const { data } = await $fetch(uri)

    return data
})