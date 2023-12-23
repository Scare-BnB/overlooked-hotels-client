import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import WilkesInterior1 from "../assets/location_images/wilkesinterior1.jpg";

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
        <img src={WilkesInterior1} className="rounded-3xl"/>
  
      </div>
      
    </Carousel>
    </div>
      
      <div>
        <h1 className="text-3xl font-bold leading-normal text-white">
          The Wilkes Cabin
        </h1>
        <p className="py-6 text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        <Link to={"/login"} className="btn btn-primary mt-4" >Book now</Link>
      </div>
    </div>
</div>
  


    );
}