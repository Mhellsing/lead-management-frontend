import * as React from "react";
import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import InvitedTab from "./InvitedTab";
import AcceptedTab from "./AcceptedTab";


const JobTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs variant="fullWidth" indicatorColor= "primary"  value={tabIndex} onChange={(e, newIndex) => setTabIndex(newIndex)}>
        <Tab label="Invited"/>
        <Tab label="Accepted" />
      </Tabs>
      {tabIndex === 0 && <InvitedTab />}
      {tabIndex === 1 && <AcceptedTab />}
    </Box>
  );
};

export default JobTabs;
