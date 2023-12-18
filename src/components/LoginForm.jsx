import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="hero min-h-screen bg-base-200">
         <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-center">
      </div>
      
       <div className="mt-4 grow flex items-center justify-around">
           <div className="-mt-64">
           <h1 className="text-4xl text-center mb-4">Login</h1>
           <form className="max-w-md mx-auto">
               <input type="email" placeholder="youremail@email.com" />
                <input type="password" placeholder="Password" />
              <button className="primary">Login</button>
               <div className="text-center py-2 max-w-md mx-auto">
                   Don't have an account? <Link className="underline text" to={"/register"}>Register now</Link>
            </div>
        </form>
        </div>
      </div>
    </div>
    </div>
    
    );
}