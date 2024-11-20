const idTracker = (function () {
    let idTrack = 0;
    const idNum = function() {
        return idTrack++;
    }
    return {idNum};
})();

console.log(idTracker.idNum());

const taskBuilder = function (title, status, desc, due, priority) {
    let idNum = idTracker.idNum();
    title = title;
    status = status;
    desc = desc;
    due = new Date(due);
    priority = priority;
   return {idNum, title, status, desc, due, priority};
}

export default taskBuilder;