import React, { useState } from "react";
import Header from "../common/header";
import AdminSidebar from "../common/sidebar";
import CommonSidebar from "../common/common-sidebar";
import CommonChildrenRenderingPage from "../common/commonrenderpage";
import { AdminHeader } from "../common/comon";
import { useSelector } from "react-redux";

const AdminLayout = () => {
  const [open, setOpen] = useState(false);
  const {user}=useSelector((state) => state.auth);
  return (
    <div className="flex flex-col min-h-screen">
      <Header setOpen={setOpen} />
      <AdminSidebar setOpen={setOpen} open={open} />
      <div className="flex flex-1">

        <div className="hidden md:flex flex-col w-64 bg-gray-800 text-white h-[calc(100vh-4rem)] sticky top-16 z-40 shadow-xl">
        {user &&
          AdminHeader.map((item) => {
            return (
              <div key={item.id} >
                <CommonSidebar items={item} />
              </div>
            );
          })}
        </div>
        <CommonChildrenRenderingPage />
      </div>
    </div>
  );
};

export default AdminLayout;
