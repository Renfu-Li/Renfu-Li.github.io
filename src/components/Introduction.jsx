import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Link, Stack, Tooltip, Typography } from "@mui/material";

function Introduction() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="space-evenly"
      alignItems="center"
      sx={{
        backgroundImage: "url(/images/background.png)",
        backgroundSize: "cover",
      }}
      height="calc(100vh - 64px)"
    >
      <img alt="personal photo" height="200" src="/images/personal photo.png" />
      <Stack height={250} justifyContent="space-evenly">
        <Typography variant="h3">Hi, I am Renfu</Typography>
        <Typography variant="h4">a web developer</Typography>
        {/* <Typography>based in Victoria, BC, Canada</Typography> */}

        <Box>
          <Link href="https://github.com/Renfu-Li" target="_blank" mr="2em">
            <Tooltip title="GitHub" placement="bottom">
              <GitHubIcon color="primary" />
            </Tooltip>
          </Link>
          <Link
            href="https://www.linkedin.com/in/renfu-li"
            target="_blank"
            mr="2em"
          >
            <Tooltip title="LinkedIn" placement="bottom">
              <LinkedInIcon color="primary" />
            </Tooltip>
          </Link>

          <Link
            href="https://www.instagram.com/renfu.li.ca?igsh=MWw1MjZtYXh1eG1nNA%3D%3D&utm_source=qr"
            target="_blank"
          >
            <Tooltip title="Instagram" placement="bottom">
              <InstagramIcon color="primary" />
            </Tooltip>
          </Link>
        </Box>
      </Stack>
    </Stack>
  );
}

export default Introduction;
