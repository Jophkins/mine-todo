import React from "react";

import Todo from "./components/Todo";

import DB from "./assets/db.json";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Todo db={DB} />
    </div>
  );
}

export default App;