import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { Testimonials } from "./pages/Testimonials";
import { Home } from "./pages/Home";
import ContactForm from "./pages/Contact";
import { Stack } from "@mui/material";
import Layout from "./components/Layout";
import Resume from "./pages/Resume";
// import { Resume } from "./pages/Resume";

const App = () => {
  return (
    <Stack height={"100%"}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/contact' element={<ContactForm />} />
            <Route path='/' element={<Home />} />{" "}
            {/* This will redirect to Home for the base path */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </Stack>
  );
};
export default App;
