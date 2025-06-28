import { FaFemale, FaBaby, FaUserMd, FaAmbulance, FaStethoscope, FaHeart, FaArrowRight, FaCalendarCheck, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: FaFemale,
      title: "Prenatal Care",
      description: "Comprehensive check-ups, monitoring, and guidance throughout pregnancy with regular consultations and medical assessments."
    },
    {
      icon: FaBaby,
      title: "Delivery Services",
      description: "Safe, comfortable birthing environment with experienced medical staff ensuring the best care for mother and baby."
    },
    {
      icon: FaUserMd,
      title: "Postnatal Care",
      description: "Complete recovery care and newborn monitoring after delivery with ongoing support for new mothers."
    },
    {
      icon: FaAmbulance,
      title: "Emergency Care",
      description: "24/7 emergency medical services for maternal and newborn complications with immediate response capabilities."
    },
    {
      icon: FaStethoscope,
      title: "Health Consultations",
      description: "Expert medical consultations and family planning guidance with personalized healthcare recommendations."
    },
    {
      icon: FaHeart,
      title: "Breastfeeding Support",
      description: "Lactation consultation and breastfeeding education for new mothers with ongoing guidance and support."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <hr className="w-24 h-1 bg-[#0077b6] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services designed to support mothers and babies through every stage of their journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="professional-card text-center group animate-fade-in-up hover:scale-105 transition-all duration-300">
                <div className="icon-circle mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent />
                </div>
                <h3 className="subsection-title mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed h-[68.25px] overflow-hidden">{service.description}</p>
                
                {/* Service highlight */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300 flex items-center mx-auto">
                    Learn More
                    <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="section-card text-center mt-16 bg-gradient-light">
          <div className="max-w-3xl mx-auto">
            <div className="icon-circle mx-auto mb-6">
              <FaCalendarCheck />
            </div>
            <h3 className="subsection-title mb-4">Ready to Schedule Your Appointment?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Our experienced medical team is here to provide you with the best possible care. 
              Contact us today to schedule your consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn-primary">
                <FaPhone className="mr-2" />
                Call Now
              </button>
              <button className="btn-secondary">
                <FaEnvelope className="mr-2" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 