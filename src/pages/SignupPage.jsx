import { Link } from "react-router-dom";
import { Input, Button } from "../components/common";
import { useState } from "react";

export default function SignupPage() {
  const [data, setData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="w-screen h-screen text-black bg-white font-poppins">
      <div className="flex flex-col items-center justify-center w-full h-full lg:flex-row gap-x-16 gap-y-16">
        <div className="w-full h-[400px] lg:w-[700px]  lg:h-full bg-signupBackground" />

        <div className="flex flex-col w-full h-full pl-16 lg:justify-center items-left">
          <div className="flex flex-col gap-y-3 ">
            <h1 className="pb-4 text-5xl font-bold lg:text-4xl">Sign up</h1>

            <h2 className="pb-6 text-2xl lg:text-xl">
              Already have account?{"  "}
              <Link
                to="/login"
                className="text-blue-600 outline-none hover:underline"
              >
                Login
              </Link>
            </h2>

            <form
              autoComplete="off"
              className="flex flex-col items-center justify-center lg:w-64 w-72 gap-y-3"
              onSubmit={handleSubmit}
            >
              <Input
                solid
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />
              <Input
                solid
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              <Input
                solid
                placeholder="Password"
                name="password"
                type="password"
                onChange={handleChange}
              />
              <Button solid className="mt-2">
                Create Account
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
