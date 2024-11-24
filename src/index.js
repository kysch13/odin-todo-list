import "./fonts.css";
import "./styles.css";
import {taskBuilder, groupBuilder} from "./builders.js";
import {todo} from "./todo.js";
import { makeTaskElem } from "./elements.js";
import {clearMain, renderMain, clearForm, renderForm} from "./render.js";
import { buildTaskForm, submitForm } from "./forms.js";


const globalVars = (function (){
    const main = document.getElementById('main');
    const sidebar = document.getElementById('sidebar');
    const formCont = document.getElementById('add-task-form');
    return {main, sidebar, formCont};
})();

renderMain();
renderForm();

main.addEventListener('click', (e) => {
    let elem = e.target;
    console.log(elem);
    if (elem.classList.contains('task-delete')){
        todo.deleteTask(Number(elem.dataset.taskId));
        clearMain();
        renderMain();
    }

    if (elem.classList.contains('task-status-checkbox')){
        if (elem.checked === true) {
            todo.changeTaskStatus(Number(elem.dataset.taskId), true);
        } else {
            todo.changeTaskStatus(Number(elem.dataset.taskId), false);
        }
        clearMain();
        renderMain();
    }

});

sidebar.addEventListener('click', (e) => {
    let elem = e.target;
    console.log(elem.id);
    if (elem.id === 'add-new-task-btn') {
        submitForm();
        clearMain();
        renderMain();
        clearForm();
        renderForm();
    }
})
