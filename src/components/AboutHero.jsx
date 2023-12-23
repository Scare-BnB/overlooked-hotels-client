import logo from "../assets/logo.png";

export default function AboutHero() {
  return (
    <div className="hero py-32">
      <div className="hero-content grid md:grid-cols-2 gap-48">
        <div className="order-1">
          <img src={logo} className="" alt="Logo" />
        </div>
        <div>
          <h1 className="text-3xl font-bold leading-normal text-white">
            About Us
          </h1>
          <p className="py-6 text-gray-300">
            The Overlooked Hotels was created by Jack T. after he realised The
            Grand Lodge needed an online presence in today’s society. Two of his
            close friends decided to join him and the collective was formed in 2023.
          </p>
        </div>
      </div>
    </div>
  );
}
