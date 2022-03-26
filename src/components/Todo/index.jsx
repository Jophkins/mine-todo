import React, { useState, useEffect } from 'react';

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

    axios.get('http://localhost:3001/tasks?_expand=priority').then(({data}) => {
      setTasks(data);
    });
    axios.get('http://localhost:3001/priorities').then(({data}) => {
      setPriority(data);
    });
  }, []);

  const addTask = (userInput) => {
    if (userInput) {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        completed: false,
        text: userInput,
        date: "Apr 1",
        priorityId: 1
      }
      setTasks([...tasks, newTask]);
      console.log(priority);
      console.log(tasks);
    }
  }

  const onRemove = () => {
    const newTasks = [
      ...tasks,
      []
    ]; // Костыль! Добавляю пустой массив в tasks. Что бы его длина обновилась и произошел ререндер.
    // const newTasks = tasks.filter(item => item.props.idKey !== id)
    setTasks(newTasks);
  }

  return (
    <>
      <Header/>
      <TasksCount />
      <TaskAddForm addTask={addTask} />
      {(tasks.length) ? (
        <Tasks tasks={tasks}/>
      ) : (
        'Loading...'
      )}
    </>
  );
}

export default Todo;