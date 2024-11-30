import { format } from "date-fns";
import { startOfToday } from "date-fns";
import { differenceInDays } from "date-fns";


const dates = (function (){
    const currentDate = startOfToday();
    const currentDateFormatted = format(currentDate, 'yyyy-MM-dd');
    return { currentDate, currentDateFormatted };
})();

function formatSimpleDate (due) {
    const dateObj = due;
    return format(dateObj, 'yyyy-MM-dd');
}

function formatDueDate (due) {
    const daysLeft = differenceInDays(
        due,
        dates.currentDate
    )
    if (daysLeft > 3) {
        return `Due ${format(due, 'MMMM do, yyyy')}`;
    } else if (daysLeft > 1 && daysLeft <= 3) {
        return `Due in ${daysLeft} days`;
    } else if (daysLeft === 0) {
        return `Due today`;
    } else if (daysLeft === 1) {
        return `Due tomorrow`;
    } else if (daysLeft === -1) {
       return `Due yesterday`;
    } else if (daysLeft < -1) {
        return `Due ${Math.abs(daysLeft)} days ago`
    }
}

function dateColorClass (due) {
    const daysLeft = differenceInDays(
        due,
        dates.currentDate
    )
    if (daysLeft < 0) {
        return 'task-overdue';
    } else if (daysLeft === 0) {
        return 'task-due-today';
    } else if (daysLeft > 0 && daysLeft <= 3) {
        return 'task-due-soon';
    }
}

export {dates, formatDueDate, dateColorClass, formatSimpleDate};

