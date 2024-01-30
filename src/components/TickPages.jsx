import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import { faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

import {
  Box,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Tooltip,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";

import { TICK_PAGES } from "../constants";

function TickPages() {
  return (
    <Box textAlign="center" width="85%" maxWidth={1020} mx="auto">
      <Typography my="0.5em" variant="h5">
        Tick
      </Typography>
      <Typography mb="0.5em" color="gray">
        A full-fledged To-do app
      </Typography>

      <Grid container justifyContent="space-between" mx="auto" rowSpacing={3}>
        {TICK_PAGES.map((page) => (
          <Grid item key={page.id} xs={12} md={5.85}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                mx: "auto",
              }}
            >
              <CardMedia
                component="img"
                width="100%"
                image={page.src}
                alt={page.name}
              />

              <Box
                sx={{
                  paddingLeft: "4px",
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

      <Box mt="1.5em">
        <Link
          href="https://github.com/Renfu-Li/Tick-client"
          target="_blank"
          mr="2em"
        >
          <Tooltip title="Frontend repository" placement="top">
            <FontAwesomeIcon icon={faReact} size="xl" />
          </Tooltip>
        </Link>
        <Link
          href="https://github.com/Renfu-Li/Tick-server"
          target="_blank"
          mr="2em"
        >
          <Tooltip title="Backend repository" placement="top">
            <FontAwesomeIcon icon={faNode} size="xl" />
          </Tooltip>
        </Link>
        <Link href="https://ticktrack.onrender.com" target="_blank">
          <Tooltip title="Have a try!" placement="top">
            <FontAwesomeIcon icon={faShare} size="xl" />
          </Tooltip>
        </Link>
      </Box>
    </Box>
  );
}

export default TickPages;
