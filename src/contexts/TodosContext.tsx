import React, { ReactNode, useContext, useEffect, useReducer } from "react";
import { ActionTodoType, ActionType, initialState, Task, taskReducer } from "../model/Task";

const TodosStateContext = React.createContext(initialState);
const TodosDispatchContext = React.createContext((() => 0) as React.Dispatch<ActionType>);

type ContextProps = {
    children: ReactNode
}

export const TodosContextProvider = ({ children }: ContextProps ) => {

    const [state, dispatch] = useReducer(taskReducer, []);

    useEffect(() => {
        const rawData = localStorage.getItem('data');
        dispatch({ type: ActionTodoType.Reset, payload: JSON.parse(rawData ? rawData : "")})
    }, []);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(state));
    }, [state]);

    return (
        <TodosDispatchContext.Provider value={dispatch}>
            <TodosStateContext.Provider value={state} >
                {children}
            </TodosStateContext.Provider>
        </TodosDispatchContext.Provider>
    )
}

export const useTodosDispatch = () => useContext(TodosDispatchContext);
export const useGlobalState = () => useContext(TodosStateContext);