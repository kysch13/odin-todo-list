import "./fonts.css";
import "./styles.css";
import "./event-listeners.js";
import {todo} from "./todo.js";
import {groupForm, groupList, taskList, taskForm} from "./render.js";
import { submitGroupForm, submitTaskEdit, submitTaskForm} from "./forms.js";





taskList.render();
taskForm.render();
groupForm.render();



