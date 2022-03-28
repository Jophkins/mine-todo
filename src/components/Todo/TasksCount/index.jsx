import React from 'react';

import styles from "./TasksCount.module.scss"

function TasksCount({count}) {
  return (
    <div className={styles.countWrapper}>
      <ul>
        <li className={styles.total}>TOTAL: {count.total}</li>
        <li className={styles.done}>DONE: {count.done}</li>
        <li className={styles.inProgress}>IN PROGRESS: {count.inProgress}</li>
      </ul>
    </div>
  );
}

export default TasksCount;