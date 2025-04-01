import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { formatDate, formatInitialForName } from "../utils/Utils";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

const AcceptedCard = ({ lead }) => {
  return (
    <Box>
      <Card>
        <React.Fragment>
          <CardContent>
            <Stack direction="column" spacing={2} paddingX={1}>
              <Stack direction="row" spacing={2} alignItems={"center"}>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>
                  {formatInitialForName(lead.firstName)}
                </Avatar>
                <Stack direction="column" spacing={0.2}>
                  <h3>{lead.firstName}</h3>
                  <p>{formatDate(lead.dateCreated)}</p>
                </Stack>
              </Stack>
              <hr />
              <Stack direction="row" spacing={3} alignItems={"center"}>
                <Stack direction="row" spacing={1} alignItems={"center"}>
                  <LocationOnIcon color="action" />
                  <span>{lead.suburb}</span>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <WorkIcon color="action" />
                  <span>{lead.category}</span>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <span>Job ID: {lead.id}</span>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <span>${lead.price} Lead Invitation</span>
                </Stack>
              </Stack>
              <hr />
              <Stack direction="row" spacing={3} alignItems="center">
                <Stack direction="row" spacing={0.8} alignItems="center">
                  <PhoneIcon color="action" />
                  <span>{lead.phoneNumber}</span>
                </Stack>
                <Stack direction="row" spacing={0.8} alignItems="center">
                  <MailIcon color="action" />
                  <span>{lead.email}</span>
                </Stack>
              </Stack>
              <Stack direction="row" alignItems="center">
                {lead.description}
              </Stack>
            </Stack>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
};

export default AcceptedCard;
