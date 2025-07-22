import { FaHospital, FaHome, FaInfoCircle, FaStethoscope, FaPhone, FaBars } from 'react-icons/fa';

export function Navbar() {
  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50 border-b-2 border-blue-100">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-blue-600 flex items-center">
          <div className="icon-circle mr-4">
            <FaHospital className="text-2xl" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-blue-600">ERS Maternity and Pediatric Care Clinic</h2>
            <p className="text-sm text-gray-500">Professional Healthcare Excellence</p>
          </div>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium flex items-center">
            <FaHome className="mr-2" />Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium flex items-center">
            <FaInfoCircle className="mr-2" />About
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium flex items-center">
            <FaStethoscope className="mr-2" />Services
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium flex items-center">
            <FaPhone className="mr-2" />Contact
          </a>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden btn-primary">
          <FaBars />
        </button>
      </nav>
    </header>
  );
} 