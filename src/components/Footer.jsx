import { FaLinkedin, FaGithub, FaTwitter, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8 w-full border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Shiju A
            </h3>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Crafting high-performance digital experiences. Specializing in modern Full Stack development to turn complex problems into elegant solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <FaGithub size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Navigation</h3>
            <ul className="space-y-3">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="h-[1px] w-0 bg-blue-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Let's Connect</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white transition-colors">
                <span className="block text-xs text-gray-500">Email</span>
                <a href="mailto:shijuavtm@gmail.com">shijuavtm@gmail.com</a>
              </li>
              <li className="hover:text-white transition-colors">
                <span className="block text-xs text-gray-500">Location</span>
                Kerala, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Shiju A. Built with React & Tailwind.</p>
          
          <button 
            onClick={scrollToTop}
            className="mt-6 md:mt-0 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <div className="p-2 bg-gray-800 rounded-full group-hover:-translate-y-1 transition-transform">
              <FaArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
