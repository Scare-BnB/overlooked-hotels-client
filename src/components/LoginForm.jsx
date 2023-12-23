import { Link } from "react-router-dom";
import axiosClient from "../utils/axios";
import { useState } from "react";

// # Setting useState for email and password.
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Async and await function for Axios, including URL to backend
  const Login = async () => {
    try {
      const response = await axiosClient.post("/users/login", {
        email: email,
        password: password,
      });
      // setting JWT for session
      localStorage.setItem("token", response.data.jwt);
      localStorage.setItem("admin", response.data.admin);
    } catch (error) {
      console.error(error);
    }
  };
  // main content for form
  return (
    <div className="hero max-h-screen py-36 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <h1 className="text-4xl text-center mb-8">Log In</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email address</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
                onChange={(event) => setEmail(event.target.value)}
              />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="text-center py-2 max-w-md mx-auto">
                Don't have an account?{" "}
                <Link className="underline text" to={"/register"}>
                  Register
                </Link>
              </div>
            </div>
            <div className="form-control mt-6">
              <button type="button" onClick={Login} className="btn btn-primary">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
