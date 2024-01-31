import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import {
  Box,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";
import { useEffect, useState } from "react";
import { OPEN_SOURCE } from "../constants";

function OpenSource() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev === OPEN_SOURCE.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const disablePrev = index === 0;
  const disableNext = index === OPEN_SOURCE.length - 1;

  return (
    <Box>
      <Typography mb="0.5em" color="#3b82f6" variant="h5">
        Open-source contributions
      </Typography>

      <Card
        sx={{
          display: "flex",
          mx: "auto",
          flexDirection: { xs: "column", lg: "row" },
          maxWidth: "1020px",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            // maxWidth: "1020px",
            // width: "70%",
            maxWidth: { xs: "100%", lg: "65%" },
            flex: { xs: 1, md: "auto" },
          }}
          image={OPEN_SOURCE[index].src}
          alt={OPEN_SOURCE[index].name}
        />

        <Stack
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          padding="0.5em"
          bgcolor="rgb(225, 227, 232)"
        >
          <Box>
            <Typography textAlign="center" fontSize="1.2em">
              I learned
            </Typography>

            <ul>
              {OPEN_SOURCE[index].takeAways.map((takeaway) => (
                <li key={takeaway} style={{ marginBottom: "0.5em" }}>
                  <Typography textAlign="left" fontSize="0.9em">
                    {takeaway}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>

          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            // height="100%"
          >
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

            <Link href={OPEN_SOURCE[index].link} target="_blank">
              <Tooltip title="See more on GitHub" placement="right">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </Tooltip>
            </Link>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
}

export default OpenSource;
