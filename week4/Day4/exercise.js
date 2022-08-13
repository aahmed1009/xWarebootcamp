"use strict"
// const margrit = new Map();
// margrit.set("open",11)
// margrit.set("close",15)
// console.log(margrit)
const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
let qustionMap = new Map(Object.entries(game))
console.log(qustionMap)
let Valuess = []
for (let value of qustionMap.values()) {

    Valuess.push(value)
    // console.log(value)
}
console.log(Valuess)
// let qustionMap = new Map(Object.entries(game))
// console.log(qustionMap)
// let keyValuess = []
// for (let keys of qustionMap.keys()) {

//     keyValuess.push(keys)
//     // console.log(value)
// }
// console.log(keyValuess)
const airline = "Air Plane Portugal"
const plane = "A320";
console.log(airline.indexOf("a"))
console.log(airline.lastIndexOf("a"))
console.log(airline.toLowerCase())
//toUpperCase()
const priceGB = "288,97@"
const priceUS = priceGB.replace('@', "$").replace(",", '.')
console.log(priceUS)
const email = 'hello@jonas.io'
const loginEmail = 'Hello@Jonas.IO \n'
const normalEmail = loginEmail.toLowerCase().trim()
console.log(normalEmail)


const plane1 = "Airbus A320ne"

console.log(plane1.includes("A320"))
console.log(plane1.startsWith('Air'))
//true
console.log(plane1.endsWith('Air'))
//false

// const airlines = function (str) {
//   let s  s.toLowerCase()
//         (str.includes("knife") || str.includes("gun")) ?
//         console.log("includes") :
//         console.log("doesn't includes")

// }
// airlines("knife laptop money gun  ")

//regex
// const str = 'I have laptop, mobile and gun'
// const sentence = str.match(/gun/gi) || str.match(/knife/gi) ? 'Not Allow' : 'Welcome'
// console.log(sentence) 

//padding 
const message = 'Go to gate 23!'
console.log(message.length)
console.log(message.padStart(20, "+"))
console.log(message.padEnd(20, "+"))