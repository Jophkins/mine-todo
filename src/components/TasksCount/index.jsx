import React from 'react';

import styles from "./TasksCount.module.scss"

function TasksCount(props) {
  return (
    <div className={styles.countWrapper}>
      <ul>
        <li className={styles.total}>TOTAL: {props.total}</li>
        <li className={styles.done}>DONE: {props.done}</li>
        <li className={styles.inProgress}>IN PROGRESS: {props.inProgress}</li>
      </ul>
    </div>
  );
}

export default TasksCount;