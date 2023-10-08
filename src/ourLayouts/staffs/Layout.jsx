import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Taptop from "./TapTop";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ThemeCustomize from "./ThemeCustomizer";
import Footer from "./Footer";
import CustomizerContext from "../../_helper/Customizer";
import AnimationThemeContext from "../../_helper/AnimationTheme";
import ConfigDB from "../../Config/ThemeConfig";
import Loader from "../student/Loader";
const StaffLayout = ({ children, classNames, ...rest }) => {
  const { layout } = useContext(CustomizerContext);
  const { sidebarIconType } = useContext(CustomizerContext);

  const layout1 = localStorage.getItem("sidebar_layout") || layout;
  const sideBarIcon =
    localStorage.getItem("sidebar_icon_type") || sidebarIconType;
  const location = useLocation();
  const { animation } = useContext(AnimationThemeContext);
  const animationTheme =
    localStorage.getItem("animation") ||
    animation ||
    ConfigDB.data.router_animation;

  return (
    <Fragment>
      <Loader />
      <Taptop />
      <div
        className={`page-wrapper ${layout1}`}
        sidebar-layout={sideBarIcon}
        id="pageWrapper"
      >
        <Header />
        <div className="page-body-wrapper">
          <Sidebar />
          <div className="page-body">
            <TransitionGroup {...rest}>
              <CSSTransition
                key={location.key}
                timeout={100}
                classNames={animationTheme}
                unmountOnExit
              >
                <div>
                  <div>{children}</div>
                </div>
              </CSSTransition>
            </TransitionGroup>
          </div>
          <Footer />
        </div>
      </div>
      <ThemeCustomize />
      <ToastContainer />
    </Fragment>
  );
};
export default StaffLayout;
