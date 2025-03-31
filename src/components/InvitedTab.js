import React, { useState, useEffect } from 'react';
import { getLeadsWithStatusNew, acceptLead, declineLead } from '../services/Api';
import { formatDate } from '../utils/DateUtils';

const InvitedTab = () => {
 const [leads, setLeads] = useState([]);

 useEffect(() => {
     const fetchLeads = async () => {
         try {
             const data = await getLeadsWithStatusNew();
             setLeads(data);
         } catch (error) {
             console.error('Error fetching leads:', error);
         }
     };
     fetchLeads();
 }, []);

 
 const handleAccept = async (leadId) => {
     try {
         const lead = leads.find(l => l.id === leadId);
         await acceptLead(lead);
         setLeads(leads.filter(l => l.id !== leadId));
     } catch (error) {
         console.error('Error accepting lead:', error);
     }
 };

 
 const handleDecline = async (leadId) => {
     try {
         const lead = leads.find(l => l.id === leadId);
         await declineLead(lead);
         setLeads(leads.filter(l => l.id !== leadId));
     } catch (error) {
         console.error('Error declining lead:', error);
     }
 };

 

 return (
     <div>
         <h2>Invited Leads</h2>
         {leads.map(lead => (
             <div key={lead.id} className="card mb-3">
                 <div className="card-body">
                     <h3 className="card-title">{lead.firstName}</h3>
                     <p>{formatDate(lead.dateCreated)}</p>
                     <p className="card-text">
                         <strong>Suburb:</strong> {lead.suburb}<br />
                         <strong>Category:</strong> {lead.category}<br />
                         <strong>Job Id:</strong> {lead.id}<br />
                         <strong>Description:</strong> {lead.description}<br />
                         <strong>Price:</strong> ${lead.price.toFixed(2)}<br />
                         <strong>Email:</strong> {lead.email}<br />
                         <strong>Phone Number:</strong> {lead.phoneNumber}
                     </p>
                     <button className="btn btn-success me-2" onClick={() => handleAccept(lead.id)}>Accept</button>
                     <button className="btn btn-danger" onClick={() => handleDecline(lead.id)}>Decline</button>
                     <hr />
                 </div>
             </div>
         ))}
     </div>
 );
};

export default InvitedTab;