export default function Hero() {
  return (
    <section id="home" className="flex items-center justify-center h-[100vh] bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white text-center pt-32 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Caring for Mothers & Babies</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">Professional maternal and newborn care in a comfortable, safe environment</p>
        <div className="flex justify-center gap-4">
          <button className="bg-[#ff6b6b] text-white font-semibold py-3 px-8 rounded-full transition-transform transform hover:scale-105 hover:shadow-lg">Book Appointment</button>
          <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full transition-all hover:bg-white hover:text-[#667eea]">Learn More</button>
        </div>
      </div>
    </section>
  );
} 