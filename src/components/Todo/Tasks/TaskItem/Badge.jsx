import React from 'react';
import styles from "./TaskItem.module.scss";

function Badge() {
  return (
    <div onClick={() => console.log('badge click')} className={styles.tasks_item__badge}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="9.5" stroke="#C4C4C4" strokeWidth="2"/>
        <path d="M4 10.5L9 14.5L16 6" stroke="#C4C4C4" strokeWidth="2"/>
      </svg>
    </div>
  );
}

export default Badge;