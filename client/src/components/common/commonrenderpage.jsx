import React from "react";
import { Outlet } from "react-router-dom";

function CommonChildrenRenderingPage() {
  return (
    <main className="flex-1 p-6 bg-gray-100">
      {/* Your page content goes here */}

      <Outlet />
    </main>
  );
}

export default CommonChildrenRenderingPage;
