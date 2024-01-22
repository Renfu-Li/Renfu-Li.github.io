import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, IconButton, Link, Stack, Typography } from "@mui/material";

function Introduction() {
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      sx={{ my: "2em" }}
      height="350px"
    >
      <img
        alt="personal photo"
        height="200"
        src="/src/assets/images/personal photo.png"
      />
      <Stack height={250} justifyContent="space-evenly">
        <Typography variant="h3">Hi, I am Renfu</Typography>
        <Typography variant="h4">a web developer</Typography>
        {/* <Typography>based in Victoria, BC, Canada</Typography> */}

        <Box>
          <Link
            href="https://www.linkedin.com/in/renfu-li"
            target="_blank"
            mr="2em"
          >
            <LinkedInIcon color="primary" />
          </Link>
          <Link href="https://github.com/Renfu-Li" target="_blank">
            <GitHubIcon color="primary" />
          </Link>
        </Box>
      </Stack>
    </Stack>
  );
}

export default Introduction;
