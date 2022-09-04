Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
      winner: "",
      lol: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

// const buttonElement=document.querySelector('button')
// const inputElement=document.querySelector('input')
// const listItems=document.querySelector('ul')

// function addGoals(){
//         const enteredInputs =inputElement.value
//         const itemslist=document.createElement('li')
//         itemslist.textContent=enteredInputs
//         listItems.appendChild(itemslist)
//         inputElement.value=""
// }

// buttonElement.addEventListener('click',addGoals)
