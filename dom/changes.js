const para = document.createElement('p')
const toDoList = document.querySelector("ul")
const newToDo = document.createElement('li')
const anotherToDo = document.createElement('li')
const modifyToDo = document.createElement('li')

// adds text content to the p element
para.textContent = 'I am a brand new paragraph!'
// appends the p element to the body
document.body.appendChild(para)
// inserts the p element before the ul element in the body
document.body.insertBefore(para, document.body.firstElementChild)

// console.log(para)

// adds text content to the li element we created
newToDo.textContent = 'Do homework'
// appends new todo (li) to todo list (ul)
toDoList.appendChild(newToDo)
anotherToDo.textContent = "Pay Bills"
// inserts pay the bills (li) before the first child element of the (ul)
toDoList.insertBefore(anotherToDo, toDoList.firstElementChild)
modifyToDo.textContent = 'Feed the dog'
// replaces feed the cat (the third child element) with feed the dog
toDoList.replaceChild(modifyToDo, toDoList.children[2])
// removes the third child element in the ul
toDoList.removeChild(modifyToDo, toDoList.children[2])