import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Link, Stack, Tooltip, Typography } from "@mui/material";

function Introduction() {
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      sx={{
        mb: "2em",
        backgroundImage: "url(/images/background.png)",
      }}
      height="calc(100vh - 72px)"
    >
      <img alt="personal photo" height="200" src="/images/personal photo.png" />
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
            <Tooltip title="LinkedIn" placement="bottom">
              <LinkedInIcon color="primary" />
            </Tooltip>
          </Link>
          <Link href="https://github.com/Renfu-Li" target="_blank">
            <Tooltip title="GitHub" placement="bottom">
              <GitHubIcon color="primary" />
            </Tooltip>
          </Link>
        </Box>
      </Stack>
    </Stack>
  );
}

export default Introduction;
