import { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function ReviewCarousel() {
  return (
    <div className="flex align-items-center py-12 bg-neutral text-neutral-content">
    <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        infiniteLoop

    
        >
      <div className="items-center grid-flow-col p-4 ">
      <p className="location">[ The Grand Lodge ]</p>
        <p className="italic">"We had a wonderful time at the Grand Lodge. Jack was gracious host and works incredibly hard. The man deserves a holiday, because 'All work and no play is no way to stay'"</p>
        <p className="font-bold">- Shelley (Colorado)</p>
      </div>
      <div className="items-center grid-flow-col p-4">
      <p className="location">[ The Wilkes Cabin ]</p>
      <p className="italic">"I got injured while hiking the surrounding trails but Annie made sure I was well taken care of while my ankles recovered. Five stars"</p>
        <p className="font-bold">- P. Sheldon (Colorado)</p>
       
  
      </div>
      <div className="items-center grid-flow-col p-4">
      <p className="location">[ The Fairvale Motel ]</p>
      <p className="italic">"For an inexperienced motel manager, Norman was a delight and ensured we had everything we needed. We had a leaky shower and he turned up and fixed it for us straight away"</p>
        <p className="font-bold">- Alfred H. (Fairvale, CA)</p>
       
      </div>
      <div className="items-center grid-flow-col p-4">
      <p className="location">[ The Grand Lodge ]</p>
      <p className="italic">"I had the best time at The Grand Lodge. The owner's son Danny is a great trail guide and took me on an amazing trike ride through the mountains"</p>
        <p className="font-bold">- Alex K (Australia)</p>
        </div>

        <div className="items-center grid-flow-col p-4">
        <p className="location">[ Location ]</p>
      <p className="italic">"Kelsey's review goes here"</p>
        <p className="font-bold">- Kelsey H (Australia)</p>
       
      </div>
      
    </Carousel>
    </div>
  );
}