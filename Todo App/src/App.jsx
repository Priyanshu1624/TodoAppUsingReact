import { useState } from 'react'
import './App.css'

function App() {

  const [Task, setTask] = useState([]);
  const [NewTask, setNewTask] = useState("");

  function handleNewTask(event){
      setNewTask(event.target.value);
  }
  function addTask(){
    if(NewTask.trim()!==""){
      setTask(t=>[...t,NewTask]);
      setNewTask("");
      console.log(Task);
    }
  }
  function deleteTask(index){
    const updatedTask=Task.filter((task,ind)=> ind!==index);
    setTask(updatedTask);
  }
  function moveUpTask(index){

    if(index>0){
      const updatedTask=[...Task];
      const task=updatedTask[index];
      updatedTask[index]=updatedTask[index-1];
      updatedTask[index-1]=task;
      setTask(updatedTask);
    }
    
  }

  function moveDownTask(index){

    if(index<Task.length-1){
      const updatedTask=[...Task];
      const task=updatedTask[index];
      updatedTask[index]=updatedTask[index+1];
      updatedTask[index+1]=task;
      setTask(updatedTask);
    }
    
  }
  return (
     <div className='Main'>
      <div className='TodoList'>
        <h1>To-Do List</h1>
 
        <input type="text" placeholder='Enter New Task' onChange={handleNewTask} value={NewTask}/>

        <button className='AddBtn' onClick={addTask}>Add Task</button>

        <ol>
          {Task.map((task,index) => 
            <li key={index}>
              <span className='Tasks'>{task}</span>
              <button className='DeleteBtn' onClick={()=> deleteTask(index)}>Delete Task</button>
              <button className='MoveUpBtn' onClick={()=>moveUpTask(index)}>👆🏻</button>
              <button className='MoveDownBtn' onClick={()=>moveDownTask(index)}>👇🏻</button>
            </li>
          )}
        </ol>
      </div>
     </div>

  )
}

export default App
