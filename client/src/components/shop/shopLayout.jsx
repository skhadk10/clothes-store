import React, { useState } from "react";
import Header from "../common/header";
import AdminSidebar from "../common/sidebar";
import CommonSidebar from "../common/common-sidebar";
import CommonChildrenRenderingPage from "../common/commonrenderpage";

const ShopLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <Header setOpen={setOpen}/>
      <AdminSidebar setOpen={setOpen} open={open} />
      <div className="flex flex-1">
        <CommonSidebar />
        <CommonChildrenRenderingPage />
      </div>
    </div>
  );
};

export default ShopLayout;
