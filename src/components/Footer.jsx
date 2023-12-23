import { Link } from "react-router-dom";
import LogoNoText from "../assets/logo_notext.png"

export default function Footer() {
    return (
       
<footer className="footer lg:flex items-center p-4 bg-neutral text-neutral-content flex-col">
  <aside className="items-center grid-flow-col mb-auto">
    <img
      src={LogoNoText}
      alt="Image here"
      className="h-8 sm:h-16"
    />
    <p>Copyright © 2023 - Kelsey and Alex</p>
  </aside> 
  <nav className="grid-flow-col gap-2 md:place-self-center md:justify-self-end static bottom-0">
    <Link to="https://github.com/Scare-BnB" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="fill-current"><path d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"></path></svg>
    </Link> 
  </nav>
</footer>
    );
} 

