import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  return (
    <Box
      textAlign="center"
      component="form"
      width="70%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      paddingTop="3.5em"
      mx="auto"
      id="contact"
      maxWidth={630}
    >
      <Typography variant="h3">What can I do for you?</Typography>

      <Stack justifyContent="flex-start" my="1em">
        <Stack direction="row" my="0.5em">
          <EmailIcon />
          <Typography ml="1em">renfu.li.ca@gmail.com</Typography>
        </Stack>
        <Stack direction="row" my="0.5em">
          <LocationOnIcon />
          <Typography ml="1em">Victoria, BC, Canada</Typography>
        </Stack>
      </Stack>

      <TextField
        size="small"
        fullWidth
        margin="normal"
        placeholder="name"
      ></TextField>
      <TextField
        size="small"
        fullWidth
        margin="normal"
        placeholder="email"
      ></TextField>
      <TextField
        size="small"
        fullWidth
        margin="normal"
        multiline
        rows={8}
        placeholder="message"
      ></TextField>

      <Button sx={{ my: "1.5em" }} variant="outlined">
        Send
      </Button>
    </Box>
  );
}

export default Contact;
