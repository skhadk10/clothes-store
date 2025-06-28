import { useLocation, Navigate } from "react-router-dom";

const CheckAuth = ({ isAuthenticated, user, children }) => {
  const location = useLocation();

  console.log(location.pathname, isAuthenticated);

  if (location.pathname === "/") {
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" />;
    } else {
      if (user?.role === "admin") {
        return <Navigate to="/admin/dashboard" />;
      } else {
        return <Navigate to="/shop/home" />;
      }
    }
  }

  // if the user is not authenticated and try to access other page then the login and registry page then navigate to auh/login page
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  // if the user is authenticated and  try to access the login and register page and if its admin then navigate to admin dasboard otherwise to shop home page
  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  // if the user is authenticated and not admin and try to access the admin page then navigate to unauth page
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  // if the user is authenticated and not admin and try to access the shop page then navigate to unauth page
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  // Handle wrong or non-existent URLs
  // if (
  //   ![
  //     "/auth/login",
  //     "/auth/register",
  //     "/shop/home",
  //     "/admin/dashboard",
  //     "/unauth-page",
  //   ].some((path) => location.pathname.startsWith(path))
  // ) {
  //   return (
  //     <Navigate to="/wrong-page" />
      // <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      //   <h1 className="text-4xl font-bold text-red-500">
      //     404 - Page Not Found
      //   </h1>
      //   <p className="text-lg mt-4">
      //     The page you are looking for does not exist.
      //   </p>
      //   <Link
      //     to="/shop/home"
      //     className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      //   >
      //     Go Back to Home
      //   </Link>
      // </div>
  //   );
  // }

  return <>{children}</>;
};

export default CheckAuth;
