import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Location() {
  const businessHours = [
    { day: "Monday - Saturday", hours: "24 Hours" },
    { day: "Sunday", hours: "24 Hours" },
    { day: "Emergency Service", hours: "Available" },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90 z-10" />
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Contact Us
            </h1>
            <p className="text-xl text-gray-100">
              Professional cleaning services available 24/7 across Lahore
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-xl">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h3>
                  <p className="text-lg text-gray-600">
                    Lahore, Pakistan<br />
                    Service available in all areas
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-xl">
                  <FaClock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Hours</h3>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-3">
                        <span className="text-lg text-gray-600">{schedule.day}</span>
                        <span className="text-lg font-medium text-blue-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-xl">
                    <FaPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-lg text-blue-600">+92 324 5922913</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-xl">
                    <FaWhatsapp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
                    <p className="text-lg text-blue-600">+92 324 5922913</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-xl">
                    <FaEnvelope className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-lg text-blue-600">jeejutt453@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credits Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            Built by{' '}
            <a 
              href="https://maps.app.goo.gl/TChr3Us6XFfqZ2xc9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Speed Net Printing
            </a>
          </p>
          <p className="text-gray-600 mt-2">
            Developed by{' '}
            <a 
              href="https://www.linkedin.com/in/mozzam-shahid/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Mozzam
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
} 