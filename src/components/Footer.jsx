import LogoNoText from "../assets/logo_notext.png"

export default function Footer() {
    return (
       
<footer className="footer lg:flex items-center p-4 bg-neutral text-neutral-content flex-col mt-2">
  <aside className="items-center grid-flow-col mb-auto">
    <img
      src={LogoNoText}
      alt="Image here"
      className="h-8 sm:h-16"
    />
    <p>Copyright © 2023 - Kelsey and Alex</p>
  </aside> 
 
</footer>
    );
} 

