"use client";

import { useState } from 'react';
import { FaFlask, FaGift, FaShieldAlt, FaStethoscope, FaCamera, FaBaby, FaUserMd, FaEye, FaFemale, FaMedkit, FaHeart, FaBed, FaArrowRight, FaCalendarCheck, FaPhone, FaEnvelope, FaChevronDown, FaChevronUp } from 'react-icons/fa';

import { IoEarSharp } from "react-icons/io5";
import { GiScalpel } from "react-icons/gi";
import { ServicesModal } from "./services/ServicesModal";

interface Service {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

export default function Services() {
  const [showAllServices, setShowAllServices] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      icon: FaFlask,
      title: "Laboratory Services",
      description: "Comprehensive laboratory testing and diagnostic services including blood work, urinalysis, and other essential medical tests."
    },
    {
      icon: FaGift,
      title: "Pregnancy Packages",
      description: "Complete pregnancy care packages designed to support expectant mothers throughout their entire pregnancy journey."
    },
    {
      icon: FaShieldAlt,
      title: "HIV Screening",
      description: "Confidential HIV testing and screening services with professional counseling and follow-up care as needed."
    },
    {
      icon: FaStethoscope,
      title: "Pap Smear",
      description: "Routine cervical cancer screening tests performed by experienced healthcare professionals in a comfortable environment."
    },
    {
      icon: FaCamera,
      title: "Ultrasound",
      description: "Advanced ultrasound imaging services for pregnancy monitoring, diagnostic imaging, and medical assessments."
    },
    {
      icon: FaBaby,
      title: "Newborn Screening",
      description: "Comprehensive health screening for newborns to detect potential health conditions early for timely intervention."
    },
    {
      icon: IoEarSharp,
      title: "Newborn Hearing Screening",
      description: "Specialized hearing tests for newborns to ensure early detection and treatment of hearing-related issues."
    },
    {
      icon: FaUserMd,
      title: "Consultation",
      description: "Professional medical consultations with experienced doctors for various health concerns and medical advice."
    },
    {
      icon: FaEye,
      title: "Ears, Nose, and Throat (ENT)",
      description: "Specialized ENT services for diagnosis and treatment of ear, nose, throat, and related head and neck conditions."
    },
    {
      icon: FaFemale,
      title: "OB-Gyne",
      description: "Comprehensive obstetrics and gynecology services including women's health, pregnancy care, and reproductive health."
    },
    {
      icon: FaMedkit,
      title: "General Medicine",
      description: "Primary healthcare services covering general medical conditions, preventive care, and health maintenance."
    },
    {
      icon: FaHeart,
      title: "Internal Medicine",
      description: "Specialized internal medicine services focusing on adult diseases, chronic conditions, and complex medical cases."
    },
    {
      icon: FaBed,
      title: "Lying-in",
      description: "Comfortable maternity ward services providing excellent care for mothers during delivery and recovery period."
    },
    {
      icon: GiScalpel,
      title: "Circumcision",
      description: "Safe and professional circumcision procedures performed by experienced medical professionals with proper aftercare."
    }
  ];

  const displayedServices = showAllServices ? services : services.slice(0, 6);

  const toggleServices = () => {
    setShowAllServices(!showAllServices);
  };

  const openModal = (service: Service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

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
          {displayedServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="professional-card text-center group animate-fade-in-up hover:scale-105 transition-all duration-300" onClick={() => openModal(service)}>
                <div className="icon-circle mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent />
                </div>
                <h3 className="subsection-title mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed h-[68.25px] overflow-hidden">{service.description}</p>
                
                {/* Service highlight */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300 flex items-center mx-auto" onClick={(e) => { e.stopPropagation(); openModal(service); }}>
                    Learn More
                    <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* See More/See Less Button */}
        <div className="text-center mt-12">
          <button
            onClick={toggleServices}
            className={`
              inline-flex items-center px-6 py-3 text-blue-600 hover:text-blue-800 
              font-medium transition-all duration-300 rounded-lg hover:bg-blue-50
              ${!showAllServices ? 'animate-bounce' : ''}
            `}
          >
            {showAllServices ? (
              <>
                <FaChevronUp className="mr-2" />
                See Less
              </>
            ) : (
              <>
                <FaChevronDown className="mr-2" />
                See More Services
              </>
            )}
          </button>
        </div>

        {/* Service Availability Schedule */}
        <div className="section-card text-center mt-16 bg-gradient-light">
          <div className="max-w-3xl mx-auto">
            <div className="icon-circle mx-auto mb-6">
              <FaCalendarCheck />
            </div>
            <h3 className="subsection-title mb-4">Service Availability Schedule</h3>
            <p className="text-lg text-gray-600 mb-6">
              Check our service availability and schedule. View our doctors' schedules and laboratory operating hours 
              to plan your visit accordingly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                className="btn-primary"
                onClick={() => window.open('https://anacondajuts95.github.io/ERS-Schedule/', '_blank')}
              >
                <FaUserMd className="mr-2" />
                General Schedule
              </button>
            </div>
          </div>
        </div>

        {selectedService && (
          <ServicesModal
            isOpen={true}
            onClose={closeModal}
            service={{
              icon: <selectedService.icon />,
              name: selectedService.title,
              shortDescription: selectedService.description,
              description: selectedService.description,
            }}
          />
        )}
      </div>
    </section>
  );
} 