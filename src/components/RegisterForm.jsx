import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
    //     <div className="hero min-h-screen bg-base-200">
    //     <div className="hero-content flex-col lg:flex-row-reverse">
    //    <div className="text-center lg:text-center">
    //  </div>
    //     <div className="mt-4 grow flex items-center justify-around">
    //         <div className="-mt-64">
    //         <h1 className="text-4xl text-center mb-4">Register an account</h1>
    //         <form className="max-w-md mx-auto">
    //             <input type="first name" placeholder="First name" />  <input type="last name" placeholder="Last name" />
    //             <input type="email" placeholder="youremail@email.com" />
    //             <input type="password" placeholder="Password" />
    //             <button className="primary">Create new account</button>
    //             <div className="text-center py-2 max-w-md mx-auto">
    //                 Already have an account? <Link className="underline text" to={"/login"}>Login</Link>
    //         </div>
    //     </form>
    //     </div>
    //   </div>
    //   </div>
    //   </div>

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