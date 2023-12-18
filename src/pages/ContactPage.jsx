import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";


export default function ContactPage() {
    return (

      <div className="flex flex-col min-h-screen">
      <Header />

     <ContactForm />
     
    
      
      <div className="flex flex-col min-h-screen md:flex justify-end translate-y-1 translate-x-0 -mb-4">
      <Footer />
      </div>
      </div>
      
    
    );
}