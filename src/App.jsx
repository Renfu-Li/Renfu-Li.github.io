import { Box } from "@mui/material";

import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  return (
    <Box>
      <NavBar />

      {/* <Box textAlign="center" width="85%" maxWidth={1020} mx="auto"> */}
      <Introduction />

      <About />

      <Projects />

      <Certificates />

      {/* <Divider sx={{ my: "2em", borderColor: "skyblue", borderWidth: "1px" }} /> */}

      <Contact />
      {/* </Box> */}
    </Box>
  );
}

export default App;
