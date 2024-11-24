import { library, findIconDefinition, icon } from '@fortawesome/fontawesome-svg-core'
import { faSquarePen, faSquareXmark, faCircleCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons'


function makeTaskElem (task) {
    const container = makeElem('div', undefined, 'task-container');
    container.setAttribute('data-task-id', task.idNum);
    if (task.complete) {
        container.classList.add('task-completed');
    }
    const statusCont = makeElem('div', undefined, 'task-status');
    const taskDetails = makeElem('div', undefined, 'task-details');
    const taskUI = makeElem('div', undefined, 'task-ui');
    const detailsChildren = [];
    const uiChildren = [];
    const statusCheckbox = makeStatusCheckbox(task.idNum, task.complete);
    statusCont.appendChild(statusCheckbox);
    // Create html elements for task details
    detailsChildren.push(makeElem('h2', task.title, 'task-title'));
    detailsChildren.push(makeElem('span', task.desc, 'task-desc'));
    detailsChildren.push(makeElem('span', task.due, 'task-due'));
    uiChildren.push(makeElem('span', task.priority, 'task-priority', task.priority));
    uiChildren.push(makeTaskActionsElem(task.idNum));

    detailsChildren.forEach(child => {
        taskDetails.appendChild(child);
    })
    uiChildren.forEach(child => {
        taskUI.appendChild(child);
    })
    container.appendChild(statusCont);
    container.appendChild(taskDetails);
    container.appendChild(taskUI);
   
    return container;
}

function makeStatusCheckbox (id, complete) {
    const form = makeElem('form');
    const label = makeElem('label');
    const checkbox = makeElem('input');
    const check = makeElem('span');
    // Add FontAwesome icons
    const checkMark = icon(faCheckCircle);
    Array.from(checkMark.node).map((n) => check.appendChild(n));
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('data-task-id', id);
    checkbox.classList.add('task-status-checkbox');
    if (complete === true) {
        checkbox.checked = true;
    }
    form.appendChild(label);
    label.appendChild(checkbox);
    label.appendChild(check);
    return form;
}

function makeTaskActionsElem (id) {
    const actionsCont = makeElem('div', undefined, 'task-actions');
    const deleteBtn = makeElem('button', undefined, 'task-delete');
    const editBtn = makeElem('button', undefined, 'task-edit');
    
    // Add FontAwesome icons
    const editIcon = icon(faSquarePen);
    Array.from(editIcon.node).map((n) => editBtn.appendChild(n));
    const deleteIcon = icon(faSquareXmark);
    Array.from(deleteIcon.node).map((n) => deleteBtn.appendChild(n));
    
    deleteBtn.setAttribute('data-task-id', id);
    editBtn.setAttribute('data-task-id', id);
    
    actionsCont.appendChild(editBtn);
    actionsCont.appendChild(deleteBtn);
    
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


export {makeTaskElem, makeElem};