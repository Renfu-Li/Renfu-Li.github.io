import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import { CERTIFICATES } from "../constants";

function Certificates() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev === CERTIFICATES.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const disablePrev = index === 0;
  const disableNext = index === CERTIFICATES.length - 1;

  return (
    <Box
      id="certificates"
      textAlign="center"
      width="85%"
      mx="auto"
      paddingTop="3.5em"
    >
      <Typography mb="0.5em" variant="h3">
        Certificates
      </Typography>

      <Typography color="#3b82f6" variant="h5" mt="1em" mb="0.5em">
        What I learned
      </Typography>

      <Card
        sx={{
          display: "flex",
          mx: "auto",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Link
          href={CERTIFICATES[index].link}
          target="_blank"
          sx={{
            maxWidth: { xs: "100%", md: "65%" },
            flex: { xs: 1, md: "auto" },
          }}
        >
          <CardMedia
            component="img"
            image={CERTIFICATES[index].src}
            alt={CERTIFICATES[index].name}
          />
        </Link>

        <CardContent sx={{ width: "100%" }}>
          <Stack justifyContent="space-between" height="100%">
            <Stack spacing={1}>
              <Link
                href={CERTIFICATES[index].link}
                underline="none"
                color="black"
              >
                <Typography variant="h6">{CERTIFICATES[index].name}</Typography>
              </Link>

              <Typography color="grayText">
                {CERTIFICATES[index].institution}
              </Typography>

              <Box>
                {CERTIFICATES[index].knowledges.map((knowledge) => (
                  <Chip
                    key={knowledge}
                    label={knowledge}
                    variant="outlined"
                    sx={{ m: "0.3em" }}
                  ></Chip>
                ))}
              </Box>
            </Stack>

            <Stack direction="row" justifyContent="center" alignItems="center">
              <IconButton
                onClick={() => setIndex(index - 1)}
                disabled={disablePrev}
              >
                <NavigateBeforeIcon
                  color={disablePrev ? "default" : "primary"}
                />
              </IconButton>

              <Typography width="60px">
                {`${index + 1} of ${CERTIFICATES.length}`}
              </Typography>

              <IconButton
                onClick={() => setIndex(index + 1)}
                disabled={disableNext}
              >
                <NavigateNextIcon color={disableNext ? "default" : "primary"} />
              </IconButton>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Certificates;
