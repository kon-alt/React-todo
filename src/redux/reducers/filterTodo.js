import {FILTER_DONE, FILTER_NOT_DONE} from "../actionTypes";

const init = {
    items: []
}
export const filterTodo = (state = init, action) => {
    switch (action.type) {
        case FILTER_DONE:
            return {
                ...state,
                items: action.items
            }
        case FILTER_NOT_DONE:
            return {
                ...state,
                items: action.items
            }
        default:
            return state
    }
}
