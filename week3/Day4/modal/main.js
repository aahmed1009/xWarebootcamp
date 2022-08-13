


let modal = document.querySelector(".modal")
let modalbtn = document.querySelector(".show-modal")
let closebtn = document.querySelector(".close-modal")
let parents = document.querySelector(".parent")
let overlay = document.querySelector(".overlay")
// overlay.addEventListener()
//listen for open click
// modalbtn.addEventListener('click', openModal)
parents.addEventListener('click', openModal)

function openModal() {
    overlay.classList.remove("hidden");
    modal.style.display = "block"
}
//listen for close click
closebtn.addEventListener('click', closeModal)

function closeModal() {
    overlay.classList.add("hidden");

    modal.style.display = "none"
}