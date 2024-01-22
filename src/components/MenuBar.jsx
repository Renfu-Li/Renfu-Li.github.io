import { Avatar, Button, Link, Stack } from "@mui/material";

function MenuBar() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="rgb(225, 227, 232)"
      padding="1em"
    >
      <Avatar>RL</Avatar>
      <div>
        <Button>Projects</Button>
        <Button href="#certificates">Certificates</Button>
        <Button href="#contact">Contact</Button>
      </div>
    </Stack>
  );
}

export default MenuBar;
