import "./todo.scss";
import React from "react";
import { ActionTodoType } from "../model/Task";
import TodoList from "../components/TodoList/TodoList";
import { useGlobalState, useTodosDispatch } from "../contexts/TodosContext";

const TodosApp = () => {
    const dispatch = useTodosDispatch();
    const stateTask = useGlobalState();

    return (
        <div>
            <h1>Todos App</h1>
            <button className="todos-button" onClick={() => dispatch({ type: ActionTodoType.Add })}>New TODO</button>
            <TodoList items={stateTask} />
        </div>
    );
};

export default TodosApp;
