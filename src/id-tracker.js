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

export {idTracker};