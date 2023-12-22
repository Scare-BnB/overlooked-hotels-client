import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";

export default function BookingsPage() {
    return (
      <div className="flex flex-col min-h-screen">
      <Header />
      <BookingForm/>
      <div className="flex flex-col max-h-screen md:flex justify-end translate-y-64 translate-x-0">
      <Footer />
      </div>
      </div>
      

    );
}