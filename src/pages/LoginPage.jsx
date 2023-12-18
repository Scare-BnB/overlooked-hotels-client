import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";


export default function LoginPage() {
    return (
      <div className="flex flex-col min-h-screen">
      <Header />
     
      <div className="flex flex-col min-h-screen">
      <LoginForm/>
      
      <div className="flex flex-col min-h-screen md:flex justify-end translate-y-2 translate-x-0 -mb-8">
      <Footer />
      </div>
      </div>
      </div>

    );
}