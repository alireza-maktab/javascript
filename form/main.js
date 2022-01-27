function handleSubmit(e) {
    e.preventDefault();
    const formElement = e.target
    const formData = new FormData(formElement)

    console.log(formData)

    formElement.querySelectorAll(".is-invalid").forEach(el => {
        el.classList.remove("is-invalid")
    })
    formElement.querySelectorAll(".invalid-feedback").forEach(el => {
        el.remove();
    })


    try {
        firstNameValidator(formData.get("firstName"))
    } catch (error) {
        const inputElem = document.getElementById("first-name")
        inputElem.classList.add("is-invalid")
        const errorElement = document.createElement("div");
        errorElement.className = "invalid-feedback"
        errorElement.innerText = error
        inputElem.parentElement.append(errorElement)
    }
}


function firstNameValidator(value) {
    if (!value) {
        throw "First name is required!"
    } 
}
















