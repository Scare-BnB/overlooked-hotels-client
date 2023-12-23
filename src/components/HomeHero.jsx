import { Link } from "react-router-dom";
import Signature from "../assets/signature.png";

export default function ContentHero() {
    return (
      
      <div className="hero py-32">
      <div className="hero-content grid md:grid-cols-2 gap-48">
      <div className="order-2 ">
        <img
          src={Signature}
          className=""
          alt="Signature" 
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold leading-normal text-white">
          Welcome to The Overlooked Hotels
        </h1>
        <p className="py-6 text-gray-300">
        Come and explore our three unique locations for a stay you’ll never forget...or ever want to leave!
        </p>
        <Link to={"/locations"} className="btn btn-primary mt-4" >Explore Locations</Link>
      </div>
    </div>
</div>

    );
}