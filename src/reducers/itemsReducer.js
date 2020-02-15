import { TOGGLE, ADD_TASK, DELETE_ALL_CHECKED, DELETE_TASK, FILTER_TASK } from '../actionTypes';

const initState = {
  1: {task:'Drink', done: false, show: true, day: 1, id:1},
  2: {task:'Eat', done: false, show: true, day: 2, id:2},
  3: {task:'Coffee', done: true, show: true, day: 3, id:3},
  4: {task:'Coffee3', done: true, show: true, day: 4, id:4},
  5: {task:'Coffee2', done: true, show: true, day: 5, id:5} ,
  6: {task:'Coffee1', done: true, show: true, day: 6, id:6},
  7: {task:'CoffeeSun', done: true, show: true, day: 0, id:7},
};

export default (state = {...initState}, action) => {
  switch (action.type) {
    case TOGGLE: {
      const {payload} = action;
      return {
        ...state,
        [payload]: {...state[payload], done: !state[payload].done},
      }
    }

    case ADD_TASK: {
      const {task, dayToShow, id} = action.payload;
      const newTasks = {...state };
      Object.values(newTasks).forEach(item => item.show = true);
      return {
        ...newTasks,
        [id]: {task, done: false, show: true, day: dayToShow, id}
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
