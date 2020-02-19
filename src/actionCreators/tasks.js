import { ADD_TASK } from '../actionTypes';

export const addTaskCreator = ({task, dayToShow, id}) => ({type: ADD_TASK, payload: {task, dayToShow, id}});