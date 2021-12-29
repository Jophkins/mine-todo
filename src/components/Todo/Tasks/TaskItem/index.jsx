import React from 'react';

import Badge from "./Badge";
import Priority from "./Priority";
import Date from "./Date";
import Recycle from "./Recycle";

import styles from "./TaskItem.module.scss";

function TasksItem(props) {
  return (
    <div className={styles.tasks}>
      <ul>
        <li className={styles.tasks_item}>
          <Badge />
          <div className={styles.tasks_item__text}>
            {props.text}
          </div>
          <Priority priorityColor={props.priorityColor} priority={props.priority} />
          <Date date={props.date} />
          <div className={styles.tasks_item__checkbox}>
            <input type="checkbox"/>
          </div>
          <Recycle />
        </li>
      </ul>
    </div>
  );
}

export default TasksItem;