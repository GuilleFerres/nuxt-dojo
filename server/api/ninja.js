export default defineEventHandler(async (event)=> {
    // handel query params
    // const { name } = getQuery(event)
    // const age = await readBody(event)

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_kAyn9A8Aw9fwmIzVSG8JmLfCJW483R4MpXcZehwH')

    return data
})