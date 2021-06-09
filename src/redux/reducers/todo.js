import {TODO} from "../actionTypes";

export const todo = (state = {value: ''}, action) => {
    switch (action.type) {
        case TODO:
            return {...state, value: action.value}
        default:
            return state
    }
}
