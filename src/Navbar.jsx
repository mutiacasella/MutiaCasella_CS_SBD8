import { useEffect, useState } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastScrollY && currentY > 50);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-white shadow w-full z-50 fixed top-0 left-0 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-9xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600">Coursera</h1>
        <ul className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <li><a href="#info" className="hover:text-blue-600">About Us</a></li>
          <li><a href="#layanan" className="hover:text-blue-600">Services</a></li>
          <li><a href="#gabung" className="hover:text-blue-600">Join Us</a></li>
          <li><a href="#kontak" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}