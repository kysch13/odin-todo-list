import "./fonts.css";
import "./styles.css";
import {taskBuilder, groupBuilder} from "./builders.js";
import {todo} from "./todo.js";
import { makeTaskElem } from "./elements.js";
import {clearMain, renderMain} from "./render.js";




todo.addTask('Take out garbage', true, 'take out the garbage and recycling', '2024-11-19T00:00:00', 'high');
todo.addTask('Do a grocery run', false, 'Eggs, milk, bread, butter', '2024-11-29T00:00:00', 'high');
todo.addTask('Pay hydro bill', false, '$217.78', '2025-12-19T00:00:00', 'medium');
todo.addTask('Pay internet bill', false, '$72.78', '2025-12-19T00:00:00', 'medium');
todo.addTask('Medium Task', false, 'description', '2025-12-19T00:00:00', 'medium');
todo.addTask('Wash dishes', false, 'wash the pots and pans', '2024-11-20T00:00:00', 'low');
todo.addTask('Call doctor', false, '555-555-5555', '2024-11-20T00:00:00', 'low');
todo.deleteTask(4);
todo.addGroup('hello');

renderMain();

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

