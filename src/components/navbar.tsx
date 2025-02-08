import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { paletteNavBar, theme } from "../reusable/Theme";
import SiteLogo from "../assets/nick_stern_site_logo.png";
import { useGetIsMobile } from "../hooks/useIsMobile";
// TODO: Update with const route names
const pages = [
  { title: "Home", path: "/" },
  { title: "Projects", path: "/projects" },
  { title: "Resume", path: "/resume" },
  // TODO: Add back when completed
  // { title: "Contact", path: "/contact" },
];

const NavBar = () => {
  const { isMobile } = useGetIsMobile();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position='sticky'
      // TODO: Prevent stuff from showing udnerneath
      sx={{ top: 0, background: paletteNavBar.main }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box component='img' src={SiteLogo} sx={{ height: "50px" }} />
          <Typography
            variant='h6'
            noWrap
            component={Link}
            to='/' // TODO: fix this
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}></Typography>

          {/* Mobile view */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'>
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                // TODO: apply to only mobile
                "& .MuiPaper-root": {
                  // This targets the inner Paper component of the Menu
                  backgroundColor: theme.palette.primary.dark,
                },
              }}>
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign='center'
                    component={Link}
                    to={page.path}
                    style={{
                      textDecoration: "none",
                      color: theme.palette.text.primary,
                      fontSize: theme.spacing(2),
                      fontWeight: 600,
                    }}>
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop view */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}>
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
