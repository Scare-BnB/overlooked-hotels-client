import { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Location images for carousel
import GrandLodge1 from "../assets/location_images/grandlodge1.jpg";
import GrandLodge2 from "../assets/location_images/grandlodge2.jpg";
import Fairvale1 from "../assets/location_images/fairvale1.jpg";
import Fairvale2 from "../assets/location_images/fairvale2.jpg";
import Wilkes1 from "../assets/location_images/wilkes1.jpg";

export default function TopCarousel() {
  return (
    <div className="flex align-items-center">
    <Carousel
        showThumbs={false}
        showIndicators={true}
        showStatus={false}
        infiniteLoop
        autoPlay
    
        >
      <div>
        <img src={GrandLodge1} />
       
      </div>
      <div>
        <img src={Fairvale1} />
  
      </div>
      <div>
        <img src={GrandLodge2} />
       
      </div>
      <div>
        <img src={Fairvale2} />
       
      </div>
      <div>
        <img src={Wilkes1} />
       
      </div>
    </Carousel>
    </div>
  );
}
