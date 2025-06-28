import React from "react";
import { Menu } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/store/auth";

const Header = ({ setOpen }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const LogOut = () => {
    dispatch(logoutUser());
  };
  const isLoggedIn = !!user;
  const isUser = user?.role === "user";

  return (
    <header className="h-16 bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center h-full px-4">
        <h1 className="text-xl font-bold">Your Header</h1>

        <nav>
          <ul className="hidden md:flex space-x-6">
            {(!isLoggedIn || isUser) && (
              <>
                <li>
                  <a href="#" className="hover:text-red-200">
                    Men
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-200">
                    Women
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-200">
                    Kid
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-200">
                    accessories
                  </a>
                </li>
              </>
            )}
            {isLoggedIn && (
              <>
                <li>
                  <a
                    onClick={() => LogOut()}
                    href="#"
                    className="hover:text-red-200"
                  >
                    LogOut
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-200">
                    {user.firstName}
                  </a>
                </li>
              </>
            )}
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
