import {
  Box,
  Card,
  CardMedia,
  Grid,
  Link,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { SMALL_PROJECTS } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";

function SmallProjects() {
  return (
    <Box>
      <Typography mb="0.5em" color="#3b82f6" variant="h5">
        Frontend projects
      </Typography>

      <Grid container mx="auto" justifyContent="space-between" rowSpacing={3}>
        {SMALL_PROJECTS.map((project) => (
          <Grid item xs={12} md={5.85} key={project.name}>
            <Card>
              <CardMedia
                sx={{ height: 350 }}
                image={project.src}
                title={project.name}
              />

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                padding="0.5em"
              >
                <Typography mr="1em">{project.name}</Typography>

                <Link href={project.link} target="_blank">
                  <Tooltip title="Try on CodePen" placement="right">
                    <FontAwesomeIcon icon={faCodepen} size="lg" />
                  </Tooltip>
                </Link>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SmallProjects;
