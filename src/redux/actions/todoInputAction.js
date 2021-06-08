import {TODO} from "../actionTypes";

export const todoInputAction = action => {
    return{
        type: TODO,
        value: action
    }
}
