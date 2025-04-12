import { Menu } from "lucide-react";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./sidebar";

const AuthLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="h-16 bg-gray-900 text-white sticky top-0 z-50 shadow-md">
        <div className="flex justify-between items-center h-full px-4">
          <h1 className="text-xl font-bold">Your Header</h1>
          <nav>
            <ul className="hidden lg:flex space-x-6">
              <li>
                <a href="#" className="hover:text-red-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-200">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          
          {/* sidebar Image */}
          <div className="md:hidden flex items-center bg-white rounded-xl p-2 shadow-md">
            <Menu
              onClick={() => {
                setOpen(true);
                console.log("object", open);
              }}
              className="w-8 h-10 text-gray-700"
            />
          </div>
        </div>
      </header>
      {/* Sidebar (mobile) */}
      <AdminSidebar open={open} setOpen={setOpen} />

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="hidden md:flex w-64 bg-gray-800 text-white h-[calc(100vh-4rem)] sticky top-16 z-40 shadow-xl">
          <div className="p-4 w-full">
            <h2 className="text-xl font-bold mb-6 mt-2">Sidebar</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 hover:bg-gray-700 rounded-lg transition-all"
                >
                  <span className="ml-2">Menu 1</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 hover:bg-gray-700 rounded-lg transition-all"
                >
                  <span className="ml-2">Menu 2</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 hover:bg-gray-700 rounded-lg transition-all"
                >
                  <span className="ml-2">Menu 3</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 hover:bg-gray-700 rounded-lg transition-all"
                >
                  <span className="ml-2">Menu 4</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main content area */}
        <main className="flex-1 p-6 bg-gray-100">
          {/* Your page content goes here */}

          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
