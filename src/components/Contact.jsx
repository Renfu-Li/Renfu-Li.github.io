import { Box, Button, TextField, Typography } from "@mui/material";

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
      mx="auto"
      id="contact"
    >
      <Typography variant="h4">Start the conversation</Typography>
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
        Submit
      </Button>
    </Box>
  );
}

export default Contact;
