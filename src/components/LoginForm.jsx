import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    //     <div className="hero min-h-screen bg-base-200">
    //      <div className="hero-content flex-col lg:flex-row-reverse">
    //     <div className="text-center lg:text-center">
    //   </div>

    //    <div className="mt-4 grow flex items-center justify-around">
    //        <div className="-mt-64">
    //        <h1 className="text-4xl text-center mb-4">Login</h1>
    //        <form className="max-w-md mx-auto">
    //            <input type="email" placeholder="youremail@email.com" />
    //             <input type="password" placeholder="Password" />
    //           <button className="primary">Login</button>
    //            <div className="text-center py-2 max-w-md mx-auto">
    //                Don't have an account? <Link className="underline text" to={"/register"}>Register now</Link>
    //         </div>
    //     </form>
    //     </div>
    //   </div>
    // </div>
    // </div>

    //     <div className="hero min-h-screen bg-base-200">
    //           <h1 className="text-4xl text-center mb-4">Login</h1>
    //   <div className="hero-content flex-col lg:flex-row-reverse">

    //     <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    //       <form className="card-body">
    //             <h1 className="text-4xl text-center mb-4">Login</h1>
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Email</span>
    //           </label>
    //           <input type="email" placeholder="email" className="input input-bordered" required />
    //         </div>
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Password</span>
    //           </label>
    //           <input type="password" placeholder="password" className="input input-bordered" required />
    //           <label className="label">
    //             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
    //           </label>
    //         </div>
    //         <div className="form-control mt-6">
    //           <button className="btn btn-primary">Login</button>
    //         </div>
    //       </form>

    //     </div>
    //   </div>
    // </div>
 
    
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
