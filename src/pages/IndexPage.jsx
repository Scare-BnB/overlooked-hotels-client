import TopCarousel from "../components/TopCarousel";
import ReviewCarousel from "../components/ReviewCarousel";
import HomeHero from "../components/HomeHero";
import AboutHero from "../components/AboutHero";
import HomeBreak from "../assets/location_images/homebreak.png"

export default function IndexPage() {
  return (
    <div className="flex flex-col min-h-screen mb-5">
      <TopCarousel />
      <HomeHero />
      <img src={HomeBreak} alt="Winding Road" className="w-full h-auto" />
      <AboutHero />

      <ReviewCarousel />
    </div>
  );
}
