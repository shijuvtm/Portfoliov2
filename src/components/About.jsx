export default function About() {
  return (
    <section id="about" className="py-24 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            About Me
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Bridging the gap between complex problems and elegant digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Story & Profile */}
          <div className="lg:col-span-7 space-y-8">
            <div className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 transition-all hover:shadow-xl hover:bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200">
                  <i className="fa-solid fa-rocket text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">My Journey</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                I am a Computer Science graduate with a deep-rooted passion for 
                <span className="text-blue-600 font-medium"> Full-Stack Development</span>. 
                My approach combines the logic of Java and Python with the creative 
                flexibility of React and Node.js. I don't just write code; I build 
                experiences that matter.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-6 bg-indigo-50 rounded-3xl text-center border border-indigo-100 transition-transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-indigo-600 mb-1">80%</div>
                <div className="text-sm text-indigo-700 font-medium uppercase tracking-wider">M.Sc Score</div>
              </div>
              <div className="p-6 bg-emerald-50 rounded-3xl text-center border border-emerald-100 transition-transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-emerald-600 mb-1">10+</div>
                <div className="text-sm text-emerald-700 font-medium uppercase tracking-wider">Projects</div>
              </div>
              <div className="p-6 bg-amber-50 rounded-3xl text-center border border-amber-100 transition-transform hover:-translate-y-1 col-span-2 md:col-span-1">
                <div className="text-3xl font-bold text-amber-600 mb-1">Intern</div>
                <div className="text-sm text-amber-700 font-medium uppercase tracking-wider">Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline (Education & Experience) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="relative p-6 bg-white border border-slate-200 rounded-3xl shadow-sm hover:border-blue-300 transition-colors">
              <div className="absolute -top-3 left-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Education
              </div>
              <div className="flex gap-4 mt-2">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                  <i className="fa-solid fa-graduation-cap text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800">M.Sc. Computer Science</h4>
                  <p className="text-blue-600 font-medium mb-2">2022 - 2024</p>
                  <p className="text-gray-500 text-sm italic leading-snug">
                    Focusing on advanced algorithms, machine learning, and software architecture.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <div className="relative p-6 bg-white border border-slate-200 rounded-3xl shadow-sm hover:border-indigo-300 transition-colors">
              <div className="absolute -top-3 left-6 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Experience
              </div>
              <div className="flex gap-4 mt-2">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
                  <i className="fa-solid fa-laptop-code text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800">Full Stack Intern</h4>
                  <p className="text-indigo-600 font-medium mb-2">React & Drupal</p>
                  <ul className="text-gray-500 text-sm space-y-1">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      Developed UI components in React
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      Managed CMS content with Drupal
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
