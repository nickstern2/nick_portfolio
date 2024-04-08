import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { Testimonials } from "./pages/Testimonials";
import { Home } from "./pages/Home";
import ContactForm from "./pages/Contact";
import { Stack } from "@mui/material";
import Layout from "./components/Layout";
import Resume from "./pages/Resume";
import { RouteNames } from "./reusable/enum-list";
// import { Resume } from "./pages/Resume";

const App = () => {
  return (
    <Stack height={"100%"}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={RouteNames.Home} element={<Home />} />
            <Route path={RouteNames.Testimonials} element={<Testimonials />} />
            <Route path={RouteNames.Projects} element={<Projects />} />
            <Route path={RouteNames.Resume} element={<Resume />} />
            <Route path={RouteNames.Contact} element={<ContactForm />} />
            <Route path={RouteNames.Home} element={<Home />} />
            {/* This will redirect to Home for the base path */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </Stack>
  );
};
export default App;
