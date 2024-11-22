function makeTaskElem (task) {
    const container = makeElem('div', undefined, 'task-container');
    container.setAttribute('data-task-id', task.idNum);
    const children = [];
    // Create html elements for task details
    children.push(makeElem('h2', task.title, 'task-title'));
    children.push(makeElem('span', task.desc, 'task-desc'));
    children.push(makeElem('span', task.due, 'task-due'));
    children.push(makeElem('span', task.priority, 'task-priority', task.priority));
    // Create buttons for task actions
    children.push(makeTaskActionsElem(task.idNum));
    children.forEach(child => {
        container.appendChild(child);
    })
    return container;
}

function makeTaskActionsElem (id) {
    const actionsCont = makeElem('div', undefined, 'task-actions');
    const deleteBtn = makeElem('button', 'DELETE', 'task-delete');
    const editBtn = makeElem('button', 'EDIT', 'task-edit');
    deleteBtn.setAttribute('data-task-id', id);
    editBtn.setAttribute('data-task-id', id);
    actionsCont.appendChild(deleteBtn);
    actionsCont.appendChild(editBtn);
    return actionsCont;
}

function makeElem (type, text, ...classes) {
    const element = document.createElement(type);
    if (text) {element.innerText = text;}
    if (classes) {classes.forEach(cl => {
        element.classList.add(cl);
    });}
    return element;
}


export {makeTaskElem};