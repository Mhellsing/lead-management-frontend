import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { formatDate } from "../utils/Utils";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";

const InvitedCard = ({ lead, handleAccept, handleDecline }) => {
  return (
    <Box>
      <Card>
        <React.Fragment>
          <CardContent>
            <Stack direction="column" spacing={2} paddingX={1}>
              <Stack direction="row" spacing={2} alignItems={"center"}>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>
                  {lead.firstName.substring(0, 1)}
                </Avatar>
                <Stack direction="column" spacing={0.2}>
                  <h3>{lead.firstName}</h3>
                  <p>{formatDate(lead.dateCreated)}</p>
                </Stack>
              </Stack>              
              <hr/>
              <Stack direction="row"  spacing={5} alignItems={"center"}>
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
              </Stack>
              <hr/>
              <Stack direction="row" alignItems="center">
                {lead.description}
              </Stack>
              <hr/>
            </Stack>
          </CardContent>
          <CardActions>           
            <Button
              size="medium"
              onClick={() => handleAccept(lead.id)}
              variant="contained"
              style={{marginLeft: 14, marginBottom: 14, backgroundColor: "#ef6c00" }}
              
            >
              Accept
            </Button>
            <Button
              size="medium"
              variant="contained"
              style={{marginBottom: 14, backgroundColor: "#bdbdbd" }}
              onClick={() => handleDecline(lead.id)}              
            >
              Decline
            </Button>
            <Stack style={{marginBottom: 14}} direction="row" spacing={2} alignItems="center">
              <h3>${lead.price}</h3>
              <span>Lead Invitation</span>
            </Stack>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
};

export default InvitedCard;
