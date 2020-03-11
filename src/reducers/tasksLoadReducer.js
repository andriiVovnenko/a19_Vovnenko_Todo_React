import { GET_TASKS_FULFILLED, GET_TASKS_PENDING, GET_TASKS_REJECTED} from '../actionTypes';


export default (state = true, action) => {
  if (action.type === GET_TASKS_PENDING) return false;
  if (action.type === GET_TASKS_FULFILLED) return true;
  if (action.type === GET_TASKS_REJECTED) return true;
  return state;
}
