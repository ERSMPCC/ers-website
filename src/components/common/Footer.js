export default function Footer() {
  return (
    <footer className="bg-[#1a2c4e] text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ERS Lying-In Clinic</h3>
            <p className="text-gray-400">Providing quality maternal and newborn care with compassion and expertise.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Emergency</h4>
            <p>For medical emergencies, call:</p>
            <p className="text-2xl font-bold text-[#ff6b6b] mt-2">(555) 911-HELP</p>
          </div>
        </div>
        <div className="text-center text-gray-500 pt-8 mt-8 border-t border-gray-700">
          <p>&copy; 2024 ERS Lying-In Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 