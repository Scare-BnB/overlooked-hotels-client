import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import GrandLodge1 from "../assets/location_images/grand_lodge1.png";


export default function IndexPage() {
    return (
      <div className="flex flex-col min-h-screen">
      <Header />

     <div>
      <img src={GrandLodge1} alt="Home Page test" className="w-full h-auto" />
    </div>
     
      <div className="flex flex-col min-h-screen">
      <HomeHero />
      
      <div className="flex flex-col min-h-screen md:flex justify-end translate-y-2 translate-x-0 -mb-8">
      <Footer />
      </div>
      </div>
      </div>
      

    );
}