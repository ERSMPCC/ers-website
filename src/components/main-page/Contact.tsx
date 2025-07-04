"use client";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaInfoCircle,
  FaFacebookF,
  FaExclamationTriangle
} from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa6";

interface ContactInfoItem {
  icon: React.ComponentType<any>;
  title: string;
  content: string;
  subtitle: string;
}

export default function Contact() {
  const contactInfo: ContactInfoItem[] = [
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      content: "Brgy. Luciano (Bitangan), Indang Road",
      subtitle: "Trece Martires, Cavite, 4109"
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
      content: "24/7 Emergency Maternal Care",
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
                    <strong>(+63) 9101235526</strong> immediately or visit our
                    emergency department.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="space-y-8">
            {/* Facebook Contact */}
            <div className="section-card">
              <h3 className="subsection-title mb-6 flex flex-row items-center">
                <div className="icon-circle mr-4">
                  <FaFacebookF />
                </div>
                Message Us on Facebook
              </h3>
              
              <div className="text-center">
                <div className="bg-blue-50 p-8 rounded-lg mb-6">
                  <div className="icon-circle mx-auto mb-4 bg-blue-600 text-white">
                    <FaCommentDots />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">
                    For Concerns & Clarifications
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Get in touch with us through our official Facebook page for any questions, 
                    concerns, or clarifications about our services.
                  </p>
                  <button 
                    className="btn-primary inline-flex items-center hover:scale-105 transition-all duration-300"
                    onClick={() => window.open('https://www.facebook.com/ERSMaternity', '_blank')}
                  >
                    <FaFacebookF className="mr-2" />
                    Message on Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 