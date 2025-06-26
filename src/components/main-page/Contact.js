export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#f8f9ff]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#2c5aa0] mb-16">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-semibold text-[#2c5aa0] mb-2">📍 Address</h3>
              <p className="text-gray-600">123 Healthcare Avenue<br />Medical District, City 12345</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#2c5aa0] mb-2">📞 Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#2c5aa0] mb-2">✉️ Email</h3>
              <p className="text-gray-600">info@erslyingincooperative.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#2c5aa0] mb-2">⏰ Hours</h3>
              <p className="text-gray-600">24/7 Emergency Care<br />Regular Hours: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#2c5aa0] mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" required className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c5aa0]" />
              <input type="email" placeholder="Your Email" required className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c5aa0]" />
              <input type="tel" placeholder="Phone Number" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c5aa0]" />
              <textarea placeholder="Your Message" rows="5" required className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c5aa0]"></textarea>
              <button type="submit" className="bg-[#ff6b6b] text-white font-semibold py-3 px-8 rounded-full transition-transform transform hover:scale-105 hover:shadow-lg">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 