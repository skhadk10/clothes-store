import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/authLayout";
import AuthRegister from "./pages/auth/register";
import AuthLogin from "./pages/auth/login";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
    
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="register" element={<AuthRegister />} />
          <Route path="login" element={<AuthLogin />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
