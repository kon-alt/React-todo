import React, {useState} from 'react';
import {Button, ButtonGroup, Col, Container, Form, ListGroup, Row} from "react-bootstrap";
import ItemTodos from "../itemTodos";
import {useDispatch, useSelector} from "react-redux";
import {todoInputAction} from "../../redux/actions/todoInputAction";
import {todoActions} from "../../redux/actions/todoActions";

const Todo = () => {
    const dispatch = useDispatch()
    const {todo, todoList, filterTodo} = useSelector(state => state)
    const [error, setError] = useState('')

    const handleInputTodo = (e) => {
        const value = e.target.value;
        dispatch(todoInputAction(value))
        setError('')
    }

    const handleAddTodo = () => {
        if (todo.value !== '') {
            todo.value.length <= 10
                ? dispatch(todoActions({flag: 'add', item: todo.value}))
                : setError('Длинна заметки превыщает 10 символов')
        } else {
            setError('Введите заметку')
        }
        dispatch(todoInputAction(''))
    }

    return (
        <Container>
            <h1 className={'mt-5 head'}>
                Мои заметки
                <span className={'error'}>{error}</span>
            </h1>
            <Row className={'my-3'}>
                <Col xs={6} className="pt-4">
                    <Form.Group>
                        <Form.Control className="py-4" type="text" placeholder="Добавьте заметку"
                                      value={todo.value}
                                      onChange={(e) => handleInputTodo(e)}
                                      onKeyDown={(e) => handleInputTodo(e)}
                        />
                    </Form.Group>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="success" className={'mr-2'} onClick={() => handleAddTodo()}>Добавить
                            заметку</Button>
                    </ButtonGroup>
                </Col>
                <Col xs={6}>

                    <ListGroup>
                        <ItemTodos todo={filterTodo.items.length > 0 ? filterTodo.items : todoList.items}/>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Todo;
