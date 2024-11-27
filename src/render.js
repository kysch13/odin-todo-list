import { todo } from "./todo";
import { makeTaskElem, makeGroupListItem } from "./elements";
import { buildTaskForm, buildGroupForm } from "./forms";


const taskList = {
    main: document.getElementById('main'),
    render: function () {
        todo._tasks.forEach(task => {
            let taskDiv = makeTaskElem(task);
            this.main.appendChild(taskDiv);
        });
    },
    clear: function () {
        this.main.innerText = '';
    }
}

const taskForm = {
    container: document.getElementById('add-task-form'),
    render: function () {
        this.container.appendChild(buildTaskForm());
    },
    clear: function () {
        this.container.innerText = '';
    }
}

const groupForm = {
    container: document.getElementById('add-group-form'),
    render: function () {
        this.container.appendChild(buildGroupForm());
    },
    clear: function () {
        this.container.innerText = '';
    }
}

const groupList = {
    list: document.getElementById('group-list'),
    render: function () {
        todo._groups.forEach(group => {
            let groupListItem = makeGroupListItem(group);
            this.list.appendChild(groupListItem);
        });
    },
    clear: function () {
        this.list.innerText = '';
    }
}


export {taskList, taskForm, groupForm, groupList}