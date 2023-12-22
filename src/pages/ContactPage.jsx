import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReviewCarousel from "../components/ReviewCarousel";
import ContactForm from "../components/ContactForm";


export default function ContactPage() {
    return (

      <div className="flex flex-col min-h-screen">
      <Header />

     <ContactForm />
     
      <ReviewCarousel />
      
      <div className="flex flex-col max-h-screen md:flex justify-end translate-y-64 translate-x-0">
      <Footer />
      </div>
      </div>
      
      
      
    
    );
}