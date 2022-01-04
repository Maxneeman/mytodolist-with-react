import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';

const DATA = [
  {name : 'Eat', completed : true,  id : 'todo-1'},
  {name : 'Sleep', completed : false, id : 'todo-2'},
  {name : 'Repeat', completed : false, id : 'todo-3'}
]

const btnValues = [
  {name: 'All', pressed : 'true' },
  {name: 'Active', pressed : 'false' },
  {name: 'Completed', pressed : 'false' }
]

ReactDOM.render(
  <React.StrictMode>
    <App tasks = {DATA} btn = {btnValues} />
  </React.StrictMode>,
  document.getElementById('root')
);

