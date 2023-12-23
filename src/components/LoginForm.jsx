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
      const response = await axiosClient.post("/users/login",
        {
          email: email,
          password: password,
        }
      );

      localStorage.setItem("token", response.data.jwt);
      localStorage.setItem("admin", response.data.admin);

    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-center"></div>

        <div className="mt-4 grow flex items-center justify-around">
          <div className="-mt-64">
            <h1 className="text-4xl text-center mb-4">Login</h1>
            <form className="max-w-md mx-auto">
              <input
                type="email"
                placeholder="youremail@email.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <button type="button" onClick={Login} className="primary">
                Login
              </button>
              <div className="text-center py-2 max-w-md mx-auto">
                Don't have an account?{" "}
                <Link className="underline text" to={"/register"}>
                  Register now
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
