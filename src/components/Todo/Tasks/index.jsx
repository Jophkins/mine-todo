import React from 'react';

import styles from "./TaskItem/TaskItem.module.scss";
import TasksItem from "./TaskItem";


const Tasks = ({tasks, priority, removeTask, completeToggle}) => {


  const tasksToRender = tasks.map(((item) => {
    const itemPriority = priority.find(itemPrio => itemPrio.id === item.priorityId);
    return (
      <TasksItem key={item.id} id={item.id} text={item.text} priority={(itemPriority) ? itemPriority : {}}
                 date={item.date} completed={item.completed} removeTask={removeTask} completeToggle={completeToggle}/>
    )
  }));

  return (
    <div className={styles.tasks}>
      <ul>
        {tasksToRender}
      </ul>
    </div>
  );
}

export default Tasks;