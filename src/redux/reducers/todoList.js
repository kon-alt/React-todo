import {ADD_TODO, ALL_TODO, DELETE_TODO} from "../actionTypes";

const initTodo = {
    items: []
}

export const todoList = (state = initTodo, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                items: [...state.items, action.item]
            }
        case DELETE_TODO:
            return {
                ...state,
                items: [...state.items.filter(item => item !== action.item)]
            }
        case ALL_TODO:
            return {
                ...state,
                items: action.items
            }
        default:
            return state
    }
}
