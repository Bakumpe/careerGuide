import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Career from "./pages/Career";
import CareerCoach from "./pages/CareerCoach";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { UserProvider } from "./context.jsx/UserContext";
import ProtectedRoute from "./protection/ProtectedRoutes";
import Login from "./login/Login";
import { MantineProvider } from "@mantine/core";
import Profile from "./pages/Profile";
import Health from "./careers/Health";
import Business from "./careers/Business";
import Computer from "./careers/Computer";
import Entertainment from "./careers/Entertainment";
import PublicService from "./careers/PublicService";
import BusinessCoach from "./coaches/BusinessCoach";
import ComputerCoach from "./coaches/ComputerCoach";
import EntertainmentCoach from "./coaches/EntertainmentCoach";
import HealthCoach from "./coaches/HealthCoach";
import Sports from "./careers/Sports";
import SportsCoach from "./coaches/SportsCoach";

function App() {
  return (
    <>
      <MantineProvider>
        <UserProvider>
          <Routes>
            <Route path={"/login"} element={<Login />} />
            <Route path={"/"} element={<Home />} />
            <Route path={"/career"} element={<Career />} />
            <Route path={"/careercoach"} element={<CareerCoach />} />
            <Route path={"/aboutus"} element={<AboutUs />} />
            <Route path={"/contactus"} element={<ContactUs />} />

            <Route element={<ProtectedRoute />}>
              {/* protected files  */}
              <Route path={"/profile"} element={<Profile />} />
              <Route path={"/health"} element={<Health />} />
              <Route path={"/business"} element={<Business />} />
              <Route path={"/computer"} element={<Computer />} />
              <Route path={"/sports"} element={<Sports />} />
              <Route path={"/entertainment"} element={<Entertainment />} />
              <Route path={"/publicservice"} element={<PublicService />} />
              <Route path={"/businesscoach"} element={<BusinessCoach />} />
              <Route path={"/computercoach"} element={<ComputerCoach />} />
              <Route
                path={"/entertainmentcoach"}
                element={<EntertainmentCoach />}
              />
              <Route path={"/healthcoach"} element={<HealthCoach />} />
              <Route path={"/sportscoach"} element={<SportsCoach />} />
              {/* protected files */}
            </Route>
          </Routes>
        </UserProvider>
      </MantineProvider>
    </>
  );
}

export default App;
