import React from "react";
import { Menu } from "lucide-react";

const Header = ({ setOpen }) => {
  return (
    <header className="h-16 bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center h-full px-4">
        <h1 className="text-xl font-bold">Your Header</h1>
        <nav>
          <ul className="hidden md:flex space-x-6">
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
            }}
            className="w-8 h-10 text-gray-700"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
