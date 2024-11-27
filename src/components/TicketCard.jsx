import React from "react";

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <span className={`priority ${ticket.priority.toLowerCase()}`}>
        {ticket.priority}
      </span>
    </div>
  );
};

export default TicketCard;

