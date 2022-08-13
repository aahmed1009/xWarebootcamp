"use strict"
const convert = function (str) {
    let text = str.split("_")
    console.log(text);
    for (let i = 0; i < text.length - 1; i++) {
        return(text[i] + text[i + 1][0].toUpperCase() + text[i + 1].slice(1, text[i + 1].length))
        //     console.log(str[i].toUpperCase())


    }

}

console.log(convert("Alaa_ahmed"))
