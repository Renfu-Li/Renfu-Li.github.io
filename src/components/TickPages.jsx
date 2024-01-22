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
  Container,
} from "@mui/material";
import { useEffect, useState } from "react";
import { TICK_PAGES } from "../constants";

function TickPages() {
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setIndex((prev) => (prev === TICK_PAGES.length - 1 ? 0 : prev + 1));
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, []);

  const disablePrev = index === 0;
  const disableNext = index === TICK_PAGES.length - 1;

  return (
    <Box>
      <Typography my="0.5em" variant="h5">
        Tick
      </Typography>
      <Typography mb="0.5em" color="gray">
        A full-fledge To-do app
      </Typography>

      <Grid container justifyContent="space-between" mx="auto" rowSpacing={3}>
        {TICK_PAGES.map((page) => (
          <Grid item key={page.id} xs={12} md={5.85}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                // width: "85%",
                mx: "auto",
              }}
            >
              <CardMedia
                component="img"
                width="100%"
                sx={
                  {
                    // maxWidth: { xs: "100%", lg: "70%" },
                    // flex: { xs: 1, md: "auto" },
                  }
                }
                image={page.src}
                alt={page.name}
              />

              <Box
                sx={{
                  paddingBottom: "16px",
                  paddingLeft: "16px",
                  bgcolor: "rgb(225, 227, 232)",
                }}
              >
                <Stack justifyContent="space-between" height="100%">
                  <List dense>
                    {page.features.map((feature) => (
                      <ListItem key={feature}>
                        <ListItemIcon sx={{ minWidth: "36px" }}>
                          <AutoAwesomeOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography fontSize="0.9em">{feature}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TickPages;
