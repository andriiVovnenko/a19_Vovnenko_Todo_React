import {ADD_TASK, DELETE_ALL_CHECKED, DELETE_TASK, TOGGLE} from '../actionTypes';
import {CHANGE_DAY, CHANGE_STRING, SHOW_ACTIVE, SHOW_ALL, SHOW_DONE} from "../constants/filterConstants";

export const addTaskCreator = ({task, day, id}) => ({type: ADD_TASK, payload: {task, day, id}});
export const refreshStringCreator = () => ({type: CHANGE_STRING, payload: '' });
export const toogleTaskCreator = (id) => ({ type: TOGGLE, payload: id });
export const deleteTaskCreator = (e) => ({ type: DELETE_TASK, payload: e.target.value });
export const deleteCheckedCreated = (day) => ({type: DELETE_ALL_CHECKED, payload : day });
export const changeDayCreator = (day) => ({type: CHANGE_DAY, payload: day});
export const changeFilterShowAll = () => ({type: SHOW_ALL});
export const changeFilterShowDone = () => ({type: SHOW_DONE});
export const changeFilterShowActive = () => ({type: SHOW_ACTIVE});
export const getTasks = () => ({type: 'getTasks'});
