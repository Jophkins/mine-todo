import React from 'react';
import styles from "../TaskItem.module.scss";

function Badge({completed}) {
  let fillColor = 'none';
  let circleStroke = '#C4C4C4';
  let pathStroke = '#C4C4C4';

  if (completed) {
    fillColor = '#10942D';
    circleStroke = '#10942D';
    pathStroke = '#fff';
  }

  return (
    <div onClick={() => console.log(completed)} className={styles.tasks_item__badge}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="9.5" stroke={circleStroke} strokeWidth="2"/>
        <path d="M4 10.5L9 14.5L16 6" stroke={pathStroke} strokeWidth="2"/>
      </svg>
    </div>
  );
}

export default Badge;