import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTasks from './components/AddTasks';


function App() {

  const [tasks, setTasks ] = useState( [
    { 
        id: 1,
        text: 'Doctors Appoinment',
        day: 'feb 5th at 2:30pm',
        reminder : true,
    },
    {

        id: 2,
        text: 'Meeting at school',
        day: 'feb 6th at 1:30pm',
        reminder : true,
    },
    {

        id: 3,
        text: 'Food Shopping',
        day: 'feb 5th at 2:30pm',
        reminder : false,

    }

])

// Reminder
const toggleReminder = (id) => {

  setTasks(
    tasks.map((task)=> 
    task.id === id ? { ...task, reminder:
     !task.reminder} : task
    )
  )
  console.log("Reminder pressed")
}

//Add Task

const addTask = (task)=> {
  console.log(task)


}


//delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id ))
  console.log("Delete pressed",id);

}


    return ( 
    <div className = "container" >
        <Header />
        <AddTasks onAdd={addTask} />
        { tasks.length > 0 ? 
          <Tasks tasks={tasks} onToggle ={toggleReminder} onDelete={deleteTask} /> : "No Tasks To Show"}
        </div>
    );
}

export default App;