import React from 'react';

import Badge from "./Badge/Badge";
import Priority from "./Priority";
import Date from "./Date";
import Recycle from "./Recycle";

import styles from "./TaskItem.module.scss";

function TasksItem({text, priority, date, completed}) {

  const removeTask = () => {
    if(window.confirm('Действительно удалить?')) {
      console.log();
    }
  }

  return (
    <div className={styles.tasks}>
      <ul>
        <li className={styles.tasks_item}>
          <Badge completed={completed} />
          <div className={styles.tasks_item__text}>
            {text}
          </div>
          <Priority priorityColor={2} priority={priority} />
          <Date date={date} />
          <Recycle removeTask={removeTask}/>
        </li>
      </ul>
    </div>
  );
}

export default TasksItem;