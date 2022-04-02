import React from 'react';

import Badge from "./Badge/Badge";
import Priority from "./Priority";
import Date from "./Date";
import Recycle from "./Recycle";

import styles from "./TaskItem.module.scss";

function TasksItem({id, text, priority, date, completed, removeTask, completeToggle}) {

  const removeHandler = () => {
    if(window.confirm('Действительно удалить?')) {
      removeTask(id);
    }
  }

  const checkHandler = () => {
    completeToggle(id, completed);
  }

  return (
    <div className={styles.tasks}>
      <ul>
        <li className={styles.tasks_item}>
          {/*<Badge completed={completed} />*/}
          <label className={styles.tasks_item__checkbox}>
            <input className={styles.default_check} type="checkbox" checked={completed} onChange={checkHandler} />
            <span className={styles.custom_check} />
          </label>
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