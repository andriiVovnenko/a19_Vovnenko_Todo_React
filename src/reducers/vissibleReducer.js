import { SHOW_ACTIVE, SHOW_ALL, SHOW_DONE } from './../constants/filterConstants'

const initVissile = SHOW_ALL;

export default (state = initVissile, action) => {
    switch (action.type) {
        case SHOW_ALL: {
            return SHOW_ALL;
        }

        case SHOW_ACTIVE: {
            return SHOW_ACTIVE;
        }

        case SHOW_DONE: {
            return SHOW_DONE;
        }
        default: return state;
    }
    return state;
}