import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { Footer } from "./Footer";
import NavBar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar />
      <Box component='main' sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
