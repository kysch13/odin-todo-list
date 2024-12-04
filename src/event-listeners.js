import {todo} from "./todo.js";
import {groupForm, groupList, taskList, taskForm, taskDetails} from "./render.js";
import { submitGroupForm, submitTaskEdit, submitTaskForm} from "./forms.js";

const pageElements = (function (){
    const main = document.getElementById('main');
    const mainHeader = document.getElementById('main-header');
    const sidebar = document.getElementById('sidebar');
    const formCont = document.getElementById('add-task-form');
    const modals = document.getElementById('modals');
    return {main, mainHeader, sidebar, formCont, modals};
})();

pageElements.main.addEventListener('click', (e) => {
    let elem = e.target;
    if (elem.classList.contains('task-delete')){
        todo.deleteTask(Number(elem.dataset.taskId));
        taskList.clear();
        taskList.render();
    }

    if (elem.classList.contains('task-edit')){
        taskForm.clear();
        taskForm.edit(Number(elem.dataset.taskId));
        taskForm.show();
    }

    if (elem.classList.contains('task-details')){
        taskDetails.clear();
        taskDetails.render(Number(elem.dataset.taskId));
        taskDetails.show();
    }

    if (elem.classList.contains('task-status-checkbox')){
        todo.changeTaskStatus(Number(elem.dataset.taskId));
        taskList.clear();
        taskList.render();
    }

});

pageElements.sidebar.addEventListener('click', (e) => {
    let elem = e.target;
    if (elem.id === 'add-new-task-btn') {
        submitTaskForm();
    }
    if (elem.id === 'save-task-btn') {
        submitTaskEdit(Number(elem.dataset.taskId));
    }
    if (elem.id === 'add-new-group-btn') {
        submitGroupForm();
        taskList.clear();
        taskList.render();
        groupList.clear();
        groupList.render();
        groupForm.clear();
    }
    if (elem.classList.contains('group-list-item')) {
        todo.setActiveGroup(Number(elem.dataset.groupId));
        taskList.clear();
        taskList.render();
        groupList.clear();
        groupList.render();
    }
    if (elem.id === 'all-tasks') {
        todo.setActiveGroup(0);
        taskList.clear();
        taskList.render();
        groupList.clear();
        groupList.render();
    }
    if (elem.id === 'add-task-close' || elem.id === 'add-task-form') {
        taskForm.hide();
        taskForm.clear();
    }
    if (elem.id === 'add-group-close' || elem.id === 'add-group-form') {
        groupForm.hide();
        groupForm.clear();
    }
    if (elem.id === 'add-new-group') {
        groupForm.render();
        groupForm.show();
    }
});


pageElements.mainHeader.addEventListener('click', (e) => {
    if (e.target.id === 'add-new-task'){
        taskForm.render();
        taskForm.show();
    }
});

pageElements.modals.addEventListener('click', (e) => {
    if (e.target.id === 'modals' || e.target.id === 'close-details') {
        taskDetails.hide();
        taskDetails.clear();
    }
})
