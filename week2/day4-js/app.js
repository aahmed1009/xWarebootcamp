// const bmi = markWeight / (height * height)
//exercise 1&2
//////////////////////////////////////////////////////////////
let markWeight = 78
let markTall = 1.69
let johnWeight = 92
let johnTall = 1.95
const markBmi = markWeight / (markTall ** 2)
const johnBmi = johnWeight / (johnTall ** 2)
console.log(markBmi, johnBmi)
console.log(markBmi > johnBmi)
if (markBmi > johnBmi) {
    console.log(`Mark bmi ${markBmi} is higher than John ${johnBmi}`);
} else {
    console.log(`John bmi ${johnBmi} is higher than mark ${markBmi}`);
}
markWeight = 95
markTall = 1.88
johnWeight = 85
johnTall = 1.76
const markBmi2 = markWeight / (markTall ** 2)
const johnBmi2 = johnWeight / (johnTall ** 2)
console.log(markBmi2, johnBmi2)
console.log(markBmi2 > johnBmi2)
// markBmi = markWeight / (markTall ** 2)
// console.log(markBmi)
// johnBmi = johnWeight / (johnTall ** 2)
// console.log(johnBmi)
// console.log(markBmi > johnBmi)

if (markBmi2 > johnBmi2) {
    console.log(`Mark bmi ${markBmi} is higher than John ${johnBmi}`);
} else {
    console.log(`John bmi ${johnBmi} is higher than mark ${markBmi}`);
}
//ex3
//data1
const Dolphins = (96 + 108 + 89) / 3
console.log(`Dolphins average score ${Dolphins}.`)
const Koalas = (88 + 91 + 110) / 3
console.log(`Koalas average score ${Koalas}.`)
const minimumScore = 100
if (Dolphins > Koalas) {
    console.log("Dolphins art the winnners")

} else if (koalas < Dolphins) {
    console.log("koalas art the winnners")
} else {
    console.log("Draw")
}
//Bonus1
const Dolphins3 = (97 + 112 + 101) / 3
const Koalas3 = (109 + 95 + 123) / 3

if (Dolphins3 > Koalas3 && minimumScore) {
    console.log("Dolphins art the winnners")

} else if (Koalas3 > Dolphins3 && minimumScore) {
    console.log("Koalas art the winnners")

}
//Bonus2
const Dolphins4 = (97 + 112 + 101) / 3
const Koalas4 = (109 + 95 + 106) / 3
if (Dolphins4 === Koalas4 && minimumScore >= 100)
    console.log("Draw")