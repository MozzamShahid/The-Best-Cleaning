import Image from 'next/image';
import { FaTools, FaWrench, FaHardHat } from 'react-icons/fa';
import { MdHandyman } from 'react-icons/md';

interface Service {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: 'Power Tools',
    description: 'Professional-grade power tools for construction, woodworking, and home improvement projects.',
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=500&h=300&fit=crop',
    icon: <FaTools className="w-6 h-6" />
  },
  {
    title: 'Hand Tools',
    description: 'High-quality hand tools designed for precision, durability, and comfortable handling.',
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=300&fit=crop',
    icon: <FaWrench className="w-6 h-6" />
  },
  {
    title: 'Safety Equipment',
    description: 'Complete range of safety gear and equipment to ensure workplace protection.',
    image: 'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=500&h=300&fit=crop',
    icon: <FaHardHat className="w-6 h-6" />
  },
  {
    title: 'Hardware Supplies',
    description: 'Extensive selection of hardware supplies for contractors, builders, and DIY enthusiasts.',
    image: 'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=500&h=300&fit=crop',
    icon: <MdHandyman className="w-6 h-6" />
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Hardware Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Providing quality tools and equipment for professionals and DIY enthusiasts.
            Every project deserves the right tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium group">
                  View Details
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 