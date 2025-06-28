import { FaHeart, FaCalendarCheck, FaInfoCircle } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-primary text-white text-center pt-32 pb-40 mt-[72px] relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 animate-pulse-hover">
              <FaHeart className="text-3xl text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
            Caring for Mothers & Babies
            <span className="block text-blue-200 text-3xl md:text-4xl mt-2 font-medium">
              With Professional Excellence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed text-blue-100">
            Professional maternal and newborn care in a comfortable, safe environment with experienced medical staff
          </p>
          
          {/* SOON */}
          {/* <div className="flex flex-nowrap justify-center gap-3 mb-12 overflow-visible">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center flex-shrink-0">
              <FaCalendarCheck className="mr-2" />
              Book Appointment
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-blue-600 px-5 py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center flex-shrink-0">
              <FaInfoCircle className="mr-2" />
              Learn More
            </button>
          </div> */}
          
          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mt-20 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">1000+</div>
              <div className="text-blue-200 text-sm">Safe Deliveries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-blue-200 text-sm">Emergency Maternal Care</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">10+</div>
              <div className="text-blue-200 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-53">
          <path d="M0 80L50 70C100 60 200 40 300 30C400 20 500 20 600 25C700 30 800 40 900 45C1000 50 1100 50 1150 50L1200 50V80H1150C1100 80 1000 80 900 80C800 80 700 80 600 80C500 80 400 80 300 80C200 80 100 80 50 80H0V80Z" fill="#f9fafb"/>
        </svg>
      </div>
    </section>
  );
} 