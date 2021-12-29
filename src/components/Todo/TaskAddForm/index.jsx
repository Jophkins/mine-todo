import React, {useState} from 'react';

import styles from "./TaskAddForm.module.scss";

function TaskAddForm() {
  const [addedTask, setAddedTask] = useState('')
  return (
    <div className={styles.input}>
      <div className="inputLine">
        <input className={styles.textInput} type="text" placeholder='Add task' maxLength='50' value={addedTask}
               onChange={(event) => setAddedTask(event.target.value)}/>
      </div>
      <button onClick={() => console.log(addedTask)}>Add</button>
    </div>
  );
}

export default TaskAddForm;