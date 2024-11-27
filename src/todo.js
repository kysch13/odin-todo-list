import { idTracker } from "./id-tracker";

const todo = {
    _groups: [],
    _tasks: [],
    addGroup: function (title) {
        let idNum = idTracker.groupID();
        this._groups.push({idNum, title});
    },
    addTask: function (title, complete, desc, due, priority) {
        let idNum = idTracker.taskID();
        this._tasks.push({idNum, title, complete, desc, priority, due});
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