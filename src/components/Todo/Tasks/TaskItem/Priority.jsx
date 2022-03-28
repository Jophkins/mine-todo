import React from 'react';
import styles from "./TaskItem.module.scss";

function Priority({priorityColor, priorityText}) {
  return (
    <>
      <div className={styles.tasks_item__priority_point}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="5" r="5" fill={priorityColor}/>
        </svg>
      </div>
      <div className={styles.tasks_item__priority_text}>
        {priorityText} Priority
      </div>
    </>
  );
}

export default Priority;