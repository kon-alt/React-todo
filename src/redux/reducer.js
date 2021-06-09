import {combineReducers} from 'redux'
import {todo} from "./reducers/todo";
import {todoList} from "./reducers/todoList";
import {doneTodo} from "./reducers/doneTodo";
import {filterTodo} from "./reducers/filterTodo";

const reducer = combineReducers({
    todo,
    todoList,
    doneTodo,
    filterTodo
})
export default reducer
