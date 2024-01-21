import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
} from "@mui/material";
import { useEffect, useState } from "react";
import { TICK_PAGES } from "../constants";

function TickPages() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev === TICK_PAGES.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const disablePrev = index === 0;
  const disableNext = index === TICK_PAGES.length - 1;

  return (
    <Card
      sx={{
        display: "flex",
        width: "85%",
        mx: "auto",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          maxWidth: { xs: "100%", md: "70%" },
          flex: { xs: 1, md: "auto" },
        }}
        image={TICK_PAGES[index].src}
        alt={TICK_PAGES[index].name}
      />

      <CardContent sx={{ width: "100%" }}>
        <Stack justifyContent="space-between" height="100%">
          <Stack spacing={1}>
            <Stack direction="row" justifyContent="center" alignItems="center">
              <IconButton
                onClick={() => setIndex(index - 1)}
                disabled={disablePrev}
              >
                <NavigateBeforeIcon
                  color={disablePrev ? "default" : "primary"}
                />
              </IconButton>

              <Typography variant="h6" width="95px">
                {TICK_PAGES[index].name}
              </Typography>

              <IconButton
                onClick={() => setIndex(index + 1)}
                disabled={disableNext}
              >
                <NavigateNextIcon color={disableNext ? "default" : "primary"} />
              </IconButton>
            </Stack>

            <List>
              {TICK_PAGES[index].features.map((feature) => (
                <ListItem key={feature}>
                  {/* <ListItemText secondary={feature}></ListItemText> */}
                  <ListItemIcon sx={{ minWidth: "36px" }}>
                    <AutoAwesomeOutlinedIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography fontSize="0.9em">{feature}</Typography>
                </ListItem>
              ))}
            </List>
          </Stack>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Link
              href="https://github.com/Renfu-Li/Tick-server"
              target="_blank"
            >
              <Tooltip title="Backend respository" placement="top">
                <Button>
                  <FontAwesomeIcon icon={faNode} size="xl" />
                </Button>
              </Tooltip>
            </Link>
            <Link
              href="https://github.com/Renfu-Li/Tick-client"
              target="_blank"
            >
              <Tooltip title="Frontend repository" placement="top">
                <Button>
                  <FontAwesomeIcon icon={faReact} size="xl" />
                </Button>
              </Tooltip>
            </Link>
            <Tooltip title="Have a try!" placement="top">
              <Button href="https://tick-o52t.onrender.com/" target="_blank">
                <OpenInNewIcon color="primary" />
              </Button>
            </Tooltip>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default TickPages;
