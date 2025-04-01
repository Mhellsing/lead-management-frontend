import React, { useState, useEffect } from "react";
import { getLeadsWithStatusNew, acceptLead, declineLead } from "../services/Api";
import Stack from "@mui/material/Stack";
import InvitedCard from "./InvitedCard";
import EmptyLead from "./EmptyLead";

const InvitedTab = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const data = await getLeadsWithStatusNew();
        setLeads(data);
      } catch (error) {
        console.error("Error fetching leads:", error);
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
      console.error("Error accepting lead:", error);
    }
  };

  const handleDecline = async (leadId) => {
    try {
      const lead = leads.find(l => l.id === leadId);
      await declineLead(lead);
      setLeads(leads.filter(l => l.id !== leadId));
    } catch (error) {
      console.error("Error declining lead:", error);
    }
  };

  return (
    <div>
      {leads?.length === 0 ? (
        <EmptyLead tab="invited" />
      ) : <Stack direction="column" spacing={2} padding={3}>
      {leads.map((lead) => (
        <InvitedCard
          lead={lead}
          handleAccept={handleAccept}
          handleDecline={handleDecline}
        />
      ))}
    </Stack>}
    </div>
  );
};

export default InvitedTab;
