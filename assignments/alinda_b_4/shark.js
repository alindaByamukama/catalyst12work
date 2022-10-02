// remember JS is read top-down
const h1 = document.getElementsByTagName("h1")[0]
const p = document.getElementsByTagName("p")[0]
const ul = document.getElementsByTagName("ul")[0]
const html = document.documentElement
const sharkList = document.querySelector("ul")
const megalodon = document.createElement('li')
const bullShark = document.createElement('li')
const whaleShark = document.createElement('li')

// body
// console.log(p.parentNode)
// html
// console.log(p.parentNode.parentNode)
// document
// console.log(html.parentNode)
// node list of ul children
// console.log(ul.childNodes)

// change the background color of the first child element of ul
ul.firstElementChild.style.background = 'yellow'

// loop through ul children and style their background gold
// this overrides the above styling yellow of the first child element
for(let element of ul.children) {
    element.style.background = 'green'
}

// target the last child element of the fourth child element in the body
document.body.children[3].lastElementChild.style.background = 'blue'

// target the sibling element after tiger
const tiger = ul.children[1]
tiger.nextElementSibling.style.background = 'coral'

// assignment four: add other types of sharks using JS
// adds text content to the li element we created
megalodon.textContent = 'Megalodon Shark'
bullShark.textContent = 'Bull Shark'
whaleShark.textContent = 'Whale Shark'
// appends (li) to (ul)
sharkList.appendChild(megalodon)
sharkList.appendChild(bullShark)
sharkList.appendChild(whaleShark)
// change background color of li
megalodon.style.background = 'lightBlue'
bullShark.style.background = 'lightGreen'
whaleShark.style.background = 'fuchsia'