import React from 'react';

import styles from "./TaskItem/TaskItem.module.scss";

import TasksItem from "./TaskItem";

const Tasks = (props) => {
  let tasksItem = props.db.tasks.map((item) => {
    item.priority = props.db.priority.filter(priority => priority.id === item.priorityId)[0].text;
    item.color = props.db.priority.filter(priority => priority.id === item.priorityId)[0].color;
    return (
      <TasksItem key={item.id} text={item.text} priorityColor={item.color} priority={item.priority} date={item.date} />
    )
  })
  return (
    <div className={styles.tasks}>
      <ul>
        {tasksItem}
      </ul>
    </div>
  );
}

export default Tasks;