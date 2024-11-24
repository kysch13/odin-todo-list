import { taskBuilder, groupBuilder } from "./builders";

const todo = {
    _groups: [],
    _tasks: [],
    addGroup: function (title) {
        this._groups.push(groupBuilder(title));
    },
    addTask: function (title, complete, desc, due, priority) {
        this._tasks.push(taskBuilder(title, complete, desc, due, priority));
    },
    deleteTask: function (idNum) {
        // find task with matching id and remove from list
        for (let i=0; i<this._tasks.length; i++) {
            if (this._tasks[i].idNum === idNum) {
                this._tasks.splice(i, 1);
            }
        }
    },
    changeTaskStatus: function (idNum, complete) {
        for (let i=0; i<this._tasks.length; i++) {
            if (this._tasks[i].idNum === idNum) {
                this._tasks[i].complete = complete;
            }
        }
    }
}

export {todo}