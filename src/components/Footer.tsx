import { Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold">Nomos Insights</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming businesses through innovative IT solutions. Your trusted partner in digital transformation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#technologies" className="text-gray-400 hover:text-white transition-colors">Technologies</a></li>
              <li><a href="#industries" className="text-gray-400 hover:text-white transition-colors">Industries</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Gujarat, India</li>
              <li>contact@nomosinsights.com</li>
              <li>+91 (XXX) XXX-XXXX</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Nomos Insights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}