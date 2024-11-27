
import React, { useEffect, useState } from 'react';
import './App.css';

const API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

function App() {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState('status'); // default grouping
  const [sortOption, setSortOption] = useState('priority'); // default sorting

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        setTickets(Array.isArray(data) ? data : data.tickets || []);
      })
      .catch((error) => console.error("Error fetching tickets:", error));
  }, []);

  const groupBy = (items, key) => {
    if (!Array.isArray(items)) {
      console.error("Expected an array but received:", items);
      return {};
    }

    return items.reduce((result, item) => {
      (result[item[key]] = result[item[key]] || []).push(item);
      return result;
    }, {});
  };

  const groupTickets = () => {
    switch (grouping) {
      case 'status':
        return groupBy(tickets, 'status');
      case 'user':
        return groupBy(tickets, 'user');
      case 'priority':
        return groupBy(tickets, 'priority');
      default:
        return {};
    }
  };

  const sortedTickets = (group) => {
    const compareFunction = sortOption === 'priority'
      ? (a, b) => b.priority - a.priority
      : (a, b) => a.title.localeCompare(b.title);

    return group.sort(compareFunction);
  };

  const groupedTickets = groupTickets();

  if (!Array.isArray(tickets) || tickets.length === 0) {
    return <div>Loading tickets...</div>;
  }

  return (
    <div className="kanban-container">
      <h1>Kanban Board</h1>

      <div className="controls">
        <label>
          Group By:
          <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </label>
        <label>
          Sort By:
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </label>
      </div>

      <div className="kanban-board">
        {Object.entries(groupedTickets).map(([group, tickets]) => (
          <div key={group} className="kanban-column">
            <h2>{group}</h2>
            {sortedTickets(tickets).map((ticket) => (
              <div key={ticket.id} className={`kanban-card priority-${ticket.priority}`}>
                <h3>{ticket.title}</h3>
                <p>{ticket.description}</p>
                <span>User: {ticket.user}</span>
                <span>Priority: {ticket.priority}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

