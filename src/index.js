import taskBuilder from "./taskBuilder.js";

const todo = {
    groups: [],
    tasks: [],
    addTask: function (title, status, desc, due, priority) {
        this.tasks.push(taskBuilder(title, status, desc, due, priority));
    },
    deleteTask: function (idNum) {
        for (let i=0; i<this.tasks.length; i++) {
            if (this.tasks[i].idNum === idNum) {
                this.tasks.splice(i, 1);
            }
        }
    }
}

todo.addTask('Hello', 'pending', 'description', '2024-11-19T00:00:00', 'high');
todo.addTask('Hello2', 'pending', 'description', '2024-11-29T00:00:00', 'high');
todo.addTask('Hello3', 'pending', 'description', '2025-12-19T00:00:00', 'low');
console.log(todo.tasks);
todo.deleteTask(1);
console.log(todo.tasks);