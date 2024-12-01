import { todo } from "./todo";
import { makeTaskElem, makeGroupListItem, makeGroupTitleElem, makeElem, makeAddButton } from "./elements";
import { buildTaskForm, buildGroupForm } from "./forms";
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faInbox } from '@fortawesome/free-solid-svg-icons';



const taskList = {
    main: document.getElementById('main'),
    title: document.getElementById('main-title'),
    render: function () {
        // If group is all tasks, add inbox icon
        if (todo._activeGroup.idNum === 0) {
            const inboxIcon = icon(faInbox);
            Array.from(inboxIcon.node).map((n) => this.title.appendChild(n));
        }
        const mainTitle = makeGroupTitleElem(todo._activeGroup);
        this.title.appendChild(mainTitle);
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
    },
    show: function () {
        this.container.classList.add('active');
    },
    hide: function () {
        this.container.classList.remove('active');
    }
}

const groupList = {
    list: document.getElementById('group-list'),
    render: function () {
        groupForm.hide();
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

const buttons = {
    newTaskBtnCont: document.getElementById('new-task-btn-cont'),
    newGroupBtnCont: document.getElementById('new-group-btn-cont'),
    render: function () {
        this.newTaskBtnCont.appendChild(makeAddButton('add-new-task', 'Add Task'));
        this.newGroupBtnCont.appendChild(makeAddButton('add-new-group', 'Add List'));
    }
    
}




export {taskList, taskForm, groupForm, groupList, buttons}