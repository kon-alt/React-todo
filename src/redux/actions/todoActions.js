import {ADD_TODO, ALL_TODO, DELETE_TODO} from "../actionTypes";

export const todoActions = action => async dispatch => {
    if (action.flag === 'add') {
        dispatch({type: ADD_TODO, item: action.item})
    }
    if (action.flag === 'delete') {
        dispatch({type: DELETE_TODO, item: action.item})
    }
    if (action.flag === 'all') {
        dispatch({type: ALL_TODO, items: action.items})
    }
}
