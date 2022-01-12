// const grandparent = document.getElementById("khaan-daee");
// changeColor(grandparent)



















// --------------------

// const grandparent = document.getElementById("khaan-daee");

// const parents = grandparent.getElementsByClassName("parent");

// const parentsArray = Array.from(parents);

// parents.forEach(changeColor)














// --------------------


// const grandparent = document.querySelector("#khaan-daee");
// changeColor(grandparent)












// --------------------


// const grandparent = document.querySelector(".grandparent")
// changeColor(grandparent)










// --------------------


// const parent = document.querySelector(".parent");
// changeColor(parent)














// --------------------


// const parents = document.querySelectorAll(".parent");
// parents.forEach(changeColor)













// --------------------


// const grandparent = document.getElementById("khaan-daee");

// const parents = grandparent.children

// const parentsArray = Array.from(parents)

// parentsArray.forEach(changeColor)

// const firstChild = parents[1].children[1]
// changeColor(firstChild)














// --------------------


// const grandparent = document.getElementById("khaan-daee");
// const firstParent = grandparent.children[1]
// const firstChild = firstParent.querySelector(".child")
// changeColor(firstChild)














// --------------------


// const child = document.getElementById("abbas")



// const parent = child.parentElement
// changeColor(parent)
// changeColor(parent.parentElement)














// --------------------


// const child = document.getElementById("abbas")
// const grandparent = child.closest(".grandparent")
// changeColor(grandparent)














// --------------------


// const abbas = document.getElementById("abbas")

// changeColor(abbas.previousElementSibling)








// const childOne = document.getElementById("abbas")
// const childTow = childOne.nextElementSibling
// changeColor(childTow)
// // changeColor(childTow.previousElementSibling)














// --------------------


function changeColor(element) {
    element.style.backgroundColor = "#333"
}