import { idTracker } from "./id-tracker";
import { dataHandler } from "./storage";

const todo = {
    _groups: [],
    _activeGroup: {idNum: 0, title: 'All Tasks'},
    _tasks: [],
    addGroup: function (title) {
        let idNum = idTracker.groupID();
        dataHandler.saveData('groupIDTrack', idTracker.groupID());
        this._groups.push({idNum, title});
        this.setActiveGroup(idNum);
        dataHandler.saveData('_groups', this._groups);
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
        dataHandler.saveData('taskIDTrack', idTracker.taskID());
        this._tasks.push({idNum, title, complete, desc, due, priority, group});
        dataHandler.saveData('_tasks', this._tasks);
    },
    deleteTask: function (idNum) {
        // find task with matching id and remove from list
        for (let i=0; i<this._tasks.length; i++) {
            if (this._tasks[i].idNum === idNum) {
                this._tasks.splice(i, 1);
            }
        }
        dataHandler.saveData('_tasks', this._tasks);
    },
    updateTask: function (idNum, title, complete, desc, due, priority) {
        // find task with matching id and update key values
        for (let i=0; i<this._tasks.length; i++) {
            if (this._tasks[i].idNum === idNum) {
                this._tasks[i].title = title;
                this._tasks[i].complete = complete;
                this._tasks[i].desc = desc;
                this._tasks[i].due = due;
                this._tasks[i].priority = priority;
            }
        }
        dataHandler.saveData('_tasks', this._tasks);
    },
    retrieveTask: function (idNum) {
        for (let i=0; i<this._tasks.length; i++) {
            if (this._tasks[i].idNum === idNum) {
                return this._tasks[i];
            }
        }
    },
    changeTaskStatus: function (idNum) {
        for (let i=0; i<this._tasks.length; i++) {
            if (this._tasks[i].idNum === idNum) {
                this._tasks[i].complete = !this._tasks[i].complete;
            }
        }
        dataHandler.saveData('_tasks', this._tasks);
    },
    loadTasks: function () {
        this._tasks = dataHandler.loadData('_tasks');
    },
    loadGroups: function () {
        this._groups = dataHandler.loadData('_groups');
    }
}

export {todo}