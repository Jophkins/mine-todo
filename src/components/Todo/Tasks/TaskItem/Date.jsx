import React from 'react';
import styles from "./TaskItem.module.scss";

function Date(props) {
  return (
    <div className={styles.tasks_item__date}>
      {props.date}
    </div>
  );
}

export default Date;