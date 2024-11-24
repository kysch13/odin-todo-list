

function makeInput (type, value, ...classes) {
    const input = document.createElement('input');
    input.type = type;
    if (value) {
        input.value = value;
    }
    if (classes) {
        classes.forEach(cl => {
            input.classList.add(cl);
        });
    }
    return input;
}

export {makeInput};
