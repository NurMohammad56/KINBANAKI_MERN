import React from "react";
import AppNavBar from "./appNavBar";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <div>
      <AppNavBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
