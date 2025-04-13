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

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
    
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="register" element={<AuthRegister />} />
          <Route path="login" element={<AuthLogin />} />
        </Route>
        <Route path="/shop" element={<ShopLayout />}>
          {/* <Route path="register" element={<AuthRegister />} />
          <Route path="login" element={<AuthLogin />} /> */}
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AuthDashboard />} />
          <Route path="product" element={<AuthProduct />} />
          <Route path="order" element={<AuthOrder />} />
        </Route>

        
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
