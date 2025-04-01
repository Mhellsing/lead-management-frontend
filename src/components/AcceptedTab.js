import React, { useState, useEffect } from "react";
import { getLeadsWithStatusAccepted } from "../services/Api";
import Stack from "@mui/material/Stack";
import AcceptedCard from "./AcceptedCard";

const AcceptedTab = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const data = await getLeadsWithStatusAccepted();
        setLeads(data);
      } catch (error) {
        console.error("Error fetching accepted leads:", error);
      }
    };
    fetchLeads();
  }, []);

  return (
    <div>      
      <hr />
      <Stack direction="column" spacing={2} padding={3}>
        {leads.map((lead) => (
          <AcceptedCard lead={lead} />
        ))}
      </Stack>
    </div>
  );
};

export default AcceptedTab;
