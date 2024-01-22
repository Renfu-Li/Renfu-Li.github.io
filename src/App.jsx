import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import MenuBar from "./components/MenuBar";
import TickPages from "./components/TickPages";
import OpenSource from "./components/OpenSource";
import Certificates from "./components/Certificates";
import SmallProjects from "./components/SmallProjects";
import Introduction from "./components/Introduction";
import Contact from "./components/Contact";

function App() {
  return (
    <Box>
      <MenuBar />

      <Box textAlign="center" width="85%" maxWidth={1020} mx="auto">
        <Introduction />

        {/* <Typography variant="h3" textAlign="center">
        About
      </Typography> */}

        <Typography variant="h4" textAlign="center" id="projects">
          Projects
        </Typography>

        <Divider
          sx={{ my: "2em", borderColor: "skyblue", borderWidth: "1px" }}
        />

        <TickPages />

        <Divider
          sx={{ my: "2em", borderColor: "skyblue", borderWidth: "0.75px" }}
        />

        <SmallProjects />

        <Divider
          sx={{ my: "2em", borderColor: "skyblue", borderWidth: "0.75px" }}
        />

        <OpenSource />

        <Divider
          sx={{ my: "2em", borderColor: "skyblue", borderWidth: "1px" }}
        />

        <Certificates />

        <Divider
          sx={{ my: "2em", borderColor: "skyblue", borderWidth: "1px" }}
        />

        <Contact />
      </Box>
    </Box>
  );
}

export default App;
