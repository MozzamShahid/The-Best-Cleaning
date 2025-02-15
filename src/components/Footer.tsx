import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Professional cleaning services for homes and offices. Making spaces cleaner and healthier since 2020.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-gray-400 hover:text-white transition-colors">
                  Our Location
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: jeejutt453@gmail.com</li>
              <li>Phone: 03245922913</li>
              <li>Address: House number 8 street 8 shabnum caluney kotlakhpat, Lahore</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Saturday: 24 Hours</li>
              <li>Sunday: 24 Hours</li>
              <li>Emergency Service: Available</li>
            </ul>
          </div>
        </div>
        
        {/* Credits Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 mb-4">&copy; {new Date().getFullYear()} The Best Cleaning. All rights reserved.</p>
          <div className="flex justify-center items-center gap-4">
            <p className="text-gray-400">
              Built by{' '}
              <a 
                href="https://maps.app.goo.gl/TChr3Us6XFfqZ2xc9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Speed Net Printing
              </a>
            </p>
            <span className="text-gray-600">|</span>
            <p className="text-gray-400">
              Developed by{' '}
              <a 
                href="https://www.linkedin.com/in/mozzam-shahid/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Mozzam
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 