import sortDone from '../helpers/sortDone';
import { SHOW_ACTIVE, SHOW_ALL, SHOW_DONE } from './../constants/filterConstants'

export const selectTasks = (state) => state.items;

export const selectSortedTasks = (state) => {
    return Object.values(selectTasks(state)).sort(sortDone);
};

export const selectFilteredSortedTasks = (state, string) => {
    return state.filter(task => task.task.toLowerCase().startsWith(string.toString().toLowerCase()));
};

export const selectByFilter = (state, filer) => {
    if(filer === SHOW_ALL){
        return state;
    } else if(filer === SHOW_ACTIVE){
        return state.filter(task => task.done);
    } else {
        return state.filter(task => !task.task.done);
    }
};