import TickPages from "./TickPages";
import SmallProjects from "./SmallProjects";
import OpenSource from "./OpenSource";
import { Typography, Divider, Box } from "@mui/material";

function Projects() {
  return (
    <Box
      paddingTop="3.5em"
      textAlign="center"
      width="85%"
      mx="auto"
      id="projects"
    >
      <Typography variant="h3" textAlign="center">
        What I Built
      </Typography>

      <TickPages />

      <Divider
        sx={{ my: "2em", borderColor: "skyblue", borderWidth: "0.75px" }}
      />

      <SmallProjects />

      <Divider
        sx={{ my: "2em", borderColor: "skyblue", borderWidth: "0.75px" }}
      />

      <OpenSource />
    </Box>
  );
}

export default Projects;
