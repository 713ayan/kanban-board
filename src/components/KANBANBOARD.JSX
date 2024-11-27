import React, { useEffect, useState } from "react";
import { fetchTickets } from "../utils/API.JS";
import { groupBy, sortTickets } from "../utils/helpers";
import DisplayHeader from "./DisplayHeader";
import TicketList from "./TicketList";

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [groupByOption, setGroupByOption] = useState("status");
  const [sortByOption, setSortByOption] = useState("priority");
  const [groupedTickets, setGroupedTickets] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTickets();
      setTickets(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const grouped = groupBy(tickets, groupByOption);
    for (let group in grouped) {
      grouped[group] = sortTickets(grouped[group], sortByOption);
    }
    setGroupedTickets(grouped);
  }, [tickets, groupByOption, sortByOption]);

  return (
    <div className="kanban-board">
      <DisplayHeader
        groupByOption={groupByOption}
        sortByOption={sortByOption}
        setGroupByOption={setGroupByOption}
        setSortByOption={setSortByOption}
      />
      <div className="board">
        {Object.keys(groupedTickets).map((group) => (
          <TicketList key={group} group={group} tickets={groupedTickets[group]} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;

