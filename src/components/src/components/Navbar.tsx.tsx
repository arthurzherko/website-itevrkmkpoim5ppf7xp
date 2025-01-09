import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-gray-700">
            <Link to="/">Apex Digital</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-800 hover:text-gray-600">Home</Link>
            <Link to="/services" className="text-gray-800 hover:text-gray-600">Services</Link>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
