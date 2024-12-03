import "./fonts.css";
import "./styles.css";
import "./event-listeners.js";
import {todo} from "./todo.js";
import {groupForm, groupList, taskList, taskForm, buttons} from "./render.js";
import { submitGroupForm, submitTaskEdit, submitTaskForm} from "./forms.js";
import { storageAvailable, storage, dataHandler } from "./storage.js";



todo.loadTasks();
todo.loadGroups();
taskList.render();
groupList.render();
buttons.render();

