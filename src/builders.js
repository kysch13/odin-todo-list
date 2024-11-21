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

const taskBuilder = function (title, status, desc, due, priority) {
    let idNum = idTracker.taskID();
    title = title;
    status = status;
    desc = desc;
    due = new Date(due);
    priority = priority;
   return {idNum, title, status, desc, due, priority};
}

export {taskBuilder, groupBuilder};