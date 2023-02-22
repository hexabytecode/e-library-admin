import * as React from "react";
import { ChakraProvider, Stack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import AboutUs from "./Pages/Aboutus";
import ContactUs from "./Pages/ContactUs";
import Nav from "./Components/Nav";

function Root() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route index element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/aboutus" element={ <AboutUs /> } />
        <Route path="/contactus" element={ <ContactUs /> } />
      </Routes>
    </div>
  );
}

export const App = () => (
  <ChakraProvider>
    <Router>
      <Root />
    </Router>
  </ChakraProvider>
);