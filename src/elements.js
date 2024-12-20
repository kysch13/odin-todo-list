import { icon } from '@fortawesome/fontawesome-svg-core'
import { faSquarePen, faCircleXmark, faCheckCircle, faCirclePlus, faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons'
import { formatDueDate, dateColorClass } from './dates';


function makeTaskElem (task) {
    const container = makeElem('div', undefined, 'task-container');
    container.setAttribute('data-task-id', task.idNum);
    if (task.complete) {
        container.classList.add('task-completed');
    }
    if (task.priority) {
        container.classList.add('high-priority');
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
    detailsChildren.push(makeElem('span', formatDueDate(task.due), 'task-due', dateColorClass(task.due)));
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

function makeTaskActionsElem (idNum) {
    const actionsCont = makeElem('div', undefined, 'task-actions');
    const deleteBtn = makeElem('button', undefined, 'task-delete');
    const editBtn = makeElem('button', undefined, 'task-edit');
    const detailsBtn = makeElem('button', undefined, 'task-details');
    
    // Add FontAwesome icons
    const detailsIcon = icon(faCircleInfo);
    Array.from(detailsIcon.node).map((n) => detailsBtn.appendChild(n));
    const editIcon = icon(faSquarePen);
    Array.from(editIcon.node).map((n) => editBtn.appendChild(n));
    const deleteIcon = icon(faCircleXmark);
    Array.from(deleteIcon.node).map((n) => deleteBtn.appendChild(n));
    
    deleteBtn.setAttribute('data-task-id', idNum);
    editBtn.setAttribute('data-task-id', idNum);
    detailsBtn.setAttribute('data-task-id', idNum);
    
    actionsCont.appendChild(detailsBtn);
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


function makeGroupListItem (group) {
    const li = makeElem('li', group.title);
    li.setAttribute('data-group-id', group.idNum);
    const actions = makeGroupListActions(group.idNum);
    li.appendChild(actions);
    return li;
}

function makeGroupListActions (idNum) {
    const actionsCont = makeElem('div', undefined, 'group-actions');
    const deleteBtn = makeElem('button', undefined, 'group-delete');
       // Add FontAwesome icons
    const deleteIcon = icon(faXmark);
    Array.from(deleteIcon.node).map((n) => deleteBtn.appendChild(n));
    
    deleteBtn.setAttribute('data-group-id', idNum);
    actionsCont.appendChild(deleteBtn);
    
    return actionsCont;
}

function makeGroupTitleElem (activeGroup) {
    const title = makeElem('h1', activeGroup.title);
    return title;
}

function makeAddButton (id, text) {
    const button = makeElem('button', text);
    button.id = id;
    button.type = 'button';
    // Add FontAwesome Icon
    const plusIcon = icon(faCirclePlus);
    Array.from(plusIcon.node).map((n) => button.appendChild(n));
    return button;
}


export {makeTaskElem, makeElem, makeGroupListItem, makeGroupTitleElem, makeAddButton};