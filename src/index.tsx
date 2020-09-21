import React from 'react';
import ReactDOM from 'react-dom';
import { TodosContextProvider } from './contexts/TodosContext';
import './index.css';
import TodosApp from './screens/todo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <TodosContextProvider>
      <TodosApp />
    </TodosContextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
