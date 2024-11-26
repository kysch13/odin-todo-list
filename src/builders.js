import { formatDueDate } from "./dates";

const idTracker = (function () {
    let taskIDTrack = 1;
    let groupIDTrack = 1;
    const taskID = function() {
        return taskIDTrack++;
    }
    const groupID = function() {
        return groupIDTrack++;
    }
    return {taskID, groupID};
})();

const groupBuilder = function (title) {
    let idNum = idTracker.groupID();
    title = title;
    return {idNum, title};
}

const taskBuilder = function (title, complete, desc, due, priority) {
    title;
    complete;
    desc;
    priority;
    due;
    let idNum = idTracker.taskID();
   return {idNum, title, complete, desc, due, priority};
}



export {taskBuilder, groupBuilder};