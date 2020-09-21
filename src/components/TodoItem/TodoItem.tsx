
import React from "react";
import { useTodosDispatch } from "../../contexts/TodosContext";
import { ActionTodoType, Task } from "../../model/Task";
import './TodoItem.scss';


interface TodoItemProps {
    item: Task
}


const TodoItem = (props: TodoItemProps) => {
    const taskDispatch = useTodosDispatch();

    return (<div className="item">

        <input type="checkbox" defaultChecked={props.item.completed} onChange={() => taskDispatch({ type: ActionTodoType.Complete, payload: props.item.id })} />
        <input className="input-text" type="text" defaultValue={props.item.text} onChange={(e) => taskDispatch( { type: ActionTodoType.TextInput, payload: props.item.id, text: e.target.value})} />
        <button className="delete" onClick={() => taskDispatch({ type: ActionTodoType.Remove, payload: props.item.id })}>Delete</button>

    </div>)
}

export default TodoItem;