const elementTask = function (task) {
        let container = elementMaker('div', undefined, 'task-container');
        let title = elementMaker('h2', undefined, 'task-title');
        title.innerText = task.title;
        container.appendChild(title);
        return container;
}

const elementMaker = function (type, id, ...classes) {
    const element = document.createElement(type);
    if (id) {element.id = id}
    if (classes) {classes.forEach(cl => {
        element.classList.add(cl);
    });}
    return element;
}

export {elementTask};