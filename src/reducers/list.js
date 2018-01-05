import {ADD_ITEM, DONE_ITEM, REMOVE_ITEM} from '../constants/constants.js';

let initialSate = [];

export default function list(state = initialSate, action) {
    switch (action.type) {
        case ADD_ITEM: {
            return [ ...state, action.payload ];
        }
        case DONE_ITEM: {
            return state.filter((el, ind) => {
                el.key === action.payload ? el.status = !el.status : el.status = el.status;
                return el;
            });
        }
        case REMOVE_ITEM: {
            return state.filter((el, ind) => {
                if (el.key !== action.payload) {
                    return el;
                }
            });
        }
        default: {
            return state;
        }
    }
}