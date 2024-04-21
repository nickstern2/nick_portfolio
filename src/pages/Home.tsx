import {
  Box,
  Container,
  Stack,
  Typography,
  Tooltip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { TechStack } from "../reusable/consts";
import CSharpIcon from "../assets/CSharp.png";
import ReactIcon from "../assets/React.png";
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
import { Theme } from "@mui/material/styles/createTheme";

const IconStyles = (theme: Theme) => ({
  width: "auto",
  height: "50px",
  transition: "transform 0.2s",
  ":hover": {
    transform: "scale(1.2)",
  },
  [theme.breakpoints.down("md")]: {
    height: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "30px",
  },
});

export const Home = () => {
  const theme = useTheme();
  // TODO: update with hook
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth='lg'
      style={{ paddingTop: "20px", paddingBottom: "20px" }}>
      <Typography
        variant='h2'
        align='center'
        gutterBottom
        // TODO: only necessary on mobile?
        sx={{ zIndex: 999, position: "relative" }}>
        My Tech Stack
      </Typography>
      <Stack spacing={2}>
        <Stack
          direction='row'
          flexWrap='wrap'
          justifyContent='center'
          zIndex={999}
          spacing={isMobile ? 1 : 2}>
          {[
            { icon: ReactIcon, label: TechStack.React },
            { icon: JavaScriptIcon, label: TechStack.JavaScript },
            { icon: TypeScriptIcon, label: TechStack.TypeScript },
            { icon: GraphQLIcon, label: TechStack.GraphQL },
            { icon: HTML5Icon, label: TechStack.HTML },
            { icon: CSS3Icon, label: TechStack.CSS3 },
            { icon: MaterialUIIcon, label: TechStack.MaterialUI },
          ].map((item) => (
            <Tooltip title={item.label} arrow key={item.label}>
              <Box component='img' src={item.icon} sx={IconStyles(theme)} />
            </Tooltip>
          ))}
        </Stack>
        <Stack
          direction='row'
          flexWrap='wrap'
          justifyContent='center'
          zIndex={999}
          spacing={isMobile ? 1 : 2}>
          {[
            { icon: CSharpIcon, label: TechStack.CSharp },
            { icon: NETcoreIcon, label: TechStack.NETCore },
            { icon: RubyIcon, label: TechStack.Ruby },
            { icon: RubyonRailsIcon, label: TechStack.RubyOnRails },
            { icon: PostgresSQLIcon, label: TechStack.PostgresSQL },
            { icon: MongoDBIcon, label: TechStack.MongoDB },
          ].map((item) => (
            <Tooltip title={item.label} arrow key={item.label}>
              <Box component='img' src={item.icon} sx={IconStyles(theme)} />
            </Tooltip>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};
