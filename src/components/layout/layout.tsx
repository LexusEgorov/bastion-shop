import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";


function Layout() : JSX.Element{
  return (
    <div className="Layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
