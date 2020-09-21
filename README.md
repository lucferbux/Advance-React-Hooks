# Expense Tracker
> Advanced Hooks Tutorial

## Intro

This project is created to learn some of the uses of [React Hooks](https://reactjs.org/docs/hooks-intro.html). We're gonna follow the tutorial made by the incredible **Harry Wolff** about this topic. You can check the video [here](https://www.youtube.com/watch?v=YKmiLcXiMMo). The tutorial is modified to introduce Typescript.


## Hooks

### useReducer
Alternative to **useState**. Accepts a reducer of type `(state, action) => newState, `and returns the current state paired with a dispatch method.

**useReducer** is usually preferable to **useState** when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

**useReducer** also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

```
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

### useContext
Accepts a context object (value returnet from `React.createContext`) and returns the current context value for that context.

When the nearest `<MyContext.Provider>`above the component updates, this Hook will trigger a render with the latest context **value** passed to that **MyContext** provider.


```
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```

### useEffect
Accepts a function that contains imperative, possibly effectful code.

Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component (referred to as React’s render phase). Doing so will lead to confusing bugs and inconsistencies in the UI.

This hook is used to control the lifecycle of the component, you can use **multiple** useEffects in your component, controlling different renders and states.

```
useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  },
  [props.source],
);
```

### useRef
```const refContainer = useRef(initialValue);````

useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

A common use case is to access a child imperatively:

```
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with <div ref={myRef} />, React will set its .current property to the corresponding DOM node whenever that node changes.


## React optimization

React creates a **Virtual DOM** in order to re-render the DOM only when is mandatory.
A Component re-render can be triggered in a number of ways, a couple of which are:

* Change in the component' state

* Change in the component's props

In **Class Components** the lifecycle is quite clear. The [React Tutorial](https://reactjs.org/docs/hello-world.html) is pretty straightforward talking about all the states and renders.

In smaller examples, optimization is almost invisible, as  reload times are very small. But in big projects, with components with many more children, one miss-programmed render could make all the component and its children would reload.

That's why is important to listen to all the values that need to change in order to avoid useless renders.