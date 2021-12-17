import React from "react";

import Header from "./components/Header";

import './App.scss';
import TasksCount from "./components/TasksCount";


function App() {
  return (
    <div className="App">
      <Header/>
      <TasksCount total="4" done="1" inProgress="1"/>
      <div className="input">
        <div className="inputLine">
          <input className='textInput' type="text" name="" id="" placeholder='Add task' maxLength='50' />
        </div>
        <button>Add</button>
      </div>
      <div className="tasks">
        <ul>
          <li className="tasks_item">
            <div className="tasks_item__badge">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9.5" stroke="#C4C4C4"/>
                <path d="M4 10.5L9 14.5L16 6" stroke="#C4C4C4"/>
              </svg>
            </div>
            <div className="tasks_item__text">
              Купить хлебушка, побыстрее
            </div>
            <div className="tasks_item__priority_point">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill="#6B68FF"/>
              </svg>
            </div>
            <div className="tasks_item__priority_text">
              Low Priority
            </div>
            <div className="tasks_item__date">
              Dec 25
            </div>
            <div className="tasks_item__checkbox">
              checkbox
            </div>
            <div className="tasks_item__recycle">
              <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="3" width="13" height="17" rx="2" fill="#848484"/>
                <rect width="13" height="2" rx="1" fill="#848484"/>
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;