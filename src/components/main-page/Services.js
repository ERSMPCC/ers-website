export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#2c5aa0] mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card */}
          <div className="bg-[#f8f9ff] p-8 rounded-xl text-center transition-all transform hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl mb-4">🤱</div>
            <h3 className="text-2xl font-semibold text-[#2c5aa0] mb-3">Prenatal Care</h3>
            <p className="text-gray-600">Comprehensive check-ups, monitoring, and guidance throughout pregnancy</p>
          </div>
          {/* Service Card */}
          <div className="bg-[#f8f9ff] p-8 rounded-xl text-center transition-all transform hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl mb-4">👶</div>
            <h3 className="text-2xl font-semibold text-[#2c5aa0] mb-3">Delivery Services</h3>
            <p className="text-gray-600">Safe, comfortable birthing environment with experienced medical staff</p>
          </div>
          {/* Service Card */}
          <div className="bg-[#f8f9ff] p-8 rounded-xl text-center transition-all transform hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl mb-4">🏥</div>
            <h3 className="text-2xl font-semibold text-[#2c5aa0] mb-3">Postnatal Care</h3>
            <p className="text-gray-600">Complete recovery care and newborn monitoring after delivery</p>
          </div>
          {/* Service Card */}
          <div className="bg-[#f8f9ff] p-8 rounded-xl text-center transition-all transform hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl mb-4">👩‍⚕️</div>
            <h3 className="text-2xl font-semibold text-[#2c5aa0] mb-3">Emergency Care</h3>
            <p className="text-gray-600">24/7 emergency medical services for maternal and newborn complications</p>
          </div>
          {/* Service Card */}
          <div className="bg-[#f8f9ff] p-8 rounded-xl text-center transition-all transform hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl mb-4">📋</div>
            <h3 className="text-2xl font-semibold text-[#2c5aa0] mb-3">Health Consultations</h3>
            <p className="text-gray-600">Expert medical consultations and family planning guidance</p>
          </div>
          {/* Service Card */}
          <div className="bg-[#f8f9ff] p-8 rounded-xl text-center transition-all transform hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl mb-4">🍼</div>
            <h3 className="text-2xl font-semibold text-[#2c5aa0] mb-3">Breastfeeding Support</h3>
            <p className="text-gray-600">Lactation consultation and breastfeeding education for new mothers</p>
          </div>
        </div>
      </div>
    </section>
  );
} 