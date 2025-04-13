import React from "react";

const CommonSidebar = () => {
  return (
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
  );
};

export default CommonSidebar;
