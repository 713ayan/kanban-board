import React from "react";
import KanbanBoard from "./components/KanbanBoard";
import "./styles/main.css";

const App = () => {
  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <Kanban Board />
    </div>
  );
};

export default App;
