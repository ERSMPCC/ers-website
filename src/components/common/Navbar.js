export default function Navbar() {
  return (
    <header className="bg-white/4 border-b border-white/15 backdrop-blur-md shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-10 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#2c5aa0]">
          <h2>ERS Maternity and Pediatric Care Clinic</h2>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-[#2c5aa0] transition-colors">Home</a>
          <a href="#about" className="text-gray-700 hover:text-[#2c5aa0] transition-colors">About</a>
          <a href="#services" className="text-gray-700 hover:text-[#2c5aa0] transition-colors">Services</a>
          <a href="#contact" className="text-gray-700 hover:text-[#2c5aa0] transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  );
} 