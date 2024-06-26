import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { paletteNavBar } from "../reusable/Theme";

export const Footer: React.FC = () => {
  const emailAddress = "nickstern2@gmail.com";
  return (
    <Box
      sx={{
        bgcolor: paletteNavBar.main,
        // TODO: Adjust color
        color: "white",
        py: 3,
        px: 2,
        mt: "auto",
        position: "fixed",
        bottom: 0,
        right: 0,
        left: 0,
      }}>
      <Typography variant='body1' sx={{ textAlign: "center", mb: 2 }}>
        Connect with me on social media
      </Typography>
      <Stack direction='row' justifyContent='center' spacing={2}>
        <Link
          href='https://www.linkedin.com/in/nicholas-stern-869aa712b'
          target='_blank'
          color='inherit'>
          <LinkedInIcon fontSize='large' />
        </Link>
        <Link
          href='https://github.com/nickstern2'
          target='_blank'
          color='inherit'>
          <GitHubIcon fontSize='large' />
        </Link>
        <Link href={`mailto:${emailAddress}`} color='inherit'>
          <EmailIcon fontSize='large' />
        </Link>
      </Stack>
    </Box>
  );
};
