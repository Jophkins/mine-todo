import React, {useState} from 'react';

import styles from "./TaskAddForm.module.scss";

function TaskAddForm({addTask}) {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(inputValue);
    setInputValue('');
  }

  const handleKeySubmit = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  }

  return (
    <div className={styles.input}>
      <form onSubmit={handleSubmit}>
        <input className={styles.textInput} type="text" placeholder='Add task' maxLength='50' value={inputValue}
               onChange={handleChange} onKeyDown={handleKeySubmit}/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default TaskAddForm;