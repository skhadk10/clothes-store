import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { registerUser } from "@/store/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
const AuthRegister = () => {
  const [login, setlogin] = useState(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(login)).then((data) => {
      if (data?.payload?.success) {
        console.log(data?.payload?.message, "success");
        toast(data?.payload?.message);
      }

      navigate("/login");
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center gap-6 w-full max-w-md p-8 border rounded-xl shadow-lg bg-white">
        <h2 className="text-3xl font-bold mb-6">Register</h2>
        <div className="w-full space-y-4">
          <div>
            <Label className="text-lg">First Name</Label>
            <Input
              id="firstName"
              type="text"
              name="firstName"
              value={login.firstName}
              placeholder="Enter your email"
              className="h-12 text-lg px-4"
              onChange={(e) =>
                setlogin({ ...login, firstName: e.target.value })
              }
            />
          </div>
          <div>
            <Label className="text-lg">Last Name</Label>
            <Input
              id="lastName"
              type="text"
              name="lastName"
              value={login.lastName}
              onChange={(e) => setlogin({ ...login, lastName: e.target.value })}
              placeholder="Enter your email"
              className="h-12 text-lg px-4"
            />
          </div>
          <div>
            <Label className="text-lg">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={login.email}
              onChange={(e) => setlogin({ ...login, email: e.target.value })}
              placeholder="Enter your email"
              className="h-12 text-lg px-4"
            />
          </div>
          <div>
            <Label className="text-lg">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              value={login.password}
              onChange={(e) => setlogin({ ...login, password: e.target.value })}
              placeholder="Enter your password"
              className="h-12 text-lg px-4"
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Register
        </button>
        <div className="flex flex-col items-center gap-2 mt-4">
          <p className="text-gray-500">Already have an account?</p>
          <Button
            onClick={() => navigate("/auth/login")}
            variant="link"
            className="text-blue-600 hover:underline"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthRegister;
