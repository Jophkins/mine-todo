import React from 'react';

import styles from "./TaskItem/TaskItem.module.scss";
import TasksItem from "./TaskItem";

const Tasks = ({tasks}) => {
  return (
    <div className={styles.tasks}>
      <ul>
        {tasks.map(((item) => {
          return (
            <TasksItem key={item.id} text={item.text} priority={item.priorityId}
                       date={item.date} completed={item.completed}/>
          )
        }))}
      </ul>
    </div>
  );
}

export default Tasks;