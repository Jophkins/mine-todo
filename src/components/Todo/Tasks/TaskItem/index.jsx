import React from 'react';

import Badge from "./Badge/Badge";
import Priority from "./Priority";
import Date from "./Date";
import Recycle from "./Recycle";

import styles from "./TaskItem.module.scss";

function TasksItem({id, text, priority, date, completed, removeTask}) {

  const removeHandler = () => {
    if(window.confirm('Действительно удалить?')) {
      removeTask(id);
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
          <Priority priorityColor={priority.color} priorityText={priority.text} />
          <Date date={date} />
          <Recycle removeHandler={removeHandler}/>
        </li>
      </ul>
    </div>
  );
}

export default TasksItem;