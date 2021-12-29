import React from 'react';

import Header from "./Header";
import TasksCount from "./TasksCount";
import Tasks from "./Tasks";

import TaskAddForm from "./TaskAddForm";

function Todo(props) {
  return (
    <>
      <Header/>
      <TasksCount total="4" done="1" inProgress="1"/>
      <TaskAddForm />
      <Tasks db={props.db}/>
    </>
  );
}

export default Todo;