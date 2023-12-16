import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="-mt-64">
            <h1 className="text-4xl text-center mb-4">Register an account</h1>
            <form className="max-w-md mx-auto">
                <input type="first name" placeholder="First name" />  <input type="last name" placeholder="Last name" />
                <input type="email" placeholder="youremail@email.com" />
                <input type="password" placeholder="Password" />
                <button className="primary">Create new account</button>
                <div className="text-center py-2 max-w-md mx-auto">
                    Already have an account? <Link className="underline text" to={"/login"}>Login</Link>
            </div>
        </form>
        </div>
      </div>
    
    );
}