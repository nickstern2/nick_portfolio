import { Box, Stack, Typography, Tooltip } from "@mui/material";
import { TechStack } from "../reusable/consts";
import CSharpIcon from "../assets/CSharp.png";
import ReactIconIcon from "../assets/React.png";
import JavaScriptIcon from "../assets/JavaScript.png";
import TypeScriptIcon from "../assets/TypeScript.png";
import GraphQLIcon from "../assets/GraphQL.png";
import HTML5Icon from "../assets/HTML5.png";
import CSS3Icon from "../assets/CSS3.png";
import MaterialUIIcon from "../assets/MaterialUI.png";
import NETcoreIcon from "../assets/NETcore.png";
import RubyIcon from "../assets/Ruby.png";
import RubyonRailsIcon from "../assets/RubyonRails.png";
import PostgresSQLIcon from "../assets/PostgresSQL.png";
import MongoDBIcon from "../assets/MongoDB.png";

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
            <Box component='img' src={ReactIconIcon} sx={IconStyles} />
          </Tooltip>
          <Tooltip title={TechStack.JavaScript} arrow>
            <Box component='img' src={JavaScriptIcon} sx={IconStyles} />
          </Tooltip>
          <Tooltip title={TechStack.TypeScript} arrow>
            <Box component='img' src={TypeScriptIcon} sx={IconStyles} />
          </Tooltip>
          <Tooltip title={TechStack.GraphQL} arrow>
            <Box component='img' src={GraphQLIcon} sx={IconStyles} />
          </Tooltip>
          <Tooltip title={TechStack.HTML} arrow>
            <Box component='img' src={HTML5Icon} sx={IconStyles} />
          </Tooltip>
          <Tooltip title={TechStack.CSS3} arrow>
            <Box component='img' src={CSS3Icon} sx={IconStyles} />
          </Tooltip>
          <Tooltip title={TechStack.MaterialUI} arrow>
            <Box component='img' src={MaterialUIIcon} sx={IconStyles} />
          </Tooltip>
        </Stack>
        <Stack
          direction='row'
          padding={3}
          spacing={3}
          justifyContent='center'
          zIndex={999}>
          {/* <Box component='img' src='/CSharp.png' sx={IconStyles} /> */}
          <Tooltip title={TechStack.CSharp} arrow>
            <Box component='img' src={CSharpIcon} sx={IconStyles} />
          </Tooltip>
          <Tooltip title={TechStack.NETCore} arrow>
            <Box component='img' src={NETcoreIcon} sx={IconStyles} />
          </Tooltip>
          <Tooltip title={TechStack.Ruby} arrow>
            <Box component='img' src={RubyIcon} sx={IconStyles} />
          </Tooltip>
          <Tooltip title={TechStack.RubyOnRails} arrow>
            <Box component='img' src={RubyonRailsIcon} sx={IconStyles} />
          </Tooltip>
          <Tooltip title={TechStack.PostgresSQL} arrow>
            <Box component='img' src={PostgresSQLIcon} sx={IconStyles} />
          </Tooltip>
          <Tooltip title={TechStack.MongoDB} arrow>
            <Box component='img' src={MongoDBIcon} sx={IconStyles} />
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  );
};
