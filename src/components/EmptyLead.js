import { Stack } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const EmptyLead = ({tab}) => {
  return (
    <Stack direction="row" spacing={1} justifyContent={"center"} padding={6}>
        <ErrorOutlineIcon sx={{color: "#616161"}}/>
        <p style={{color: "#616161"}}>No {tab} leads avaliable.</p>
    </Stack>
  );
};

export default EmptyLead;
