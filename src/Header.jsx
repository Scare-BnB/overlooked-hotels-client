import { Link } from "react-router-dom";
import ASSETS from "./assets/Assets";

export default function Header() {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a>Home</a>
              </li>
              <li><a>About</a></li>
              <li>
                <a>Locations</a>
                <ul className="p-2">
                  <li><a>The Grand Lodge</a></li>
                  <li><a>The Wilkes Cabin</a></li>
                  <li><a>The Fairvale Motel</a></li>
                </ul>
              </li>
              <li><a>dfsdf</a></li>
              <li><a>dsfsdfd</a></li>
              <li><a>sdfsdf</a></li>
            </ul>
          </div>
          {/* This is the logo for the navbar */}
          <Link to={"/"} className="logo p-5 py-4"><img src={ASSETS.logo} alt='The Overlooked Hotels Logo'/></Link>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-20">
            <li><Link to={"/"}>Home</Link></li>
            {/* The About link will jump to home page for now until I add jump to specific part of page */}
            <li><Link to={"/"}>About</Link></li>
            <li>
              <details>
                <summary>Locations</summary>
                <ul className="p-2">
                  {/* These links will temporarily link to the base Locations page until I implement specific part of page */}
                  <li><Link to={"/locations"}>The Grand Lodge</Link></li>
                  <li><Link to={"/locations"}>The Wilkes Cabin</Link></li>
                  <li><Link to={"/locations"}>The Fairvale Motel</Link></li>
                </ul>
              </details>
            </li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/bookings"}>Bookings</Link></li>
       
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={"/login"} className="btn" >Sign In</Link>
        </div>
      </div>
    );
}
