import {FILTER_DONE, FILTER_NOT_DONE} from "../actionTypes";

export const filterAction = action => async dispatch => {
    if (action.flag === 'done') {
        dispatch({type: FILTER_DONE, items: action.items})
    }
    if (action.flag === 'not-done') {
        dispatch({type: FILTER_NOT_DONE, items: action.items})
    }
}
