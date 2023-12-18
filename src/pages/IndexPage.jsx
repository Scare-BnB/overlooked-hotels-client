import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import GrandLodge1 from "../assets/location_images/grand_lodge1.png";
import GrandLodge2 from "../assets/location_images/grand_lodge2.png";


export default function IndexPage() {
    return (
      <div className="flex flex-col min-h-screen">
      <Header />

     <div>
      <img src={GrandLodge1} alt="Home Page test" className="w-full h-auto" />
    </div>
     
      <div className="flex flex-col min-h-screen">
      <HomeHero />

      <div>
      <img src={GrandLodge2} alt="Home Page test" className="w-full h-auto" />
    </div>

    <h1 className="p-12 text-3xl leading-normal text-white">
          About Us
        </h1>
        <p className="py-1 text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
    
      
      <div className="flex flex-col min-h-screen md:flex justify-end translate-y-1 translate-x-0 -mb-4">
      <Footer />
      </div>
      </div>
      </div>
      
      

    );
}