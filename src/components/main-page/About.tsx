import { FaUserMd, FaUsers, FaBaby, FaCalendarAlt, FaAmbulance, FaAward, FaHeart } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">About Our Clinic</h2>
          <hr className="w-24 h-1 bg-[#0077b6] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Providing comprehensive maternal and newborn care with a focus on safety, comfort, and personalized attention for over a decade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <div className="professional-card">
              <div className="flex items-start space-x-4">
                <div className="icon-circle flex-shrink-0">
                  <FaUserMd />
                </div>
                <div>
                  <h3 className="subsection-title">Excellence in Maternal Care</h3>
                  <p className="text-gray-600 leading-relaxed">
                    ERS Maternity and Pediatric Care Clinic has been serving expectant mothers and their families 
                    with unwavering dedication. We provide comprehensive maternal and newborn care 
                    with a focus on safety, comfort, and personalized attention.
                  </p>
                </div>
              </div>
            </div>

            <div className="professional-card">
              <div className="flex items-start space-x-4">
                <div className="icon-circle flex-shrink-0">
                  <FaUsers />
                </div>
                <div>
                  <h3 className="subsection-title">Experienced Medical Team</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our experienced medical team is dedicated to ensuring the health and 
                    well-being of both mother and child throughout the pregnancy journey 
                    and beyond, providing expert care every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="professional-card text-center animate-pulse-hover">
              <div className="icon-circle mx-auto">
                <FaBaby />
              </div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">1000+</h3>
              <p className="text-gray-600 font-medium">Safe Deliveries</p>
              <p className="text-sm text-gray-500 mt-1">Successfully completed</p>
            </div>

            <div className="professional-card text-center animate-pulse-hover">
              <div className="icon-circle mx-auto">
                <FaCalendarAlt />
              </div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">10+</h3>
              <p className="text-gray-600 font-medium">Years of Service</p>
              <p className="text-sm text-gray-500 mt-1">Trusted healthcare provider</p>
            </div>

            <div className="professional-card text-center animate-pulse-hover">
              <div className="icon-circle mx-auto">
                <FaAmbulance />
              </div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">24/7</h3>
              <p className="text-gray-600 font-medium">Emergency Maternal Care</p>
              <p className="text-sm text-gray-500 mt-1">Always available</p>
            </div>

            <div className="professional-card text-center animate-pulse-hover">
              <div className="icon-circle mx-auto">
                <FaAward />
              </div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">100%</h3>
              <p className="text-gray-600 font-medium">Satisfaction</p>
              <p className="text-sm text-gray-500 mt-1">Patient commitment</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="section-card text-center max-w-4xl mx-auto">
          <div className="icon-circle mx-auto mb-6">
            <FaHeart />
          </div>
          <h3 className="subsection-title mb-4">Our Mission</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            To provide exceptional maternal and pediatric healthcare services with compassion, 
            expertise, and unwavering commitment to the safety and well-being of mothers and babies 
            in our community.
          </p>
        </div>
      </div>
    </section>
  );
} 