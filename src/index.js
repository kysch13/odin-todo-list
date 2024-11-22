import "./fonts.css";
import "./styles.css";
import {taskBuilder, groupBuilder} from "./builders.js";
import {todo} from "./todo.js";
import { makeTaskElem } from "./elements.js";
import {clearMain, renderMain} from "./render.js";




todo.addTask('Hello', 'pending', 'description', '2024-11-19T00:00:00', 'high');
todo.addTask('Hello2', 'pending', 'description', '2024-11-29T00:00:00', 'high');
todo.addTask('Hello3', 'pending', 'description', '2025-12-19T00:00:00', 'low');
todo.addTask('Medium Task', 'pending', 'description', '2025-12-19T00:00:00', 'medium');
todo.addTask('Wash dishes', 'pending', 'wash the pots and pans', '2024-11-20T00:00:00', 'low');
todo.deleteTask(3);
todo.addGroup('hello');

renderMain();

main.addEventListener('click', (e) => {
    let elem = e.target;
    if (elem.classList.contains('task-delete')){
        todo.deleteTask(Number(elem.dataset.taskId));
        clearMain();
        renderMain();
    }
});