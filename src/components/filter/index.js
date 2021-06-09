import React, {useEffect, useMemo, useState} from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

import './style.scss';
import {ALL_TODO} from "../../redux/actionTypes";
import {filterAction} from "../../redux/actions/filterAction";

const Filter = () => {
        const dispatch = useDispatch()
        const {todoList, doneTodo} = useSelector(state => state)
        const [active, setActive] = useState('Все')

        useEffect(() => {
            setActive('Все')
        }, [todoList])

        const handleToggled = async (type) => {
            let arr = []
            if (type === 'all') {
                setActive('Все')
                dispatch({type: ALL_TODO, items: todoList.items})
                dispatch(filterAction({flag: 'done', items: []}))
            }
            if (type === 'done') {
                setActive('Выполненные')
                if (todoList.items.length === 1) {
                    dispatch(filterAction({flag: 'done', items: []}))
                }
                for await (const i of todoList.items) {
                    if (doneTodo.items.includes(i)) {
                        arr = [...arr, i]
                    }
                }
                dispatch(filterAction({flag: 'done', items: arr}))
            }
            if (type === 'not-done') {
                setActive('Не выполненные')
                if (todoList.items.length === 1) {
                    dispatch(filterAction({flag: 'not-done', items: []}))
                }
                for await (const i of todoList.items) {
                    if (!doneTodo.items.includes(i)) {
                        arr = [...arr, i]
                    }
                }
                dispatch(filterAction({flag: 'not-done', items: arr}))
            }
        }

        return (
            <div className="filter mb-2">
                <div className="filter__header">
                    <span className="filter__title">Актуальные заметки</span>
                    <div className="filter__counter">
                        <span className="filter__counter-text">выполненно {doneTodo.items.length}</span>
                        <span
                            className="filter__counter-text">не выполненно {todoList.items.length - doneTodo.items.length}</span>
                    </div>
                </div>

                <ButtonGroup aria-label="Basic example" size="sm" className="py-2">
                    <Button
                        variant={active === 'Все' ? "primary" : "secondary"}
                        onClick={() => handleToggled('all')}
                    >Все</Button>
                    <Button
                        variant={active === 'Выполненные' ? "primary" : "secondary"}
                        onClick={() => handleToggled('done')}
                        disabled={todoList.items.length <= 1 ? true : false}
                    >Выполненные</Button>
                    <Button
                        variant={active === 'Не выполненные' ? "primary" : "secondary"}
                        onClick={() => handleToggled('not-done')}
                        disabled={todoList.items.length <= 1 ? true : false}
                    >Не выполненные</Button>
                </ButtonGroup>
            </div>
        );
    }
;

export default Filter;
