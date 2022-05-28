import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <title>Anshul Kanwar</title>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
