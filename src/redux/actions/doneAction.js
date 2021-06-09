import {DONE, FILTER_DONE, NOT_DONE} from "../actionTypes";
import {filterTodo} from "../reducers/filterTodo";

export const doneAction = action => async dispatch => {

    if (action.done) {
        dispatch({type: DONE, item: action.item})
    } else {
        dispatch({type: NOT_DONE, item: action.item})
    }
}
