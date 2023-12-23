import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import WilkesInterior1 from "../assets/location_images/wilkesinterior1.jpg";
import WilkesInterior2 from "../assets/location_images/wilkesinterior2.jpg";

export default function Location2() {
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
        <img src={WilkesInterior1} className="rounded-3xl"/>
       
      </div>
      <div>
        <img src={WilkesInterior2} className="rounded-3xl"/>
  
      </div>
      
    </Carousel>
    </div>
      
      <div>
        <h1 className="text-3xl font-bold leading-normal text-white">
          The Wilkes Cabin (Silver Creek, CO)
        </h1>
        <p className="py-6 text-gray-300">
        If you’re tired of the hustle and bustle of modern life and crave some serenity, The Wilkes cabin is the perfect choice. Set in a secluded area of a remote forest, you will be surrounded by the soothing sounds of nature. You won’t be distracted by your friends calling or texting you as there’s no phone service, you can even scream as loud as you like because no-one will hear you. Why not take a stroll in the crisp forest air and explore one of the many hiking trails surrounding the cabin? If you happen to take a tumble and hurt yourself, rest assured that Annie is a retired nurse and will take the best care of you.
        </p>
        <p className="text-xl font-bold py-2 text-gray-300">
          Features
        </p>
        <p className=" text-gray-300">
          <li>Cozy single bedroom</li>
          <li>Huge library of books to read</li>
          <li>Ensuite bathroom</li>
          <li>Fully-equipped kitchen</li>
        </p>

        <Link to={"/login"} className="btn btn-primary mt-8" >Book now</Link>
      </div>
    </div>
</div>
  


    );
}