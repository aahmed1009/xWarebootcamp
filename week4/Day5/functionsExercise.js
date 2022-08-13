
//first level function 
//callback function 
//function return function 
//closure function
// let f;
// const g  = function(){
//     const  a = 23
//     f = function(){
//         console.log(a*2)
//     }
// }
// console.log(g())
// document.querySelector('body').addEventListener('click', (() => {

//     let h = document.querySelector(".h1")

//     h.style.color = 'blue';
// })())
// (()=>{

// })()


(function () {
    const header = document.querySelector('.h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    })
})();