import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="p-4 flex flex-col min-h-screen">
            <Header />
            <Outlet />
            <Footer />
          
        </div>
       
        
    );
}