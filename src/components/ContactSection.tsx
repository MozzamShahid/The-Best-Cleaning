'use client';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
      actionText: 'Call Now'
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email Us',
      details: 'sales@hardwarestore.com',
      action: 'mailto:sales@hardwarestore.com',
      actionText: 'Send Email'
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Visit Us',
      details: '123 Hardware Street, Tool City, TC 12345',
      action: 'https://maps.google.com',
      actionText: 'Get Directions'
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: 'Business Hours',
      details: 'Mon-Sat: 8AM - 6PM',
      subDetails: 'Sunday: Closed',
      action: '#',
      actionText: 'View Hours'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Need expert advice on tools or hardware? Our team is here to help you find
            the perfect solution for your project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-xl mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-2">{item.details}</p>
                {item.subDetails && (
                  <p className="text-gray-500 text-sm mb-2">{item.subDetails}</p>
                )}
                <a
                  href={item.action}
                  target={item.action.startsWith('http') ? '_blank' : '_self'}
                  rel={item.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  {item.actionText}
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 