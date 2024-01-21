import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import {
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Slide,
  Stack,
  Tooltip,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useEffect, useState } from "react";
import { OPEN_SOURCE } from "../constants";

function OpenSource() {
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setIndex((prev) => (prev === OPEN_SOURCE.length - 1 ? 0 : prev + 1));
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, []);

  const disablePrev = index === 0;
  const disableNext = index === OPEN_SOURCE.length - 1;

  return (
    <Card
      sx={{
        display: "flex",
        width: "85%",
        mx: "auto",
        flexDirection: "column",
        maxWidth: "1020px",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          maxWidth: "1020px",
          flex: { xs: 1, md: "auto" },
        }}
        image={OPEN_SOURCE[index].src}
        alt={OPEN_SOURCE[index].name}
      />

      <Container sx={{ padding: 0 }}>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          // height="100%"
        >
          <Stack direction="row" justifyContent="center" alignItems="center">
            <IconButton
              onClick={() => setIndex(index - 1)}
              disabled={disablePrev}
            >
              <NavigateBeforeIcon color={disablePrev ? "default" : "primary"} />
            </IconButton>

            <Typography width="60px">
              {`${index + 1} / ${OPEN_SOURCE.length}`}
            </Typography>

            <IconButton
              onClick={() => setIndex(index + 1)}
              disabled={disableNext}
            >
              <NavigateNextIcon color={disableNext ? "default" : "primary"} />
            </IconButton>
          </Stack>

          <Tooltip title="See more on GitHub" placement="top">
            <Link href={OPEN_SOURCE[index].link} target="_blank">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </Link>
          </Tooltip>
        </Stack>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            My taskaways
          </AccordionSummary>
          <AccordionDetails>
            <Typography textAlign="left">
              {OPEN_SOURCE[index].contribution}
            </Typography>

            <ul>
              {OPEN_SOURCE[index].takeAways.map((takeAway) => (
                <li key={takeAway}>
                  <Typography fontSize="0.9em" textAlign="left">
                    {takeAway}
                  </Typography>
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Card>
  );
}

export default OpenSource;
