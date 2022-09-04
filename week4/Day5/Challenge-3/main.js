let dogAge = []
const calcAverageHumanAge = function (dogAge) {
    for (let i = 0; i < dogAge.length; i++) {
        let HumanAge = 0;
        if (dogAge[i] <= 2) {
            HumanAge = 2 * dogAge[i]
            console.log(`Dog Number${i+1} Age: ${dogAge[i]} and its Human Age is ${HumanAge}`);
        } else {
            HumanAge = 16 + (dogAge[i] * 4)
            console.log(`Dog Number${i+1} Age: ${dogAge[i]} and its Human Age is ${HumanAge}`);
        }
    }
 
}

calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])