import GrandLodge1 from "../assets/location_images/grandlodge1.jpg";
import GrandLodge2 from "../assets/location_images/grandlodge2.jpg";
import Fairvale1 from "../assets/location_images/fairvale1.jpg";
import Fairvale2 from "../assets/location_images/fairvale2.jpg";

export default function() {
    return (<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={GrandLodge1}  className="w-full"/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
   
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={Fairvale1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
 
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={GrandLodge2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
 
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={Fairvale2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
     
    </div>
  </div>
</div>
    );
}