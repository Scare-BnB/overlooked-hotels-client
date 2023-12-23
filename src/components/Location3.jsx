import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import FairvaleInterior1 from "../assets/location_images/fairvaleinterior1.jpg";
import Fairvale3 from "../assets/location_images/fairvale3.jpg";

export default function Location3() {
  return (
    <div className="hero py-16">
      <div className="hero-content grid md:grid-cols-2 gap-8">
        <div className="order-2">
          {/* Image carousel */}
          <Carousel
            showThumbs={true}
            showIndicators={true}
            showStatus={false}
            infiniteLoop
          >
            <div>
              <img src={FairvaleInterior1} className="rounded-3xl" />
            </div>
            <div>
              <img src={Fairvale3} className="rounded-3xl" />
            </div>
          </Carousel>
        </div>
        {/* main written content*/}
        <div>
          <h1 className="text-3xl font-bold leading-normal text-white">
            The Fairvale Motel (Fairvale, CA)
          </h1>
          <p className="py-6 text-gray-300">
            Established in 1948, The Fairvale Motel is a charming mid-century
            gem. Run by the Bates family, it has been a feature of the Fairvale
            highway for decades. Drive in and stay at one of the many modest,
            but comfortable rooms available to book through The Overlooked
            Hotels. The site even has a diner and gas station attached for
            convenience. Stop for some gas, a slice of pie and some shut-eye
            today at The Fairvale Motel.
          </p>
          <p className="text-xl font-bold py-2 text-gray-300">Features</p>
          <p className=" text-gray-300">
            <li>Budget-friendly and comfortable rooms</li>
            <li>Parking right outside your door</li>
            <li>Killer location just off the highway</li>
            <li>Gas-station and diner</li>
          </p>
          <Link to={"/login"} className="btn btn-primary mt-8">
            Book now
          </Link>
        </div>
      </div>
    </div>
  );
}
