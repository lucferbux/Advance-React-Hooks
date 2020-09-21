
import React from "react";
import { Task } from "../../model/Task";
import TodoItem from "../TodoItem/TodoItem";


interface TodoListProps {
    items: Task[] | any
}


const TodoList = (props: TodoListProps) => {

    return props.items.map((item: Task) => 
        <TodoItem key={item.id} item={item} />
    );
}

export default TodoList;