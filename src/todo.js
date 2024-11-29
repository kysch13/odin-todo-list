import { idTracker } from "./id-tracker";

const todo = {
    _groups: [],
    _activeGroup: 0,
    _tasks: [],
    addGroup: function (title) {
        let idNum = idTracker.groupID();
        this._groups.push({idNum, title});
        this.setActiveGroup(idNum);
    },
    setActiveGroup: function (idNum) {
        this._activeGroup = idNum;
    },
    addTask: function (title, complete, desc, due, priority, group) {
        let idNum = idTracker.taskID();
        this._tasks.push({idNum, title, complete, desc, due, priority, group});
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