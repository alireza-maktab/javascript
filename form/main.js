function handleSubmit(e) {
    e.preventDefault();
    const formElement = e.target;

    const values = {}
    for(input of formElement) {
        if (input.name) {
            values[input.name] = input.value
        }
    }

    console.log(values)
}