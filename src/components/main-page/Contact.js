import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaInfoCircle,
  FaPaperPlane,
  FaUser,
  FaExclamationTriangle
} from "react-icons/fa";
import { FaCommentDots, FaShield } from "react-icons/fa6";

export default function Contact() {
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      content: "123 Healthcare Avenue",
      subtitle: "Medical District, City 12345"
    },
    // TODO: Ask for phone number to be placed here
    // {
    //   icon: FaPhone,
    //   title: "Phone",
    //   content: "(555) 123-4567",
    //   subtitle: "24/7 Emergency Hotline"
    // },
    {
      icon: FaEnvelope,
      title: "Email",
      content: "ersmaternity@gmail.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: FaClock,
      title: "Hours",
      content: "24/7 Emergency Care",
      subtitle: "Regular Hours: 8:00 AM - 5:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <hr className="w-24 h-1 bg-[#0077b6] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help and answer any questions you might have. Reach
            out to us for appointments, inquiries, or emergency care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="section-card">
              <h3 className="subsection-title mb-6 flex items-center">
                <div className="icon-circle mr-4">
                  <FaInfoCircle />
                </div>
                Get in Touch
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                    >
                      <div className="icon-circle flex-shrink-0">
                        <IconComponent />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-blue-600 font-medium">
                          {info.content}
                        </p>
                        <p className="text-sm text-gray-500">{info.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="professional-card bg-red-50 border-l-red-500">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 text-red-600 w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0">
                  <FaExclamationTriangle />
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">
                    Emergency Notice
                  </h4>
                  <p className="text-red-700 text-sm">
                    For medical emergencies, please call{" "}
                    <strong>(555) 911-HELP</strong> immediately or visit our
                    emergency department. We're available 24/7 for urgent care.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="section-card">
            <h3 className="subsection-title mb-6 flex items-center">
              <div className="icon-circle mr-4">
                <FaPaperPlane />
              </div>
              Send us a Message
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaUser className="mr-2 text-blue-600 inline" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaEnvelope className="mr-2 text-blue-600 inline" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaPhone className="mr-2 text-blue-600 inline" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaCommentDots className="mr-2 text-blue-600 inline" />
                  Message *
                </label>
                <textarea
                  placeholder="Please describe how we can help you..."
                  rows="5"
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>

              <p className="text-sm text-gray-500 text-center">
                <FaShield className="mr-1 text-green-500 inline" />
                Your information is secure and will never be shared with third
                parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
