import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope, FaParking, FaBus, FaWifi, FaWheelchair } from 'react-icons/fa';

export default function Location() {
  const facilities = [
    { icon: <FaParking />, label: "Free Parking" },
    { icon: <FaBus />, label: "Public Transport" },
    { icon: <FaWifi />, label: "Free WiFi" },
    { icon: <FaWheelchair />, label: "Wheelchair Access" },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Visit Our Store
            </h1>
            <p className="text-xl text-gray-600">
              Conveniently located in the heart of the city, our store offers easy access and a wide range of hardware solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Map and Contact Info Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112345678!2d-122.419415484681!3d37.77492927975933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s0x0!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              {/* Address */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-xl">
                    <FaMapMarkerAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h3>
                    <p className="text-lg text-gray-600">
                      123 Hardware Street<br />
                      Tool City, TC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-xl">
                    <FaClock className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Hours</h3>
                    <div className="space-y-3">
                      {businessHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-lg text-gray-600">{schedule.day}</span>
                          <span className="text-lg font-medium text-gray-900">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-xl">
                      <FaPhone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Phone</h3>
                      <p className="text-lg text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-xl">
                      <FaEnvelope className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Email</h3>
                      <p className="text-lg text-gray-600">info@hardwarestore.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Store Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-blue-600 text-2xl mb-3 flex justify-center">
                  {facility.icon}
                </div>
                <span className="text-gray-900 font-medium">{facility.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 