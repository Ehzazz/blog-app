import React from "react";

import Topbar from './components/topbar/Topbar'
import Home from "./pages/Home";
import About from "./pages/About";
import Write from "./pages/Write";
import Settings from "./pages/Settings"
import Single from "./pages/Single"
import Login from "./components/login/Login"
import Register from './components/register/Register'


import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WRITE" element={<Write />} />
          <Route path="/ABOUT" element={<About />} />
          <Route path="/PROFILE" element={<Settings />} />
          <Route path="/CONTACT" element={<Single />} />
          <Route path="/LOGIN" element={<Login />} />
          <Route path="/REGISTER" element={<Register />} />

       
        </Routes>
      </BrowserRouter>
      
      
    </>
  );
}

export default App;
