import ReviewCarousel from "../components/ReviewCarousel";
import BookingForm from "../components/BookingForm";

export default function BookingsPage() {
    return (
      <div className="bg-zinc-900">
      <div className="flex flex-col min-h-screen mb-5">
      <BookingForm/>
      <ReviewCarousel />
      </div>
      </div>
    );
}