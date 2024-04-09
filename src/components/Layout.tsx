import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { Footer } from "./Footer";
import NavBar from "./Navbar";
import { useLocation } from "react-router-dom";
import { RouteNames } from "../reusable/consts";
import { ParticlesBackground } from "../reusable/ParticlesBackground"; // Import the ParticlesBackground component
import { InteractiveBackground } from "../reusable/InteractiveBackground";
import { theme } from "../reusable/Theme";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // Assuming you define RouteNames.Home or use a condition to identify the Home page
  const isHomePage = location.pathname === RouteNames.Home;
  // Determines if footer will display
  const shouldHideFooter =
    location.pathname === RouteNames.Resume ||
    location.pathname === RouteNames.Projects;
  return (
    <>
      <InteractiveBackground>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            background: "#131926",
            // background: theme.palette.primary.dark,
          }}>
          <NavBar />
          {/* Conditionally render ParticlesBackground when on the Home page */}
          {!!isHomePage && <ParticlesBackground />}

          <Box component='main' sx={{ flexGrow: 1 }}>
            {children}
          </Box>
          {!shouldHideFooter && <Footer />}
        </Box>
      </InteractiveBackground>
    </>
  );
};

export default Layout;
