export default function About() {
  return (
    <section id="about" className="py-24 bg-[#f8f9ff]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#2c5aa0] mb-16">About Our Clinic</h2>
        <div className="flex flex-col items-center gap-12">
          <div className="md:w-1/2 text-[16px] text-justify">
            <p className="text-gray-600 leading-relaxed mb-6">
              ERS Maternity and Pediatric Care Clinic has been serving expectant mothers and their families 
              for over a decade. We provide comprehensive maternal and newborn care 
              with a focus on safety, comfort, and personalized attention.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our experienced medical team is dedicated to ensuring the health and 
              well-being of both mother and child throughout the pregnancy journey 
              and beyond.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-4xl font-bold text-[#ff6b6b]">1000+</h3>
                <p className="text-gray-500">Safe Deliveries</p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-4xl font-bold text-[#ff6b6b]">10+</h3>
                <p className="text-gray-500">Years of Service</p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-4xl font-bold text-[#ff6b6b]">24/7</h3>
                <p className="text-gray-500">Emergency Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 