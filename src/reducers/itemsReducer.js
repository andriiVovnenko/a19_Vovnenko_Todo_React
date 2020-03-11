import {TOGGLE, ADD_TASK, DELETE_ALL_CHECKED, DELETE_TASK, CHANGE_TASK, GET_TASKS_FULFILLED, GET_TASKS_REJECTED} from '../actionTypes';

const initState = {};

  export default (state = initState, action) => {
    switch (action.type) {
      case (GET_TASKS_FULFILLED): {
        return action.payload;
      }
      case CHANGE_TASK: {
        const {id, textTask} = action.payload;
        return {
          ...state,
          [id]: { ...state[id], task:textTask, done: !state[id].done }
        }
      }
      case 'getTasks': {
        return {
          ...initState,
        }
      }
      case TOGGLE: {
        const {payload} = action;
        return {
          ...state,
          [payload]: {...state[payload], done: !state[payload].done},
        }
      }

      case ADD_TASK: {
        const {task, day, id} = action.payload;
        const newTasks = {...state };
        Object.values(newTasks).forEach(item => item.show = true);
        return {
          ...newTasks,
          [id]: {task, done: false, show: true, day, id}
        };
      }

      case DELETE_TASK: {
        const {payload} = action;
        const newTasks = { ...state };
        delete newTasks[payload];
        return {
          ...newTasks,
        };
      }

      case DELETE_ALL_CHECKED: {
        const { payload } = action;
        const newTasks = { ...state };
        Object.values(newTasks).forEach(task => {
          if (task.day !== payload || task.done !== true) return;
          delete newTasks[task.id];
        });
        return {
          ...newTasks,
        };
      }
    }
    return state;
  }
