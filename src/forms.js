import { makeElem } from "./elements";
import { todo } from "./todo";
import { format } from "date-fns";
import { dates } from "./dates";

function buildTaskForm () {
    const form = makeElem('form', undefined, 'add-task-form');
    const fieldset = makeElem('fieldset', undefined);

    const inputs = [];
    const title = makeElem('div');
    title.appendChild(makeLabel('title', 'Task'));
    title.appendChild(makeInput('text', 'input-task-title', 'title', null, true));
    inputs.push(title);

    const desc = makeElem('div');
    desc.appendChild(makeLabel('desc', 'Task Details'));
    desc.appendChild(makeInput('text', 'input-task-desc', 'desc', null, false));
    inputs.push(desc);

    const due = makeElem('div');
    due.appendChild(makeLabel('due', 'Due Date'));
    const dueDateInput = makeInput('date', 'input-task-due', 'due', null, false);
    dueDateInput.value = dates.currentDateFormatted;
    due.appendChild(dueDateInput);
    inputs.push(due);

    const priority = makeElem('div');
    priority.appendChild(makeLabel('checkbox', 'High Priority'));
    priority.appendChild(makeInput('checkbox', 'input-task-priority', 'priority', null, false));
    inputs.push(priority);

    const submit = makeElem('button', 'Add Task', 'add-task-submit-btn');
    submit.type = 'button';
    submit.id = 'add-new-task-btn';
    inputs.push(submit);

    inputs.forEach(el => {
        fieldset.appendChild(el);
    });

    form.appendChild(fieldset);

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
    const priority = document.getElementById('input-task-priority').value;
    // Convert date input to date object. Format it later on output.
    const dueDateObj = new Date(`${due}T00:00:00`);
    if (validateTaskForm(title)) {
        todo.addTask(String(title), false, String(desc), dueDateObj, String(priority));
    }
    
}

function validateTaskForm (title) {
    if (title.length > 0) {
        return true;
    }
}


export {buildTaskForm, submitTaskForm};