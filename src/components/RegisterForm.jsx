import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (


    <div className="hero max-h-screen py-64 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <h1 className="text-4xl text-center mb-8">Register an Account</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>{" "}
              <input
                type="firstname"
                placeholder="First name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>{" "}
              <input
                type="lastname"
                placeholder="Last name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email address</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
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
              />
              </div>
            
              
                <div className="text-center py-2 max-w-md mx-auto">
              Already have an account? <Link className="underline text" to={"/login"}>Log In</Link>
                </div>
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Create Account</button>
            </div>
          </form>

       
          </div>
        </div>
      </div>
      
    
    );
}