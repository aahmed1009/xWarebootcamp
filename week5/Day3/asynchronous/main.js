"use strict"
// await fetch
// let jsonToJS=JSON.stringify(data)
// let jstoJSON=await res.json()
async function fetchAPi() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    let jstoJSON = await result.json()
    console.log(jstoJSON)
    let jsontoJs = JSON.stringify(jstoJSON)
    console.log(jsontoJs)
}
fetchAPi()
