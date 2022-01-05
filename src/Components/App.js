import './App.css';
import Todo from './Todo';
import Forms from './Forms';
import Buttonfilter from './Buttonfilter';



function App(props) {

  const task = props.tasks;
  const taskList = task.map(task => (
    <Todo 
    id = {task.id}
    name = {task.name}
    completed = {task.completed}
    />
  ));

  const button = props.btn;
  const btnvlues = button.map(btn => (
        <Buttonfilter 
          name = {btn.name}
          pressed = {btn.pressed}
        />
  ))

  function addTask(name){
    alert(name);
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
        <Forms addTask = {addTask} />
      <div className="filters btn-group stack-exception">

      {btnvlues}
      </div>
      <h2 id="list-heading">
        3 tasks remaining
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
