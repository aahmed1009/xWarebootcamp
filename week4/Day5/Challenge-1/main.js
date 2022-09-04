"use strict"
let btn = document.querySelector(".btn")

const fun = function () {
  let text = document.querySelector(".areaOne").value
  //   console.log(text)
  let textt = text.split("\n")
  console.log(textt)
  for (let list of textt) {
    let [first, second] = list.toLowerCase().trim().split("_")
    let result = `${first}${second.replace(second[0],second[0].toUpperCase())}`
    console.log(result)

    // document.querySelector('.areaTwo').innerHTML=result
    document.querySelector('.areaTwo').append(result)

  }
}
btn.addEventListener('click', fun)

document.querySelector('.areaTwo').innerHTML = result

// const convert = function (str) {
//     let text = str.split("_")
//     console.log(text);
//     for (let i = 0; i < text.length - 1; i++) {
//         return (text[i] + text[i + 1][0].toUpperCase() + text[i + 1].slice(1, text[i + 1].length))
//         //     console.log(str[i].toUpperCase())


//     }

// }
// console.log(convert("alaa_ahmed"))