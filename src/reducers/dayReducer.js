import {CHANGE_DAY} from "../constants/filterConstants";

const initState = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

export default (state = initState, action) => {
    switch (action.type) {
        case CHANGE_DAY: {
            const {payload} = action;
            if(payload === state) return null;
            return payload;
        }
        default: {
            return state;
        }
    }
};