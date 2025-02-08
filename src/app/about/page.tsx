import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { FaTrophy, FaUsers, FaTools, FaGlobe, FaCheck } from 'react-icons/fa';

export default function About() {
  const stats = [
    { icon: <FaTrophy className="w-8 h-8" />, number: "25+", label: "Years Experience" },
    { icon: <FaUsers className="w-8 h-8" />, number: "10K+", label: "Happy Customers" },
    { icon: <FaTools className="w-8 h-8" />, number: "5000+", label: "Products" },
    { icon: <FaGlobe className="w-8 h-8" />, number: "50+", label: "Cities Served" },
  ];

  const values = [
    {
      title: "Quality Assurance",
      description: "We stock only the highest quality tools and equipment from trusted manufacturers."
    },
    {
      title: "Expert Knowledge",
      description: "Our team consists of industry professionals with deep technical expertise."
    },
    {
      title: "Customer First",
      description: "We prioritize customer satisfaction and provide comprehensive after-sales support."
    },
    {
      title: "Innovation",
      description: "Constantly updating our inventory with the latest tools and technology."
    }
  ];

  const teamMembers = [
    {
      name: "John Smith",
      role: "Technical Expert",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Sarah Johnson",
      role: "Sales Manager",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Mike Wilson",
      role: "Product Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Emily Brown",
      role: "Customer Service",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Your Trusted Hardware Partner Since 1998
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Providing quality tools and hardware solutions to professionals and DIY enthusiasts across the nation.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center items-center text-blue-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&w=800&h=1000"
                alt="Our Store"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Our Story
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Founded in 1998, we started as a small hardware shop with a big vision: to provide professionals and DIY enthusiasts with the best tools and equipment in the market.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Over the past 25 years, we've grown to become one of the leading hardware suppliers in the region, serving contractors, craftsmen, and homeowners with an extensive range of high-quality tools and equipment.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our success is built on our commitment to quality, expert knowledge, and outstanding customer service. We don't just sell tools – we provide solutions and expertise to help our customers succeed in their projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl inline-block mb-6">
                  <FaCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Meet Our Expert Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 text-lg">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 