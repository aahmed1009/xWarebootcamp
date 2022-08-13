const checkDogs = function (dogsJulia, dogsKate) {
    let catsjulia = dogsJulia.slice();
    catsjulia.splice(0, 1);
    catsjulia.splice(-2);


    let Dogs = catsjulia.concat(dogsKate);


    for (let i = 0; i < Dogs.length; i++) {
        if (Dogs[i] >= 3) {

            console.log(`"Dog number ${i} is an adult, and is ${Dogs[i]} years old"`)
        } else if (Dogs[i] < 3) {

            console.log(`"Dog number ${i} is an puppy, and is still a puppy"`)
        }
    }


}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])

