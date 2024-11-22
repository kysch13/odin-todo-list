import { todo } from "./todo";
import { makeTaskElem } from "./elements";

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

export {clearMain, renderMain}