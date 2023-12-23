import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import LodgeInterior1 from "../assets/location_images/lodgeinterior1.jpg";
import LodgeInterior2 from "../assets/location_images/lodgeinterior2.jpg";

export default function Location1() {
  return (
    <div className="hero py-16">
      <div className="hero-content grid md:grid-cols-2 gap-8">
        <div className="order-2">
          <Carousel
            showThumbs={true}
            showIndicators={true}
            showStatus={false}
            infiniteLoop
          >
            <div>
              <img src={LodgeInterior1} className="rounded-3xl" />
            </div>
            <div>
              <img src={LodgeInterior2} className="rounded-3xl" />
            </div>
          </Carousel>
        </div>

        <div>
          <h1 className="text-3xl font-bold leading-normal text-white">
            The Grand Lodge (Sidewinder, CO)
          </h1>
          <p className="py-6 text-gray-300">
            Set in the snow-capped Sidewinder mountains, The Grand Lodge is an
            impressive building that is sure to catch your eye. Sporting more
            than 770 uniquely appointed guest rooms, there’s something to suit
            everyone's taste. Hire a tricycle from Danny’s Trike Tours and explore the
            surrounding trails then grab a refreshing drink at The
            Redrum Bar. If relaxation is more your style, why not treat yourself to a
            day of pampering at The Green Lady spa, because you've earned it.
          </p>
          <p className="text-xl font-bold py-2 text-gray-300">
          Features
        </p>
        <p className=" text-gray-300">
          <li>Luxury rooms with stunning views</li>
          <li>Valet parking</li>
          <li>Ensuite bathroom</li>
          <li>Onsite day-spa</li>
        </p>

          <Link to={"/login"} className="btn btn-primary mt-8">
            Book now
          </Link>
        </div>
      </div>
    </div>
  );
}
