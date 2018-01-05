import {ADD_ITEM} from '../constants/constants.js';

export function editList(actionType, id) {
    return {
        type: actionType,
        payload: id
    };
}

export function addItem(val, size) {
    return {
        type: ADD_ITEM,
        payload: {
            status: true,
            text: val,
            key: size
        }
    };
}