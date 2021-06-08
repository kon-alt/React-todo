import {ADD_TODO, DELETE_TODO, INIT} from "../actionTypes";

const initTodo = {
    items: []
}

export const todoList = (state = initTodo, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                items: [...state.todo, action]
            }
        case DELETE_TODO:
            return {
                ...state,
                items: [...state.filter(item => !action)]
            }
        default:
            return state
    }
}
