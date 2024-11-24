import { todo } from "./todo";
import { makeTaskElem } from "./elements";
import { makeInput } from "./forms";

function clearMain () {
    const main = document.getElementById('main');
    main.innerText = '';
}

function renderMain () {
    const main = document.getElementById('main');
    todo._tasks.forEach(task => {
        let taskDiv = makeTaskElem(task);
        main.appendChild(taskDiv);
    });
}

function renderTaskInput () {
    
}

export {clearMain, renderMain}