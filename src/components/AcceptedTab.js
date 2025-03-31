import React, { useState, useEffect } from 'react';
import { getLeadsWithStatusAccepted } from '../services/Api';

const AcceptedTab = () => {
 const [leads, setLeads] = useState([]);

 useEffect(() => {
     const fetchLeads = async () => {
         try {
             const data = await getLeadsWithStatusAccepted();
             setLeads(data);
         } catch (error) {
             console.error('Error fetching accepted leads:', error);
         }
     };
     fetchLeads();
 }, []);

 return (
     <div>
         <h2>Accepted Leads</h2>
         <hr />
         {leads.map(lead => (
             <div key={lead.id} className="card mb-3">
                 <div className="card-body">
                     <h3 className="card-title">{lead.firstName} {lead.lastName}</h3>
                    <strong>Suburb:</strong> {lead.suburb}<br />
                    <strong>Category:</strong> {lead.category}<br />
                    <strong>Job Id:</strong> {lead.id}<br />
                    <strong> ${lead.price} </strong>Lead Invitation<br />
                     <p className="card-text">
                         <strong>Email:</strong> {lead.email}<br />
                         <strong>Phone:</strong> {lead.phoneNumber}<br />
                     </p>
                 </div>
             </div>
         ))}
     </div>
 );
};

export default AcceptedTab;