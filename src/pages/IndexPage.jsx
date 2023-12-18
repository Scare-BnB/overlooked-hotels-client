import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";


export default function IndexPage() {
    return (
      <div className="flex flex-col min-h-screen">
      <Header />
     
      <div className="flex flex-col min-h-screen">
      <HomeHero />
      
      <div className="flex flex-col min-h-screen">
      <Footer />
      </div>
      </div>
      </div>

    );
}