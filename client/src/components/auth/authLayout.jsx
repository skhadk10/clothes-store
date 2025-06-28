import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../common/sidebar";
import Header from "../common/header";
import CommonChildrenRenderingPage from "../common/commonrenderpage";
import CommonSidebar from "../common/common-sidebar";

const AuthLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header setOpen={setOpen} />
      {/* Sidebar (mobile) */}
      <AdminSidebar open={open} setOpen={setOpen} />

      <div className="flex flex-1">
        {/* Sidebar */}


        {/* Main content area */}
        <CommonChildrenRenderingPage />
      </div>
    </div>
  );
};

export default AuthLayout;
