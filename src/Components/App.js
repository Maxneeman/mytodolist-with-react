import React, { useState } from 'react';
import {nanoid} from 'nanoid';
import './App.css';
import Todo from './Todo';
import Forms from './Forms';
import Buttonfilter from './Buttonfilter';



function App(props) {

  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    if(name.length <= 5){
      return false
    }
      setTasks([...tasks, newTask]);
    }

    
  function toggleTaskCompleted(id){
    const updatedTasks = tasks.map(task => {
      if(id === task.id){
        return {...task, completed: !task.completed}
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  function deleteTask(id){
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }  
  
  function editTask(id, newName){
    const editedTaskList = tasks.map(task => {
      if(id === task.id){
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }



    const taskList = tasks.map(task => (
            <Todo 
              name = {task.name} 
              completed = {task.completed} 
              id = {task.id} 
              key = {task.id} 
              toggleTaskCompleted = {toggleTaskCompleted}
              deleteTask = {deleteTask}
              editTask = {editTask}
              addTask = {addTask}

            />
    ) );

    const tasksNoun = taskList.length !== 1? 'tasks' : 'task';
    const headingText = `${taskList.length} ${tasksNoun} remain.`

    const filterList = props.btnFatures.map(task => (
            <Buttonfilter
              name = {task.name}
              ariaPressed = {task.arialPressed}
            />
    ));

    return (
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
          <Forms addTask = {addTask} />
        <div className="filters btn-group stack-exception">
          {filterList}
        </div>
        <h2 id="list-heading">
          {headingText}
        </h2>
        <ul
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >

          {taskList}

        </ul>
      </div>
    );
}



export default App;
