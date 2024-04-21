import { Stack, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ContactForm from "./pages/Contact";
import { Home } from "./pages/Home";
import ProjectList from "./pages/Projects";
import Resume from "./pages/Resume";
import { Testimonials } from "./pages/Testimonials";
import { theme } from "./reusable/Theme";
import { RouteNames } from "./reusable/consts";

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Stack>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path={RouteNames.Home} element={<Home />} />
                <Route path={RouteNames.Projects} element={<ProjectList />} />
                <Route path={RouteNames.Resume} element={<Resume />} />
                {/* <Route path={RouteNames.Contact} element={<ContactForm />} /> */}
                <Route path={RouteNames.Home} element={<Home />} />
                {/* This will redirect to Home for the base path */}
              </Routes>
            </Layout>
          </BrowserRouter>
        </Stack>
      </ThemeProvider>
    </>
  );
};
export default App;
