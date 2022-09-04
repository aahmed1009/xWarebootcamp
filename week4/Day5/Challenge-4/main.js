const calcAverageHumanAge = function (dogAge) {
    const HumanAge = dogAge.map(age => (
        age <= 2 ? 2 * age : age + 16 * 4
    ))
    console.log(`HumanAge: ${HumanAge}`)
    const adults = HumanAge.filter(age => (age >= 18))
    console.log(`adults: ${adults}`)
    const average = adults.reduce((a, b) => a + b, 0) / adults.length;
    console.log(`average: ${average}`)

}
let dataOne=calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])

