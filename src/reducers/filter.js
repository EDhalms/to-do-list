import {NEW_FILTER} from '../constants/constants.js';

let initialSate = {
    status: null,
    id: null
};

export default function list(state = initialSate, action) {
    switch (action.type) {
        case NEW_FILTER: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}