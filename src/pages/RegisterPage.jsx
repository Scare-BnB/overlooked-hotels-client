import ReviewCarousel from "../components/ReviewCarousel";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <RegisterForm />
      <ReviewCarousel />
    </div>
  );
}
