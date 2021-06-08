import {ADD_TODO} from "../actionTypes";

export const addTodoAction = action => {
    return {
        type: ADD_TODO,
        item: action
    }
}
