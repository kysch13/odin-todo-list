import { todo } from "./todo";
import { makeTaskElem, makeGroupListItem, makeGroupTitleElem } from "./elements";
import { buildTaskForm, buildGroupForm } from "./forms";


const taskList = {
    main: document.getElementById('main'),
    title: document.getElementById('main-title'),
    render: function () {
        this.title.appendChild(makeGroupTitleElem(todo._activeGroup));
        taskForm.hide();
        todo._tasks.forEach(task => {
            if (task.group === todo._activeGroup.idNum || todo._activeGroup.idNum === 0) {
                let taskDiv = makeTaskElem(task);
                this.main.appendChild(taskDiv);
            }

        });
    },
    clear: function () {
        this.main.innerText = '';
        this.title.innerText = '';
    }
}

const taskForm = {
    container: document.getElementById('add-task-form'),
    render: function () {
        this.container.appendChild(buildTaskForm('add'));
    },
    edit: function (idNum) {
        this.container.appendChild(buildTaskForm('edit', idNum))
    },
    clear: function () {
        this.container.innerText = '';
    },
    show: function () {
        this.container.classList.add('active');
    },
    hide: function () {
        this.container.classList.remove('active');
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