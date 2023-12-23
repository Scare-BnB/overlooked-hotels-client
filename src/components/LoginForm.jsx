import { Link } from "react-router-dom";

export default function LoginPage() {
  return (

    
    <div className="hero max-h-screen py-64 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <h1 className="text-4xl text-center mb-4">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>{" "}
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            
              
                <div className="text-center py-2 max-w-md mx-auto">
              Don't have an account? <Link className="underline text" to={"/register"}>Register now</Link>
                </div>
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

       
          </div>
        </div>
      </div>
      
     
    
  );
}
