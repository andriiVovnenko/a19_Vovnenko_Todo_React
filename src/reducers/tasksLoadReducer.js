import { GET_TASKS_FULFILLED, GET_TASKS_PENDINGD } from '../actionTypes';


export default (state = true, action) => {
  if (action.type === GET_TASKS_PENDINGD) return false;
  if (action.type === GET_TASKS_FULFILLED) return true;
  return state;
}
