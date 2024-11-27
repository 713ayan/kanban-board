export const groupBy = (data, key) => {
    return data.reduce((result, item) => {
      const group = item[key] || "Uncategorized";
      if (!result[group]) {
        result[group] = [];
      }
      result[group].push(item);
      return result;
    }, {});
  };
  
  export const sortTickets = (tickets, sortBy) => {
    if (sortBy === "priority") {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      return [...tickets].sort(
        (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
      );
    }
    if (sortBy === "title") {
      return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
    }
    return tickets;
  };
  