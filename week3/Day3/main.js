// //coding challenge one
// // TODO: TEST DATA ONE
// let calcAverage = (a, b, c) => (a + b + c) / 3
// let Dolphins = calcAverage(44, 23, 71)
// let Koalas = calcAverage(65, 54, 49)
// console.log(Dolphins, Koalas)
// const checkWinners = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas})`)
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`)
//     } else {
//         console.log("DRAW")
//     }
// }
// checkWinners(Dolphins, Koalas)

// // TODO: TEST DATA TWO
// let Dolphins2 = calcAverage(85, 54, 41)
// let koalas2 = calcAverage(23, 34, 27)
// checkWinners(Dolphins2, koalas2)

// //codong challenge two
//  TODO:

// let markObject = {
//     firstName: "Mark",
//     lastName: "Miller",
//     mass: 78,
//     height: 1.69,

// }
// const bmicalc = function (weight, height) {
//     let bmi = weight / (height * height);
//     return bmi
// }
// let log = bmicalc(markObject.mass, markObject.height)
// console.log(log)
// let johnObject = {
//     firstName: "John",
//     lastName: "Smith",
//     mass: 92,
//     height: 1.95,

// };
// let log2 = bmicalc(johnObject.mass, johnObject.height)
// console.log(log2)
// // console.log(bmicalc(johnObject.mass,johnObject.height))
// if (log >= log2) {
//     console.log(`${markObject.firstName} ${markObject.lastName} BMI ${log} greater than ${johnObject.firstName} ${johnObject.lastName} BMI ${log2}`)
// } else {
//     console.log(`${johnObject.firstName} ${johnObject.lastName} BMI ${log2} greater than ${markObject.firstName} ${markObject.lastName} BMI ${log}`)
// }
///////////////////////////////////
//challenge 3
let billValue = 275

let tip = billValue * (15 / 100)
let tip1 = billValue * (20 / 100)
billValue >= 50 && billValue <= 300 ? console.log(`the billValue was ${billValue}, the tip was ${tip}and the total value is ${billValue+tip}`) : console.log(tip1)
// let billValue=40
// if(billValue >=50 && billValue<=300){
//     let tip =billValue *(15/100)
//     console.log(`the billValue was ${billValue}, the tip was ${tip}and the total value is ${billValue+tip}`)
// }else {
//     let tip1 =billValue *(20/100)
//     console.log(`the billValue was ${billValue}, the tip was ${tip1}and the total value is ${billValue+tip1}`)
// }