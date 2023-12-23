import TopCarousel from "../components/TopCarousel";
import ReviewCarousel from "../components/ReviewCarousel";
import HomeHero from "../components/HomeHero";
import AboutHero from "../components/AboutHero";

export default function IndexPage() {
  return (
    <div className="flex flex-col min-h-screen mb-5">
      <TopCarousel />
      <HomeHero />

      <AboutHero />

      <ReviewCarousel />
    </div>
  );
}
