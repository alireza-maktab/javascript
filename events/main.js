const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')


// child.addEventListener('mouseenter', e => {
//     e.target.style.backgroundColor = "black"
// })

// child.addEventListener('mouseleave', e => {
//     e.target.style.backgroundColor = "blue"
// })


// const callbackFunction = e => {
//     console.log("grandparent clicked")
// }

// grandparent.addEventListener('click', callbackFunction)


// parent.addEventListener('click', e => {
//     console.log("parent clicked")
// })

// child.addEventListener('click', e => {
//     console.log("child clicked")
// })











// -----------------












// grandparent.addEventListener('click', e => {
//     console.log("grandparent bubble")
// })

// parent.addEventListener('click', e => {
//     console.log("parent bubble")
// })

// child.addEventListener('click', e => {
//     console.log("child bubble")
//     // e.stopPropagation()

// })

// grandparent.addEventListener('click', e => {
//     console.log("grandparent capture")
// }, {
//     capture: true
// })

// parent.addEventListener('click', e => {
//     console.log("parent capture")
// }, {
//     capture: true
// })

// child.addEventListener('click', e => {
//     console.log("child capture")
// }, {
//     capture: true
// })










// --------------------










// child.addEventListener('click', e => {
//     console.log("child clicked")
// }, {
//     once: true
// })










// -------------------










// const printHello = e => console.log("Hello")

// child.addEventListener('click', printHello)

// setTimeout(() => {
//     child.removeEventListener('click', printHello)
// }, 2000)










// -------------------










// const printHello = e => console.log("Hello")

// child.addEventListener('click', printHello)

// setTimeout(() => {
//     child.removeEventListener('click', e => e => console.log("Hello"))
// }, 2000)










// -------------------










// const divElements = document.querySelectorAll('div')

// divElements.forEach(div => {
//     div.addEventListener('click', e => {
//         console.log(`clicked on "${div.className}"`)
//         e.stopPropagation();
//     })
// })

// const newDiv = document.createElement('div')
// newDiv.style.width = '200px'
// newDiv.style.height = '200px'
// newDiv.style.backgroundColor = 'purple'
// newDiv.classList.add("new-div")
// document.body.append(newDiv)











// ---------------------

















// document.addEventListener('click', e => {

//     if (e.target.matches("div")) {
//         console.log(`clicked on "${e.target.className}"`)
//         e.stopPropagation();
//     }
// })










// document.addEventListener('click', e => {
//     if (e.target.matches('div')) {
//         console.log(`clicked on "${e.target.className}"`)
//     }
// })


// const newDiv = document.createElement('div')
// newDiv.style.width = '200px'
// newDiv.style.height = '200px'
// newDiv.style.backgroundColor = 'purple'
// newDiv.classList.add("new-div")
// document.body.append(newDiv)