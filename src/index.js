import {taskBuilder, groupBuilder} from "./builders.js";
import { elementTask } from "./dom.js";


const todo = {
    _groups: [],
    _tasks: [],
    addGroup: function (title) {
        this._groups.push(groupBuilder(title));
    },
    addTask: function (title, status, desc, due, priority) {
        this._tasks.push(taskBuilder(title, status, desc, due, priority));
    },
    deleteTask: function (idNum) {
        // find task with matching id and remove from list
        for (let i=0; i<this._tasks.length; i++) {
            if (this._tasks[i].idNum === idNum) {
                this._tasks.splice(i, 1);
            }
        }
    }
}

todo.addTask('Hello', 'pending', 'description', '2024-11-19T00:00:00', 'high');
todo.addTask('Hello2', 'pending', 'description', '2024-11-29T00:00:00', 'high');
todo.addTask('Hello3', 'pending', 'description', '2025-12-19T00:00:00', 'low');
console.log(todo._tasks);
todo.deleteTask(1);
console.log(todo._tasks);
todo.addGroup('hello');
console.log(todo._groups);

const main = document.getElementById('main');
todo._tasks.forEach(task => {
    let taskDiv = elementTask(task);
    main.appendChild(taskDiv);
});