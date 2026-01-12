export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-50 py-32 md:py-48 w-full z-10">
      
      {/* Animated Background Graphics */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-40">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          
          {/* Enhanced Photo UI */}
          <div className="relative mb-10 animate-float">
            {/* Decorative rings behind photo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-3xl rotate-6 scale-105 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-indigo-600 to-blue-400 rounded-3xl -rotate-3 scale-105 opacity-20"></div>
            
            <img
              src="/shiju.jpg"
              alt="Shiju A"
              className="relative h-40 w-40 md:h-48 md:w-48 rounded-3xl object-cover shadow-2xl border-4 border-white"
            />
            
            {/* Tech Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-2xl shadow-xl">
              <i className="fa-solid fa-code text-blue-600 text-xl"></i>
            </div>
          </div>

          {/* Text Section */}
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Shiju A</span>
          </h1>

          <h2 className="text-xl md:text-3xl font-light text-slate-600 mb-6 italic">
            Full Stack Developer
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Crafting robust digital solutions with modern code. Based in Kerala, India — 
            available for worldwide collaboration.
          </p>

          {/* Modern Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-200"
            >
              Let's Talk
            </a>

            <a
              href="#projects"
              className="bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 px-10 py-4 rounded-2xl font-bold transition-all"
            >
              View Projects
            </a>
          </div>

          {/* Glassmorphism Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl bg-white/60 backdrop-blur-md border border-white p-6 rounded-3xl shadow-sm">
            <div className="flex items-center justify-center gap-3">
              <i className="fa-solid fa-envelope text-blue-500"></i>
              <span className="text-slate-600 text-sm">shijuavtm@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <i className="fa-solid fa-phone text-indigo-500"></i>
              <span className="text-slate-600 text-sm">+91 9497192475</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <i className="fa-solid fa-location-dot text-red-400"></i>
              <span className="text-slate-600 text-sm">Kerala, India</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
