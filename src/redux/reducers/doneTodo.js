import {DONE, NOT_DONE} from "../actionTypes";

const initDoneTodo = {
    items: []
}
export const doneTodo = (state = initDoneTodo, action) => {
    switch (action.type) {
        case DONE:
            return {
                ...state,
                items: [...state.items, action.item]
            }
        case NOT_DONE:
            return {
                ...state,
                items: [...state.items.filter(item => item !== action.item)]
            }
        default:
            return state
    }
}
