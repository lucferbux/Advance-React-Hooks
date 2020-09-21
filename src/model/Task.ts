export type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export const initialState: Task[] = [];

export enum ActionTodoType {
  Add = "ADD",
  Remove = "REMOVE",
  Complete = "COMPLETE",
  Reset = "RESET",
  TextInput = "TEXTINPUT"
}

export type ActionType =
  | { type: ActionTodoType.Add }
  | { type: ActionTodoType.Reset, payload: Task[] }
  | { type: ActionTodoType.Remove, payload: number }
  | { type: ActionTodoType.Complete, payload: number }
  | { type: ActionTodoType.TextInput, payload: number, text: string };


export const taskReducer = (state: Task[] | any, action: ActionType) => {

  switch (action.type) {
    case ActionTodoType.Add: {
      const newTask: Task = {
        id: Date.now(),
        text: "",
        completed: false,
      };
      return [...state, newTask];
    }

    case ActionTodoType.Reset: {
      return action.payload;
    }

    case ActionTodoType.Remove: {
      return state.filter((item: Task) => item.id !== action.payload);
    }

    case ActionTodoType.Complete: {
      return state.map( (item: Task) => {
        if(item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    }

    case ActionTodoType.TextInput: {
      return state.map( (item: Task) => {
        if(item.id === action.payload) {
          return {
            ...item,
            text: action.text
          }
        } else {
          return item
        }
      })
    }

    default:
      break;
  }
};
