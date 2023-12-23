import TopCarousel from "../components/TopCarousel";
import ReviewCarousel from "../components/ReviewCarousel";
import HomeHero from "../components/HomeHero";


export default function IndexPage() {
  return (
    <div className="flex flex-col min-h-screen mb-5">
      <TopCarousel />

      <div>
        <HomeHero />

        
          <ReviewCarousel />
        </div>
      </div>
    
  );
}
