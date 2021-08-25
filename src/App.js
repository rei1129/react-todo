import React, { useState } from 'react';

  const App =() =>{
    const Todolist =[
      {
        task: '',
    },
    ]
    const [todos, setTodo] = useState(Todolist);
    const [task,setTask] = useState('')

    const addNewTask = (event) => {
      setTask( event.target.value)
  }

  const Submit = (event) => {
      event.preventDefault()
      if(task === '') return
      setTodo(todos => [...todos,{task}])
      setTask('')
  }

  return (
    <div>
        <h1>ToDoリスト</h1>
        <form onSubmit={ Submit }>
        こちらに入力し、エンターを押してください : <input value={ task }  onChange={addNewTask}/>
        </form>
        <ul>
            { todos.map((todo, index) => (
            <li key={ index }>{ todo.task } </li>
            ))}
        </ul>
    </div>
  );
 }

 export default App;