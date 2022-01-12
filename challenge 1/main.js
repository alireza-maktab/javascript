// const abbasList = document.querySelectorAll('.red')

// for (eachAbbasElement of abbasList) {
//     eachAbbasElement.innerText = "Abbas"
//     // eachAbbasElement.style.color = 'green'
//     eachAbbasElement.classList.replace("red", "green")
// }

const paragraph = document.querySelector('p');

const childrenArray = Array.from(paragraph.children)

childrenArray.forEach(eachAbbasElement => {
    eachAbbasElement.innerText = "Abbas"
    eachAbbasElement.classList.replace("red", "green")
})