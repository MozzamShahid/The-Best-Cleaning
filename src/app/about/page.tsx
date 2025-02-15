import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { FaUsers, FaCheckCircle, FaMapMarked, FaClock } from 'react-icons/fa';
import cleaning from '../../Images/cleaning.jpg';

export default function About() {
  const stats = [
    { icon: <FaUsers className="w-8 h-8" />, number: "1000+", label: "Happy Clients" },
    { icon: <FaCheckCircle className="w-8 h-8" />, number: "11", label: "Services" },
    { icon: <FaMapMarked className="w-8 h-8" />, number: "100%", label: "Lahore Coverage" },
    { icon: <FaClock className="w-8 h-8" />, number: "24/7", label: "Available" },
  ];

  const values = [
    {
      title: "Quality Service",
      description: "We deliver exceptional cleaning with attention to every detail."
    },
    {
      title: "Trusted Team",
      description: "Our professional cleaners are vetted and trained to highest standards."
    },
    {
      title: "Customer First",
      description: "Your satisfaction is our top priority, always ready to serve."
    },
    {
      title: "Eco-Friendly",
      description: "Using environmentally safe cleaning solutions for your space."
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section with Parallax Effect */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90 z-10" />
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 animate-fade-in">
              The Best Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              We clean, you relax. Your trusted cleaning partner in Lahore.
            </p>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex justify-center items-center text-white mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Floating Elements */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-50" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-50 rounded-full opacity-50" />
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={cleaning}
                  alt="Professional Cleaning Service"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="space-y-8 relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-full opacity-50" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative">
                About Us
              </h2>
              <div className="space-y-6 relative">
                <p className="text-xl text-gray-600 leading-relaxed">
                  At The Best, we understand that a clean environment is essential for your well-being and productivity. Our mission is to provide top-quality cleaning services that exceed your expectations.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We take pride in our work and ensure that every corner of your space receives the attention it deserves. Our team of experienced professionals uses eco-friendly products and advanced cleaning techniques.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Available 24/7, we serve all areas of Lahore with a commitment to excellence and customer satisfaction. Let us handle the cleaning while you focus on what matters most to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Hover Effects */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl inline-block mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                    <FaCheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {value.description}
                  </p>
                </div>
                <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 