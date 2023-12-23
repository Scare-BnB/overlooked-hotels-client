import ReviewCarousel from "../components/ReviewCarousel";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen mb-5">
      <ContactForm />
      <ReviewCarousel />
    </div>
  );
}
