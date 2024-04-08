import { Box, Stack, Typography, Tooltip } from "@mui/material";
import { ParticlesBackground } from "../reusable/ParticlesBackgrouns";

const IconStyles = {
  height: "50px",
  transition: "transform 0.2s",
  ":hover": { transform: "scale(1.2)" },
};

export const Home = () => {
  return (
    <div>
      <ParticlesBackground />
      <div
        style={{
          position: "absolute",
          top: 120,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
        }}>
        <Typography variant='h2' align='center' gutterBottom>
          My Tech Stack
        </Typography>
        <Stack
          direction='row'
          padding={3}
          spacing={3}
          justifyContent='center'
          zIndex={999}>
          <Tooltip title='React' arrow>
            <Box component='img' src='/React.png' sx={IconStyles} />
          </Tooltip>
          <Tooltip title='JavaScript' arrow>
            <Box component='img' src='/JavaScript.png' sx={IconStyles} />
          </Tooltip>
          <Tooltip title='TypeScript' arrow>
            <Box component='img' src='/TypeScript.png' sx={IconStyles} />
          </Tooltip>
          <Tooltip title='GraphQL' arrow>
            <Box component='img' src='/GraphQL.png' sx={IconStyles} />
          </Tooltip>
          <Tooltip title='HTML5' arrow>
            <Box component='img' src='/HTML5.png' sx={IconStyles} />
          </Tooltip>
          <Tooltip title='CSS3' arrow>
            <Box component='img' src='/CSS3.png' sx={IconStyles} />
          </Tooltip>
        </Stack>
      </div>
    </div>
  );
};
