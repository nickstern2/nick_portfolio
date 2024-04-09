import { Box, Stack, Typography, Tooltip } from "@mui/material";
import { ParticlesBackground } from "../reusable/ParticlesBackground";
import { TechStack } from "../reusable/consts";

const IconStyles = {
  height: "50px",
  transition: "transform 0.2s",
  ":hover": { transform: "scale(1.2)" },
};

export const Home = () => {
  return (
    <Box
      // TODO: adjust height to allow for footer links to work
      style={{
        position: "absolute",
        top: 120,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2,
      }}>
      <Typography variant='h1' align='center' gutterBottom>
        My Tech Stack
      </Typography>
      <Stack spacing={2}>
        <Stack
          direction='row'
          padding={3}
          spacing={3}
          justifyContent='center'
          zIndex={999}>
          <Tooltip title={TechStack.React} arrow>
            <Box component='img' src='/React.png' sx={IconStyles} />
          </Tooltip>
          <Tooltip title={TechStack.JavaScript} arrow>
            <Box component='img' src='/JavaScript.png' sx={IconStyles} />
          </Tooltip>
          <Tooltip title={TechStack.TypeScript} arrow>
            <Box component='img' src='/TypeScript.png' sx={IconStyles} />
          </Tooltip>
          <Tooltip title={TechStack.GraphQL} arrow>
            <Box component='img' src='/GraphQL.png' sx={IconStyles} />
          </Tooltip>
          <Tooltip title={TechStack.HTML} arrow>
            <Box component='img' src='/HTML5.png' sx={IconStyles} />
          </Tooltip>
          <Tooltip title={TechStack.CSS3} arrow>
            <Box component='img' src='/CSS3.png' sx={IconStyles} />
          </Tooltip>
          <Tooltip title={TechStack.MaterialUI} arrow>
            <Box component='img' src='/MaterialUI.png' sx={IconStyles} />
          </Tooltip>
        </Stack>
        <Stack
          direction='row'
          padding={3}
          spacing={3}
          justifyContent='center'
          zIndex={999}>
          <Tooltip title={TechStack.CSharp} arrow>
            <Box component='img' src='/CSharp.png' sx={IconStyles} />
          </Tooltip>
          <Tooltip title={TechStack.NETCore} arrow>
            <Box component='img' src='/NETcore.png' sx={IconStyles} />
          </Tooltip>
          <Tooltip title={TechStack.Ruby} arrow>
            <Box component='img' src='/Ruby.png' sx={IconStyles} />
          </Tooltip>
          <Tooltip title={TechStack.RubyOnRails} arrow>
            <Box component='img' src='/RubyonRails.png' sx={IconStyles} />
          </Tooltip>
          <Tooltip title={TechStack.PostgresSQL} arrow>
            <Box component='img' src='/PostgresSQL.png' sx={IconStyles} />
          </Tooltip>
          <Tooltip title={TechStack.MongoDB} arrow>
            <Box component='img' src='/MongoDB.png' sx={IconStyles} />
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  );
};
