import React, {useState, useEffect} from 'react';

import Header from "./Header";
import TasksCount from "./TasksCount";
import Tasks from "./Tasks";
import TaskAddForm from "./TaskAddForm";
import axios from "axios";


function Todo() {
  const [tasks, setTasks] = useState([]);
  const [priority, setPriority] = useState([]);
  const [tasksCount, setTasksCount] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/tasks').then(({data}) => {
      setTasks(data);
    });
    axios.get('http://localhost:3001/priorities').then(({data}) => {
      setPriority(data);
    });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/tasks').then(({data}) => {
      setTasksCount({
        total: data.length,
        done: data.filter(item => item.completed === true).length,
        inProgress: data.filter(item => item.completed === false).length
      });
    });
  }, [tasks])

    const addTask = (userInput) => {
    if (userInput) {
      axios.post('http://localhost:3001/tasks', {
        id: Math.random().toString(36).substr(2, 9),
        completed: false,
        text: userInput,
        date: new Date().toDateString().split(' ').splice(1,2).join(' '),
        priorityId: 1
      }).then(({data}) => {
        const newTask = {
          id: data.id,
          competed: data.completed,
          text: data.text,
          date: data.date,
          priorityId: data.priorityId
        };
        setTasks([...tasks, newTask]);
      })
    }
  }

  const removeTask = (id) => {
    axios.delete('http://localhost:3001/tasks/' + id).then(() => {
      setTasks([...tasks.filter((item) => item.id !== id)])
    });
  }

  return (
    <>
      <Header/>
      <TasksCount count={tasksCount} />
      <TaskAddForm addTask={addTask}/>
      {(tasks.length) ? (
        <Tasks tasks={tasks} priority={priority} removeTask={removeTask}/>
      ) : (
        'Loading...'
      )}
      <button onClick={() => console.log(tasksCount)}>CHECKER</button>
    </>
  );
}

export default Todo;