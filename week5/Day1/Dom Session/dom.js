// document.querySelector('')
// document.querySelectorAll('')
// document.getElementById('')
// document.getElementsByClassName('')
// document.getElementsByTagName('')

const message = document.createElement('div')
message.innerHTML = `${message}`

// document.querySelector('.areaTwo').innerHTML=result
// document.querySelector('.areaTwo').append(result)
document.querySelector('btn-close').addEventListener('click',function(){
    message.remove
})
message.style.backgroundColor="red";
// function(e){
//     e.target()
//     e.preventDefault()
//stop event propogation which stops firing (bubbling)
//bug cases
// }

//DOM traversing

const h1=document.querySelector('h1')
h1.children
h1.firstElementChild
h1.lastElementChild
h1.parentElement
h1.previousElementSibling
h1.nextElementSibling
{/* <div class="component">
  <h2 class="component__title">Component title</h2>
</div>
const component = document.querySelector('.component')
const title = component.querySelector('.component__title')

console.log(title) // <h2 class="component__title"> ... </h2> */}
//dom load events
// before load 
// on load
// DOMContentLoaded load
document.addEventListener('DOMContentLoaded',function(){})
document.addEventListener('beforeunload',function(){})
document.addEventListener('load',function(){})
document.addEventListener('unload',function(){})
