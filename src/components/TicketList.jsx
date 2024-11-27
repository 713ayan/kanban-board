import React from "react";
import TicketCard from "./TicketCard";

const TicketList = ({ group, tickets }) => {
  return (
    <div className="ticket-list">
      <h2>{group}</h2>
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketList;
