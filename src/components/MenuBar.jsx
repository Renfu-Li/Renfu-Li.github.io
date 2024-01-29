import { Avatar, Button, Stack } from "@mui/material";

function MenuBar() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="white"
      padding="1em"
      height={72}
      boxSizing="border-box"
    >
      <Avatar>R</Avatar>
      <div>
        <Button>Projects</Button>
        <Button href="#certificates">Certificates</Button>
        <Button href="#contact">Contact</Button>
      </div>
    </Stack>
  );
}

export default MenuBar;
