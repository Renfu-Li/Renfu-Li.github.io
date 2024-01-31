import { Box, Grid, Stack, Typography } from "@mui/material";
import { TECH_STACK } from "../constants";

function About() {
  const techNames = Object.keys(TECH_STACK);

  return (
    <Box bgcolor="white" paddingY="3.5em" id="about">
      <Box width="85%" mx="auto">
        <Typography textAlign="center" variant="h3">
          About me
        </Typography>

        <Typography color="#3b82f6" variant="h5" mt="1.5em" mb="1em">
          Who am I
        </Typography>

        <Typography mb="1em">
          I am a self-taught <b>Full-stack developer</b>, currently{" "}
          <b>looking for an opportunity</b> to help deliver values with my
          skills.
        </Typography>

        <Typography>
          Previously, I majored in Archaeology and Philolosophy, and a semester
          of archaeological fieldwork in Shaanxi is still one of my most
          cherished memories. Judged from my majors, I certainly wan&apos;t
          naturally interested in programming, but when I had a chance to
          experiment with it, I found it to be{" "}
          <b>a magic, yet understandable.</b>{" "}
        </Typography>

        <ul>
          <li style={{ marginBottom: "0.5em" }}>
            I enjoy experimenting with new methods and crafting small products,
            with a primary focus on <b>solving meaningful problems</b>
          </li>
          <li style={{ marginBottom: "0.5em" }}>
            I consider <b>collegues as internal clients</b>, and I am committed
            to working together to successfully complete the projects
          </li>
          <li style={{ marginBottom: "0.5em" }}>
            When I build, I take the time to <b>understand the problem well</b>{" "}
            with mind maps, then <b>address the problems atomically</b>
          </li>
          <li style={{ marginBottom: "0.5em" }}>
            When I learn, I like to <b>play with code, and take notes</b> using
            Obsidian to better understand & organize the material
          </li>
        </ul>

        <Typography color="#3b82f6" variant="h5" mt="1.5em">
          What I can do
        </Typography>
        {techNames.map((name) => (
          <Stack
            key={name}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            my="1em"
          >
            <Typography display="inline-block" width={90}>
              {name}
            </Typography>

            <Grid container>
              {TECH_STACK[name].map((tech) => (
                <Grid item key={tech.name} mx="1em" my="0.3em">
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    bgcolor="#f9fafb"
                    borderRadius="0.375em"
                    padding="0.5em 0 0.5em 0.5em"
                    width={145}
                  >
                    <img src={tech.src} width={32} />
                    <Typography ml="0.5em">{tech.name}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        ))}
      </Box>
    </Box>
  );
}

export default About;
