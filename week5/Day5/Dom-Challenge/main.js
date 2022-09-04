  //  const text = document.querySelector("text").value
  //  let showText = document.querySelector("ul")
  //   const addButton = document.querySelector("button")
  //   function addList() {
  //       let item = document.getElementById('textToDo').value

  //       let text = document.createTextNode(item)
  //       let newItem = document.createElement("li")
  //       newItem.appendChild(text)
  //       document.getElementById("toDoList").appendChild(newItem)
  //       item = document.getElementById('textToDo').value = "";
  //       //console.log('lol')
  //   }
  //   addButton.addEventListener('click', addList)

  const addbutton = document.querySelector("button")

  function addoos() {

      let addValue = document.querySelector("#textToDo").value
      let textt = document.createTextNode(addValue)
      let result = document.createElement("li")
      result.appendChild(textt)
      
      document.querySelector('#toDoList').appendChild(result)
         document.querySelector("#textToDo").value = ""
    //   addValue.innerHTML += "";
  }
  addbutton.addEventListener('click', addoos)