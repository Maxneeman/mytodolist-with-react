import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

const btnFatures = [
  {name: 'All', arialPressed: true},
  {name: 'Active', arialPressed: false},
  {name: 'Completed', arialPressed: false},
]

ReactDOM.render(
  <React.StrictMode>
    <App tasks = {DATA} btnFatures = {btnFatures} />
  </React.StrictMode>,
  document.getElementById('root')
);


