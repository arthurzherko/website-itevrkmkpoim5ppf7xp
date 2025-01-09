import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Company</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link to="/" className="hover:underline">About Us</Link>
              </li>
              <li className="mt-2">
                <Link to="/" className="hover:underline">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Services</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link to="/services" className="hover:underline">SEO</Link>
              </li>
              <li className="mt-2">
                <Link to="/services" className="hover:underline">Social Media</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Contact</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="mailto:info@apexdigital.com" className="hover:underline">info@apexdigital.com</a>
              </li>
              <li className="mt-2">
                <a href="tel:+11234567890" className="hover:underline">+1 (123) 456-7890</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-white font-bold mb-2">
              © 2024 Apex Digital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
