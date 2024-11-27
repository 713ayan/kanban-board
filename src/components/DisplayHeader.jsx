import React from "react";

const DisplayHeader = ({
  groupByOption,
  sortByOption,
  setGroupByOption,
  setSortByOption,
}) => {
  return (
    <div className="header">
      <label>
        Group By:
        <select value={groupByOption} onChange={(e) => setGroupByOption(e.target.value)}>
          <option value="status">Status</option>
          <option value="priority">Priority</option>
          <option value="user">User</option>
        </select>
      </label>
      <label>
        Sort By:
        <select value={sortByOption} onChange={(e) => setSortByOption(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </label>
    </div>
  );
};

export default DisplayHeader;

