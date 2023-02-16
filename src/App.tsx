import * as React from "react";
import { ChakraProvider, Stack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

// require('dotenv').config()

export const App = () => (
  <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
      </Routes>
    </Router>
  </ChakraProvider>
);
