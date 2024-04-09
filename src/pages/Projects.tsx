import {
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import { SummaryComponent } from "../reusable/SummaryComponent";
import { jobTitle, projects } from "../reusable/consts";
import { useGetIsMobile } from "../hooks/useIsMobile";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const handleImageClick = (link: string) => {
  window.open(link, "_blank");
};

export const ProjectList = () => {
  const { isMobile } = useGetIsMobile();

  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      spacing={2}
      justifyContent='space-between'
      paddingX={2}
      margin={4}>
      <Box width={isMobile ? "100%" : "50%"}>
        <Typography variant='h1' gutterBottom>
          Nicholas Stern
        </Typography>
        <Typography variant='h2' gutterBottom>
          {jobTitle}
        </Typography>
        <SummaryComponent />
      </Box>
      <Box width={isMobile ? "100%" : "50%"} minHeight='100vh' padding={2}>
        <Typography variant='h2' gutterBottom>
          Projects
        </Typography>
        <Stack spacing={2}>
          {projects.map((project, index) => (
            <ButtonBase
              key={index}
              component='span' // Use "span" to avoid invalid HTML like button inside button
              onClick={
                isMobile ? undefined : () => handleImageClick(project.link)
              }
              sx={{
                display: "block",
                textAlign: "initial",
              }}>
              <Card
                sx={{
                  background: "inherit",
                  transition: "0.3s",

                  ":hover": {
                    // backgroundColor: "#16274A",
                    backgroundColor: "rgba(22, 39, 74, 0.7)",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
                    ".titleHover": {
                      // Add a class to the Typography component and reference it here
                      color: "#52D3D4",
                    },
                  },
                }}>
                <CardContent>
                  {/* //TODO: add link for mobile*/}
                  <Stack display='flex' alignItems='center' flexDirection='row'>
                    <Typography
                      marginRight={0.5}
                      onClick={
                        isMobile
                          ? () => handleImageClick(project.link)
                          : undefined
                      }
                      variant='h3'
                      className='titleHover'>
                      {project.title}
                    </Typography>
                    <SvgIcon
                      className='titleHover'
                      onClick={
                        isMobile
                          ? () => handleImageClick(project.link)
                          : undefined
                      }
                      children={
                        <ArrowOutwardIcon
                          viewBox='0 0 24 26'
                          height='20px'
                          width='20px'
                        />
                      }
                    />
                  </Stack>

                  <Typography>{project.description}</Typography>
                  <Stack direction='row' flexWrap='wrap' marginTop={2}>
                    {project.techStack.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        sx={{
                          color: "#53D3D5",
                          background: "#142A3D",
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </ButtonBase>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default ProjectList;
