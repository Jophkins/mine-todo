import React from 'react';
import styles from "./TaskItem.module.scss";

function Recycle({removeHandler}) {
  return (
    <div onClick={removeHandler} className={styles.tasks_item__recycle}>
      <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="3" width="13" height="17" rx="2" fill="#848484"/>
        <rect width="13" height="2" rx="1" fill="#848484"/>
      </svg>
    </div>
  );
}

export default Recycle;