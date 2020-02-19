import sortDone from '../helpers/sortDone';
import { SHOW_ACTIVE, SHOW_ALL } from './../constants/filterConstants'

export const selectTasks = (state) => state.items;
export const selectFilter = (state) => state.filter;
export const selectUserInput = (state) => state.userInput;

export const selectSortedTasks = (state) => {
    return Object.values(selectTasks(state)).sort(sortDone);
};

export const selectFilteredSortedTasks = (tasks, string) => {
    if (!string) return state;
    return tasks.filter(task => task.task.toLowerCase().startsWith(string.toString().toLowerCase()));
};

export const selectByDoneFilter = (state) => {
    const tasks = selectSortedTasks(state);
    const filter = selectFilter(state);
    if (typeof filter === 'undefined') return tasks;
    return tasks.filter(task => task.done === filter);

};

export const selectByFilter = (state) => selectFilteredSortedTasks(
    selectByDoneFilter(state),
    selectUserInput(state),
);
