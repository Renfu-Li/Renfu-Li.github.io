import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import TickPages from "./components/TickPages";
import OpenSource from "./components/OpenSource";
import Certificates from "./components/Certificates";
import SmallProjects from "./components/SmallProjects";
import Contact from "./components/Contact";

function App() {
  return (
    <Box textAlign="center">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Avatar>R</Avatar>
        <div>
          <Button>about</Button>
          <Button>projects</Button>
          <Button>contact</Button>
        </div>
      </Stack>

      <Stack direction="row" justifyContent="space-evenly" sx={{ my: "2em" }}>
        <img
          alt="personal photo"
          height="200"
          src="/src/assets/images/personal photo.png"
        />
        <Box>
          <Typography variant="h3">Hi, I'am Renfu</Typography>
          <Typography variant="h4">a web developer</Typography>
          <Typography>based in Victoria, BC, Canada</Typography>
          <IconButton>
            <LinkedInIcon color="primary" />
          </IconButton>
          <IconButton>
            <GitHubIcon color="primary" />
          </IconButton>
        </Box>
      </Stack>

      {/* <Typography variant="h3" textAlign="center">
        About
      </Typography> */}

      <Typography variant="h3" textAlign="center">
        Projects
      </Typography>

      {/* <TickPages /> */}

      <OpenSource />

      <SmallProjects />

      <Certificates />

      <Contact />
    </Box>
  );
}

export default App;
