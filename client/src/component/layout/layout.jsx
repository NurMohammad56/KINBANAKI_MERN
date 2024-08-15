import React from "react";
import AppNavBar from "./appNavBar";
import Footer from "./footer";
import { Toaster } from "react-hot-toast";

const Layout = (props) => {
  return (
    <div>
      <AppNavBar />
      {props.children}
      <Toaster position="top-center" reverseOrder={false} />
      <Footer />
    </div>
  );
};

export default Layout;
