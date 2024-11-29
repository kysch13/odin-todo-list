import { todo } from "./todo";
import { makeTaskElem, makeGroupListItem, makeGroupTitleElem } from "./elements";
import { buildTaskForm, buildGroupForm } from "./forms";


const taskList = {
    main: document.getElementById('main'),
    render: function () {
        this.main.appendChild(makeGroupTitleElem(todo._activeGroup));
        todo._tasks.forEach(task => {
            if (task.group === todo._activeGroup.idNum || todo._activeGroup.idNum === 0) {
                let taskDiv = makeTaskElem(task);
                this.main.appendChild(taskDiv);
            }

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
            groupListItem.classList.add('group-list-item');
            if (group.idNum === todo._activeGroup.idNum) {
                groupListItem.classList.add('active-group');
            };
            this.list.appendChild(groupListItem);
        });
    },
    clear: function () {
        this.list.innerText = '';
    }
}


export {taskList, taskForm, groupForm, groupList}