import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BookingsPage() {
    return (
      <div className="flex flex-col min-h-screen">
      <Header />
     
      <p>booking form will go here</p>
      
      <div className="flex flex-col min-h-screen md:flex justify-end translate-y-2 translate-x-0 -mb-8">
      <Footer />
      </div>
      </div>
      

    );
}