import {CHANGE_DAY} from "../constants/filterConstants";

export default (state = new Date().getDay() - 1, action) => {
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