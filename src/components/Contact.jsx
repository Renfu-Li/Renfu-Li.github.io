import { Box, Button, TextField } from "@mui/material";

function Contact() {
  return (
    <Box
      textAlign="center"
      component="form"
      width="50%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mx="auto"
    >
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
        placeholder="message"
      ></TextField>

      <Button variant="outlined">Submit</Button>
    </Box>
  );
}

export default Contact;
