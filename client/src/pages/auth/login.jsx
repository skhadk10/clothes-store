import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "@/store/auth";
import { toast } from "sonner";

const AuthLogin = () => {
  const [login, setlogin] = React.useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(login)).then((data) => {
      if (data?.payload?.success) {
        console.log(data?.payload?.message, "success");
        toast(data?.payload?.message);
      }
    });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center gap-6 w-full max-w-md p-8 border rounded-xl shadow-lg bg-white">
        <h2 className="text-3xl font-bold mb-6">Login</h2>
        <div className="w-full space-y-4">
          <div>
            <Label htmlFor="email" className="text-lg">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="h-12 text-lg px-4"
              onChange={(e) => setlogin({ ...login, email: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-lg">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="h-12 text-lg px-4"
              onChange={(e) => setlogin({ ...login, password: e.target.value })}
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
        <div className="flex flex-col items-center gap-2 mt-4">
          <p className="text-gray-500">Don't have an account?</p>
          <Button
            onClick={() => navigate("/auth/register")}
            variant="link"
            className="text-blue-600 hover:underline"
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthLogin;
