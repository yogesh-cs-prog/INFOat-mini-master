import React from "react";
import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {
  configureFakeBackend,
  authHeader,
  handleResponse,
} from "../Services/fack.backend";
import Callback from "../Auth/Callback";
import Loader from "../Layout/Loader";
import { authRoutes } from "./AuthRoutes";
import LayoutRoutes from "../Route/LayoutRoutes";
import Signin from "../Auth/Signin";
import PrivateRoute from "./PrivateRoute";
import { classes } from "../Data/Layouts";
import Welcome from "../pages/Welcome";
import Dashboard from "../pages/students/StudentProfile";
import StudentProfile from "../pages/students/StudentProfile";
import StaffDashboard from "../pages/staffs/Dashboard";
import EditProfile from "../pages/students/EditProfile";
import Profile from "../pages/students/Profile";
// setup fake backend
configureFakeBackend();
const Routers = () => {
  const login = useState(JSON.parse(localStorage.getItem("login")))[0];
  const [authenticated, setAuthenticated] = useState(false);
  const jwt_token = localStorage.getItem("token");
  const defaultLayoutObj = classes.find(
    (item) => Object.values(item).pop(1) === "compact-wrapper"
  );
  const layout =
    localStorage.getItem("layout") || Object.keys(defaultLayoutObj).pop();

  useEffect(() => {
    let abortController = new AbortController();
    const requestOptions = { method: "GET", headers: authHeader() };
    fetch("/users", requestOptions).then(handleResponse);

    setAuthenticated(JSON.parse(localStorage.getItem("authenticated")));
    console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
    console.disableYellowBox = true;
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <BrowserRouter basename={"/"}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={"/"} element={<PrivateRoute />}>
            {login || authenticated || jwt_token ? (
              <>
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}`}
                  element={
                    <Navigate
                      to={`${process.env.PUBLIC_URL}/dashboard/default/${layout}`}
                    />
                  }
                />
                <Route
                  exact
                  path={`/`}
                  element={
                    <Navigate
                      to={`${process.env.PUBLIC_URL}/dashboard/default/${layout}`}
                    />
                  }
                />
              </>
            ) : (
              ""
            )}

            <Route path={`/*`} element={<LayoutRoutes />} />
          </Route>

          {/* Our routes */}
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/student/profile" element={<StudentProfile />}></Route>
          <Route path="/student/" element={<StudentProfile />}></Route>
          <Route
            path="/student/attendence"
            element={<StudentProfile />}
          ></Route>
          <Route path="/student/editprofile" element={<EditProfile />}></Route>
          <Route path="/student/task" element={<StudentProfile />}></Route>

          <Route path="/student/events" element={<StudentProfile />}></Route>
          <Route
            path="/student/achievements"
            element={<StudentProfile />}
          ></Route>

          <Route
            path="/student/raisetickets"
            element={<StudentProfile />}
          ></Route>

          <Route path="/staff/dashboard" element={<StaffDashboard />}></Route>

          {/*  Our routes end */}

          <Route
            path={`${process.env.PUBLIC_URL}/callback`}
            render={() => <Callback />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/login`}
            element={<Signin />}
          />
          {authRoutes.map(({ path, Component }, i) => (
            <Route path={path} element={Component} key={i} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routers;
