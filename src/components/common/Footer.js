import { 
  FaHospital, 
  FaHome, 
  FaInfoCircle, 
  FaStethoscope, 
  FaPhone, 
  FaList, 
  FaAmbulance, 
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home", icon: FaHome },
    { name: "About", href: "#about", icon: FaInfoCircle },
    { name: "Services", href: "#services", icon: FaStethoscope },
    { name: "Contact", href: "#contact", icon: FaPhone }
  ];

  const hotlineNumbers = [
    { station: "Office/Billing", number: "" },
    { station: "Ward/Nurses Station", number: "" },
    { station: "OPD", number: "" },
    { station: "Laboratory", number: "09683352145" }
  ];

  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Clinic Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <FaHospital className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">ERS Maternity & Pediatric Care</h3>
                  <p className="text-blue-200 text-sm">Professional Healthcare Excellence</p>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed mb-6 max-w-md">
                Providing quality maternal and newborn care with compassion and expertise. 
                We're committed to the health and well-being of mothers and babies in our community.
              </p>
              {/* TODO: ASK FOR ERSMPCC SOCIAL MEDIA */}
              {/* <div className="flex space-x-4">
                <a href="#" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110">
                  <FaFacebookF className="text-white" />
                </a>
                <a href="#" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110">
                  <FaTwitter className="text-white" />
                </a>
                <a href="#" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110">
                  <FaInstagram className="text-white" />
                </a>
                <a href="#" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110">
                  <FaLinkedinIn className="text-white" />
                </a>
              </div> */}
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <FaList className="mr-2" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group"
                      >
                        <IconComponent className="mr-3 w-4 group-hover:scale-110 transition-transform" />
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Hotline Numbers */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <FaPhone className="mr-2" />
                Hotline Numbers
              </h4>
              <ul className="space-y-3">
                {hotlineNumbers.map((hotline, index) => (
                  <li key={index}>
                    <div className="text-blue-200 flex items-center justify-between">
                      <span className="font-medium text-white text-sm">{hotline.station}:</span>
                      <span className="text-sm">
                        {hotline.number || "Coming Soon"}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Section */}
        <div className="border-t border-white/20 py-8">
          <div className="bg-white/10 rounded-lg p-6 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-red-500 p-3 rounded-full mr-4 animate-pulse">
                  <FaAmbulance className="text-white text-xl" />
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold text-white">24/7 Emergency Care</h4>
                  <p className="text-blue-200">We're here when you need us most</p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-blue-200 mb-1">Emergency Hotline:</p>
                <a href="tel:555-911-HELP" className="text-3xl font-bold text-white hover:text-blue-200 transition-colors">
                  (555) 911-HELP
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 text-center md:text-left mb-4 md:mb-0">
              <p>&copy; 2024 ERS Maternity and Pediatric Care Clinic. All rights reserved.</p>
              <p className="text-sm mt-1">
                <FaEnvelope className="mr-2 inline" />
                <a href="mailto:ersmaternity@gmail.com" className="hover:text-white transition-colors">
                  ersmaternity@gmail.com
                </a>
              </p>
            </div>
            <div className="flex items-center space-x-6 text-blue-200 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">HIPAA Notice</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 