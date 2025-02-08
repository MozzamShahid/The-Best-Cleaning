import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

export const AboutPreview = () => {
  const highlights = [
    'Premium Quality Tools & Equipment',
    '25+ Years of Industry Experience',
    'Expert Technical Support',
    'Nationwide Delivery Service'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in Hardware Solutions
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              With over two decades of experience in the hardware industry, we provide 
              top-quality tools and equipment to professionals, contractors, and DIY enthusiasts.
              Our commitment to excellence has made us the go-to destination for all hardware needs.
            </p>
            <ul className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link 
              href="/about"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200"
            >
              Discover Our Story
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&h=800"
                  alt="Hardware Store Interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1567361808960-dec9cb578182?auto=format&fit=crop&w=800&h=600"
                  alt="Tools Display"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&h=600"
                  alt="Professional Tools"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&h=800"
                  alt="Equipment Display"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 