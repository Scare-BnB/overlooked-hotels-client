import Header from "../components/Header";
import Footer from "../components/Footer";
import TopCarousel from "../components/TopCarousel";
import ReviewCarousel from "../components/ReviewCarousel";
import HomeHero from "../components/HomeHero";
import AboutHero from "../components/AboutHero";




export default function IndexPage() {
    return (
      <div className="flex flex-col min-h-screen">
      <Header />

     <div>
      <TopCarousel />
    </div>
     
      <div className="flex flex-col min-h-screen">
      <HomeHero />


    <div className="flex flex-col min-h-screen">
      <AboutHero />
    
   <div className="flex flex-col min-h-screen">
    <ReviewCarousel />
    
      
      <div className="flex flex-col min-h-screen md:flex justify-end translate-y-12 translate-x-0 -mb-4">
      {/* <div className="flex flex-col max-h-screen md:flex justify-end translate-y-64 translate-x-0"> */}
      <Footer />
      </div>
      </div>
      </div>
      </div>
      </div>
      
      

    );
}