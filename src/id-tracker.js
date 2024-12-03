import { dataHandler } from "./storage";

const idTracker = (function () {
    let taskIDTrack = dataHandler.loadId('taskIDTrack');
    let groupIDTrack = dataHandler.loadId('groupIDTrack');
    const taskID = function() {
        return taskIDTrack++;
    }
    const groupID = function() {
        return groupIDTrack++;
    }
    return {taskID, groupID};
})();

export {idTracker};