import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/authLayout";
import AuthRegister from "./pages/auth/register";
import AuthLogin from "./pages/auth/login";
import { Toaster } from "./components/ui/sonner";
import ShopLayout from "./components/shop/shopLayout";
import AdminLayout from "./components/admin/adminLayout";
import AuthDashboard from "./pages/admin/auth-dashboard";
import AuthProduct from "./pages/admin/authProduct";
import AuthOrder from "./pages/admin/auth-order";
import { useEffect } from "react";
import CheckAuth from "./components/common/checkAuth";
import ShoppingHome from "./pages/shop/home";
import ShoppingListing from "./pages/shop/listing";
import ShoppingAccount from "./pages/shop/account";
import ShoppingCheckout from "./pages/shop/checkout";

import { checkAuth } from "./store/auth";
import { useDispatch, useSelector } from "react-redux";
import UnauthPage from "./pages/unauth-page";

function App() {
  const { isLoading, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  // Show loading state until auth check completes
  if (isLoading) {
    return <div className="text-4xl">Loading...</div>;
  }
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
            ></CheckAuth>
          }
        />
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="register" element={<AuthRegister />} />
          <Route path="login" element={<AuthLogin />} />
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShopLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AuthDashboard />} />
          <Route path="products" element={<AuthProduct />} />
          <Route path="orders" element={<AuthOrder />} />
        </Route>
        <Route path="/unauth-page" element={<UnauthPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
