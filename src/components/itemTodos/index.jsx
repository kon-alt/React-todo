import React, {useMemo} from 'react';
import {Button, ButtonGroup, ListGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {doneAction} from "../../redux/actions/doneAction";
import Filter from "../filter";
import {todoActions} from "../../redux/actions/todoActions";

const ItemTodos = ({todo = []}) => {
    const dispatch = useDispatch()
    const {doneTodo, filterTodo} = useSelector(state => state);


    const handleDoneTodo = (item) => {
        if (!doneTodo.items.includes(item)) {
            dispatch(doneAction({done: true, item: item}))

        } else {
            dispatch(doneAction({done: false, item: item}))
        }
    }

    const handleDelete = (item) => {
        if (doneTodo.items.includes(item)) {
            dispatch(doneAction({done: false, item: item}))
        }
        dispatch(todoActions({flag: 'delete', item: item}))
    }

    const renderTodo = useMemo(() => {
            return todo.map((item, idx) => <ListGroup.Item key={`${item}-${idx}`} className="py-2">
                <div className="list-group-item__body">
                    {item}
                    <ButtonGroup aria-label="Basic example" size="sm">
                        <Button
                            variant={!doneTodo.items.includes(item) ? 'secondary' : 'success'}
                            className="mr-2"
                            onClick={() => handleDoneTodo(item)}
                        >
                            {
                                !doneTodo.items.includes(item)
                                    ? 'Выполнить'
                                    : 'Выполнено'
                            }
                        </Button>
                        <Button variant="danger" onClick={() => handleDelete(item)}>Удалить</Button>
                    </ButtonGroup>
                </div>

            </ListGroup.Item>)
        }, [todo, doneTodo, filterTodo]
    )
    return (
        <div className="todo p-3"> {
            todo.length > 0
                ? <>
                    <Filter/>
                    {renderTodo}
                </>
                : <span>Добавьте заметку</span>
        }

        </div>
    );
};

export default ItemTodos;
