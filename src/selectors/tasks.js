import sortDone from '../helpers/sortDone';
import { SHOW_ACTIVE, SHOW_ALL, SHOW_DONE } from './../constants/filterConstants'

export const selectTasks = (state) => state.items;
export const selectFilteredString = (state) => state.filteredString;
export const selectFilterType = (state) => state.filter;
export const selectDay = (state) => state.day;

export const selectByDay = (state) => {
    const tasks = selectTasks(state);
    const day = selectDay(state);
    const filter = selectFilterType(state);
    return selectByFilter({
        tasks: Object.values(tasks).filter(task => task.day === day),
        filter
    }).sort(sortDone);
};

export const selectSortedTasks = (state) => {
    return Object.values(selectTasks(state)).sort(sortDone);
};

export const selectFilteredSortedTasks = ({ tasks, state }) => {
    const filter = selectFilteredString(state);
    return tasks.filter(task => task.task.toLowerCase().startsWith(filter.toString().toLowerCase()));
};

export const selectByFilter = ({tasks, filter}) => {
    if(filter === SHOW_ALL){
        return tasks;
    } else if(filter === SHOW_ACTIVE){
        return tasks.filter(task => !task.done);
    } else {
        return tasks.filter(task => task.done);
    }
};
