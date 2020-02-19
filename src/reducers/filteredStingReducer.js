import {CHANGE_STRING} from "../constants/filterConstants";

export default (state = '', action ) => {
    switch (action.type) {
        case CHANGE_STRING: {
            const {payload} = action;
            return payload
        }
        default: {
            return state;
        }
    }
}