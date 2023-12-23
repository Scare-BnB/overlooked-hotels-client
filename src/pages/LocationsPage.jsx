import Header from "../components/Header";
import Footer from "../components/Footer";
import Location1 from "../components/Location1";
import Location2 from "../components/Location2";
import Location3 from "../components/Location3";

export default function LocationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Location1 />

      <div className="flex flex-col min-h-screen">
        <Location2 />

        <div className="flex flex-col min-h-screen">
          <Location3 />
        </div>
      </div>
    </div>
  );
}
