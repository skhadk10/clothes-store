import React from "react";

const CommonSidebar = ({ items }) => {
  return (
    <ul className="space-y-2">
      <li>
        <a
          href={items.path} // Changed from items.link to items.path
          className="flex items-center p-3 hover:bg-gray-700 rounded-lg transition-all"
        >
          <h1 className="ml-2 mt-2.5 text-xl  font-bold text-white">
            {items.title}
          </h1>
        </a>
      </li>
    </ul>
  );
};

export default CommonSidebar;
