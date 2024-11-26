import { todo } from "./todo";
import { makeTaskElem } from "./elements";
import { buildTaskForm } from "./forms";

function clearMain () {
    const main = document.getElementById('main');
    main.innerText = '';
}

function clearForm () {
    const formCont = document.getElementById('add-task-form');
    formCont.innerText = '';
}

function renderMain () {
    const main = document.getElementById('main');
    todo._tasks.forEach(task => {
        let taskDiv = makeTaskElem(task);
        main.appendChild(taskDiv);
    });
}

function renderForm () {
    const formCont = document.getElementById('add-task-form');
    formCont.appendChild(buildTaskForm());
}


export {clearMain, renderMain, clearForm, renderForm}