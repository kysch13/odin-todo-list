import { makeElem } from "./elements";
import { todo } from "./todo";
import { dates, formatSimpleDate } from "./dates";
import { taskList, taskForm, groupList, groupForm } from "./render";
import { icon } from '@fortawesome/fontawesome-svg-core'
import { faSquarePen, faCircleXmark, faCheckCircle } from '@fortawesome/free-solid-svg-icons'




function buildTaskForm (action, id) {
    const form = makeElem('form', undefined, 'add-task-form');
    const fieldset = makeElem('fieldset', undefined);
    const legend = makeElem('legend', undefined);

    const inputs = [];
    const title = makeElem('div');
    title.appendChild(makeLabel('input-task-title', 'Task'));
    const titleInput = makeInput('text', 'input-task-title', 'title', null, true);
    title.appendChild(titleInput);
    inputs.push(title);

    const desc = makeElem('div');
    desc.appendChild(makeLabel('input-task-desc', 'Task Details'));
    const descInput = makeInput('text', 'input-task-desc', 'desc', null, false);
    desc.appendChild(descInput);
    inputs.push(desc);

    const due = makeElem('div');
    due.appendChild(makeLabel('input-task-due', 'Due Date'));
    const dueDateInput = makeInput('date', 'input-task-due', 'due', null, false);
    dueDateInput.value = dates.currentDateFormatted;
    due.appendChild(dueDateInput);
    inputs.push(due);

    const priority = makeElem('div', undefined, 'task-priority-container');
    const priorityLabel = makeLabel('input-task-priority', '');
    priority.appendChild(priorityLabel);
    const prioritySpan = makeElem('span', undefined);
    const priorityInput = makeInput('checkbox', 'input-task-priority', 'priority', null, false);
    priorityLabel.appendChild(priorityInput);
    priorityLabel.appendChild(prioritySpan);
    inputs.push(priority);

    if (action === 'add') {
        const submit = makeElem('button', 'Add Task', 'add-task-submit-btn');
        submit.type = 'button';
        submit.id = 'add-new-task-btn';
        inputs.push(submit);
        legend.innerText = 'Add a New Task';
    } else if (action === 'edit' && (id)) {
        const submit = makeElem('button', 'Save Task', 'save-task-submit-btn');
        submit.type = 'button';
        submit.id = 'save-task-btn';
        submit.dataset.taskId = id;
        inputs.push(submit);
        const taskObj = todo.retrieveTask(id);
        titleInput.value = taskObj.title;
        descInput.value = taskObj.desc;
        dueDateInput.value = formatSimpleDate(taskObj.due); 
        priorityInput.checked = taskObj.priority;
        legend.innerText = 'Edit Task';
    }

    fieldset.appendChild(legend);
    

    inputs.forEach(el => {
        fieldset.appendChild(el);
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                submitTaskForm();
                taskList.clear();
                taskList.render();
                taskForm.clear();
                taskForm.render();
            }
        })
    });

    
    form.appendChild(fieldset);


    const closeBtn = makeElem('button', '', 'close-btn');
    closeBtn.type = 'button';
    closeBtn.id = 'add-task-close';
    // Add FontAwesome icons
    const closeIcon = icon(faCircleXmark);
    Array.from(closeIcon.node).map((n) => closeBtn.appendChild(n));
    form.appendChild(closeBtn);

    return form;
}

function buildGroupForm () {
    const form = makeElem('form', undefined, 'add-group-form');
    const fieldset = makeElem('fieldset', undefined);
    const legend = makeElem('legend', 'Add a New List');
    fieldset.appendChild(legend);

    const title = makeElem('div');
    title.appendChild(makeLabel('title', 'List Name'));
    const titleInput = makeInput('text', 'input-group-title', 'title', null, true);
    title.appendChild(titleInput);
    titleInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            submitGroupForm();
            taskList.clear();
            taskList.render();
            groupList.clear();
            groupList.render();
            groupForm.clear();
        }
    })

    // disabled button to prevent input from submitting form on keypress enter
    const dummySubmit = makeElem('button', '');
    dummySubmit.type = 'button';
    dummySubmit.disabled = true;
    dummySubmit.style.display = 'none';


    const submit = makeElem('button', 'Add Group', 'add-group-submit-btn');
    submit.type = 'button';
    submit.id = 'add-new-group-btn';

    fieldset.appendChild(title);
    fieldset.appendChild(dummySubmit);
    fieldset.appendChild(submit);
    form.appendChild(fieldset);

    const closeBtn = makeElem('button', '', 'close-btn');
    closeBtn.type = 'button';
    closeBtn.id = 'add-group-close';
    // Add FontAwesome icons
    const closeIcon = icon(faCircleXmark);
    Array.from(closeIcon.node).map((n) => closeBtn.appendChild(n));
    form.appendChild(closeBtn);

    return form;
}

function makeLabel (labelFor, text) {
    const label = document.createElement('label');
    label.setAttribute('for', labelFor);
    label.innerText = text;
    return label;
}

function makeInput (type, id, name, value, required, ...classes) {
    const input = document.createElement('input');
    input.id = id;
    input.name = name;
    input.value = value;
    if (required) {
        input.setAttribute('required', 'true');
    }
    input.type = type;
    if ((typeof value) === 'string') {
        input.value = value;
    }
    if (classes) {
        classes.forEach(cl => {
            input.classList.add(cl);
        });
    }
    return input;
}

function submitTaskForm () {
    const title = document.getElementById('input-task-title').value;
    const desc = document.getElementById('input-task-desc').value;
    const due = document.getElementById('input-task-due').value;
    const priority = document.getElementById('input-task-priority').checked;
    // Convert date input to date object. Format it later on output.
    const dueDateObj = new Date(`${due}T00:00:00`);
    if (validateForm(title)) {
        todo.addTask(String(title), false, String(desc), dueDateObj, priority, todo._activeGroup.idNum);
    }
}

function submitTaskEdit (idNum) {
    const title = document.getElementById('input-task-title').value;
    const desc = document.getElementById('input-task-desc').value;
    const due = document.getElementById('input-task-due').value;
    const priority = document.getElementById('input-task-priority').checked;
    // Convert date input to date object. Format it later on output.
    const dueDateObj = new Date(`${due}T00:00:00`);
    if (validateForm(title)) {
        todo.updateTask(idNum, String(title), false, String(desc), dueDateObj, priority);
    }
}

function submitGroupForm () {
    const title = document.getElementById('input-group-title').value;
    if (validateForm(title)) {
        todo.addGroup(String(title));
    }
}

function validateForm (title) {
    if (title.length > 0) {
        return true;
    }
}


export {buildTaskForm, submitTaskForm, submitTaskEdit, buildGroupForm, submitGroupForm};