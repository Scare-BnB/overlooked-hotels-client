import { Link } from "react-router-dom";
import OverlookedLogo from "../assets/logo.png";
import { signOffUser, isUserSignedIn, isUserAdmin } from "../utils/user";
import { useState, useEffect } from "react";

export default function Header() {
  const [signedIn, setSignedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const checkLoggedIn = () => {
    setInterval(() => {
      setSignedIn(isUserSignedIn());
      setIsAdmin(isUserAdmin());
    }, 250);
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <div className="navbar bg-base-100 z-[100] ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* This first section is the small drop down menu when displayed on mobile */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/"}>About</Link></li>
            <li>
              <a>Locations</a>
              <ul className="p-2">
                <li><Link to={"/locations"}>The Grand Lodge</Link></li>
                <li><Link to={"/locations"}>The Wilkes Cabin</Link></li>
                <li><Link to={"/locations"}>The Fairvale Motel</Link></li>
              </ul>
            </li>

            {signedIn ? (
              <li>
                <a>Account</a>
                <ul className="p-2">
                  <li><Link to={"/bookings"}>Create Booking</Link></li>
                </ul>
              </li>
            ) : (
              <></>
            )}

            {isAdmin ? (
              <li>
                <a>Administration</a>
                <ul className="p-2">
                  <li><Link to={"/admin/bookings"}>Manage Bookings</Link></li>
                  <li><Link to={"/admin/listings"}>Manage Listings</Link></li>
                </ul>
              </li>
            ) : (
              <></>
            )}
            

            <li><Link to={"/contact"}>Contact</Link></li>
          </ul>
        </div>

        {/* This is the logo for the navbar */}<Link to={"/"} className="logo p-5 py-4">
          <img
            src={OverlookedLogo}
            alt="Overlooked Hotels Logo"
            className="h-10 sm:h-10 md:h-12 lg:h-16"
          />
        </Link>
      </div>

      {/* This is the main centred navbar for desktop view */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-20">
          <li><Link to={"/"}>Home</Link></li>
          {/* The About link will jump to home page for now until I add jump to specific part of page */}
          <li><Link to={"/"}>About</Link></li>
          <li>
            <details>
              <summary>Locations</summary>
                <ul className="p-2" style={{'zIndex': '100'}}>
                {/* These links will temporarily link to the base Locations page until I implement specific part of page */}
                <li><Link to={"/locations"}>The Grand Lodge</Link></li>
                <li><Link to={"/locations"}>The Wilkes Cabin</Link></li>
                <li><Link to={"/locations"}>The Fairvale Motel</Link></li>
              </ul>
            </details>
          </li>
          <li><Link to={"/contact"}>Contact</Link></li>
          

          {signedIn ? (
            <li>
              <details>
                <summary>Account</summary>
                <ul className="p-2" style={{'zIndex': '100'}}>
                  <li><Link to={"/bookings"}>Create Booking</Link></li>
                </ul>
              </details>
            </li>
            ) : (
              <></>
            )}

            {isAdmin ? (
              <li>
                <details>
                  <summary>Administration</summary>
                  <ul className="p-2" style={{'zIndex': '100'}}>
                    <li><Link to={"/admin/bookings"}>Manage Bookings</Link></li>
                    <li><Link to={"/admin/listings"}>Manage Listings</Link></li>
                  </ul>  
                </details>
              </li>
            ) : (
              <></>
            )}
        </ul>
      </div>

      <div className="navbar-end">
        <Link onClick={signOffUser} to={"/login"} className="btn">{signedIn ? "Sign Out" : "Sign In"}</Link>
      </div>
    </div>
  );
}
