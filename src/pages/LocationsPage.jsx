import Location1 from "../components/Location1";
import Location2 from "../components/Location2";
import Location3 from "../components/Location3";
import TopCarousel from "../components/TopCarousel";
import ReviewCarousel from "../components/ReviewCarousel";

export default function LocationsPage() {
  return (
    <div className="flex flex-col min-h-screen mb-5">
      <TopCarousel />
      <Location1 />
      <Location2 />
      <Location3 />
      <ReviewCarousel />
    </div>
  );
}
