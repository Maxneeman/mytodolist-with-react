import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';

const DATA = [
  {name : 'Eat', completed : true,  id : 'todo-1'},
  {name : 'Sleep', completed : false, id : 'todo-2'},
  {name : 'Repeat', completed : false, id : 'todo-3'}
]

ReactDOM.render(
  <React.StrictMode>
    <App tasks = {DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);

