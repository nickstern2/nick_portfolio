import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { Footer } from "./Footer";
import NavBar from "./Navbar";
import { useLocation } from "react-router-dom";
import { RouteNames } from "../resuable/enum-list";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // Determine if the current route is the resume route
  const isResumeRoute = location.pathname === RouteNames.Resume;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar />
      <Box component='main' sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      {!isResumeRoute && <Footer />}
    </Box>
  );
};

export default Layout;
