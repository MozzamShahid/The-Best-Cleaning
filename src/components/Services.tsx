import { MdCleaningServices, MdKitchen, MdMeetingRoom, MdWaterDrop, MdLocalCarWash } from 'react-icons/md';
import { GiVacuumCleaner, GiSofa, GiRollingSuitcase } from 'react-icons/gi';
import { FaSolarPanel, FaWindowMaximize } from 'react-icons/fa';
import { WiSunrise } from 'react-icons/wi';

interface Service {
  title: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: 'Deep Cleaning',
    icon: <MdCleaningServices className="w-8 h-8" />
  },
  {
    title: 'Kitchen Cleaning',
    icon: <MdKitchen className="w-8 h-8" />
  },
  {
    title: 'Restaurant Cleaning',
    icon: <GiVacuumCleaner className="w-8 h-8" />
  },
  {
    title: 'Office Cleaning',
    icon: <MdMeetingRoom className="w-8 h-8" />
  },
  {
    title: 'Water Tank Cleaning',
    icon: <MdWaterDrop className="w-8 h-8" />
  },
  {
    title: 'Solar Panels Cleaning',
    icon: <FaSolarPanel className="w-8 h-8" />
  },
  {
    title: 'Windows and Glass',
    icon: <FaWindowMaximize className="w-8 h-8" />
  },
  {
    title: 'Washroom Cleaning',
    icon: <WiSunrise className="w-8 h-8" />
  },
  {
    title: 'Furniture & Sofa',
    icon: <GiSofa className="w-8 h-8" />
  },
  {
    title: 'Curtains & Carpets',
    icon: <GiRollingSuitcase className="w-8 h-8" />
  },
  {
    title: 'Car Wash & Detailing',
    icon: <MdLocalCarWash className="w-8 h-8" />
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Cleaning Services
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center">
                <div className="text-blue-600 mb-3">
                  {service.icon}
                </div>
                <h3 className="text-sm font-medium text-gray-900 text-center">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 