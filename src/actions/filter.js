import {NEW_FILTER} from '../constants/constants.js';

export function newFilter(status, id) {
    return {
        type: NEW_FILTER,
        payload: {
            status: status,
            id: id
        }
    };
}