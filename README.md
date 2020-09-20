# Expense Tracker
> Advanced Hooks Tutorial

## Intro

This project is created to learn some of the uses of [React Hooks](https://reactjs.org/docs/hooks-intro.html). We're gonna follow the tutorial made by the incredible **Harry Wolff** about this topic. You can check the video [here](https://www.youtube.com/watch?v=YKmiLcXiMMo).


## Hooks

### useReducer

### useContext

### useEffects

### useRef

## React optimization

React creates a **Virtual DOM** in order to re-render the DOM only when is mandatory.
A Component re-render can be triggered in a number of ways, a couple of which are:

* Change in the component' state

* Change in the component's props

In **Class Components** the lifecycle is quite clear. The [React Tutorial](https://reactjs.org/docs/hello-world.html) is pretty straightforward talking about all the states and renders.

In smaller examples, optimization is almost invisible, as  reload times are very small. But in big projects, with components with many more children, one miss-programmed render could make all the component and its children would reload.