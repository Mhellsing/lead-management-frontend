import * as React from "react";
import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import InvitedTab from "./InvitedTab";
import AcceptedTab from "./AcceptedTab";


const JobTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box sx={{ width: "100%", border: "none" }}>
      <Tabs variant="fullWidth" value={tabIndex} onChange={(e, newIndex) => setTabIndex(newIndex)}
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: '#ef6c00',
          },
          '& .MuiTab-root': {
            color: '#616161',
          },
          '& .MuiTab-root.Mui-selected': {
            color: '#616161',
          },
        }}>
        <Tab label="Invited"/>
        <Tab label="Accepted" />
      </Tabs>
      {tabIndex === 0 && <InvitedTab />}
      {tabIndex === 1 && <AcceptedTab />}
    </Box>
  );
};

export default JobTabs;
