import { Link } from "react-router-dom";

export default function ContentHero() {
    return (
    
      <div className="hero py-32">
      <div className="hero-content grid md:grid-cols-2 gap-8">
      <div className="order-2">
        {/* <img
          src={hero_img}
          className=""
          alt="Hero" */}
        {/* /> */}
      </div>
      <div>
        <h1 className="text-3xl font-bold leading-normal text-white">
          Welcome to The Overlooked Hotels
        </h1>
        <p className="py-6 text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        <Link to={"/locations"} className="btn btn-primary mt-4" >Explore Locations</Link>
      </div>
    </div>
</div>
    );
}