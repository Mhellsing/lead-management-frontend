import React from 'react';

const LeadCard = ({ lead, onAccept, onDecline }) => {
  return (
      <div className="card mb-3">
          <div className="card-body">
              <h5 className="card-title">{lead.firstName}</h5>
              <p className="card-text">
                  <strong>Suburb:</strong> {lead.suburb}<br />
                  <strong>Category:</strong> {lead.category}<br />
                  <strong>Description:</strong> {lead.description}<br />
                  <strong>Price:</strong> ${lead.price.toFixed(2)}
              </p>
              <button className="btn btn-success me-2" onClick={() => onAccept(lead.id)}>Accept</button>
              <button className="btn btn-danger" onClick={() => onDecline(lead.id)}>Decline</button>
          </div>
      </div>
  );
};

export default LeadCard;