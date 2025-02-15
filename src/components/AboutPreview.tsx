import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';
import twenty from '../Images/twentyfour.png'
import cleaning from '../Images/cleaning.jpg'
export const AboutPreview = () => {
  const highlights = [
    'Clean with pride, live with joy.',
    'Trusted by Hundreds of Clients',
    'Eco-Friendly Cleaning Solutions',
    'Serving All Areas of Lahore'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Best Cleaning in Lahore
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We clean, you relax. At The Best, we take pride in delivering exceptional 
              cleaning services across Lahore. Our commitment to excellence and attention 
              to detail has made us the preferred choice for residential and commercial cleaning.
            </p>
            <ul className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Image src={twenty} alt="twentyfour" width={200} height={200}/>
            {/* <Link 
              href="/about"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200"
            >
              Learn More About Us
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link> */}
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <Image
                src={cleaning}
                alt="Professional Cleaning Service"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 