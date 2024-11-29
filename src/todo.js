import { idTracker } from "./id-tracker";

const todo = {
    _groups: [],
    _activeGroup: {idNum: 0, title: 'All Tasks'},
    _tasks: [],
    addGroup: function (title) {
        let idNum = idTracker.groupID();
        this._groups.push({idNum, title});
        this.setActiveGroup(idNum);
    },
    setActiveGroup: function (idNum) {
        this._activeGroup.idNum = idNum;
        // find active group and set title
        for (let i=0; i<this._groups.length; i++) {
            if (this._groups[i].idNum === idNum) {
                this._activeGroup.title = this._groups[i].title;
            }
        }
        if (this._activeGroup.idNum === 0) {
            this._activeGroup.title = 'All Tasks';
        }
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