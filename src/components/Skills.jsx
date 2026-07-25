import {
  programmingLanguages,
  frameworks,
  databases,
  aiMlSkills,
  tools,
  coreAreas,
  softSkills,
} from "../data/Skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 w-full overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Technical Expertise
          </h2>
          <div className="h-1.5 w-20 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my stack and the tools I use to build scalable applications.
          </p>
        </div>

        {/* Top Grid: Main Tech Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Programming Languages */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <i className="fa-solid fa-terminal text-indigo-600 text-xl"></i>
              <h3 className="text-xl font-bold text-slate-800">Languages</h3>
            </div>
            <div className="space-y-6">
              {programmingLanguages.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-semibold">{skill.name}</span>
                    <span className="text-indigo-600 font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-blue-500 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <i className="fa-solid fa-layer-group text-blue-600 text-xl"></i>
              <h3 className="text-xl font-bold text-slate-800">Frameworks & Libraries</h3>
            </div>
            <div className="space-y-6">
              {frameworks.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-semibold">{skill.name}</span>
                    <span className="text-blue-600 font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Grid: Databases & AI/ML */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Databases */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <i className="fa-solid fa-database text-amber-600 text-xl"></i>
              <h3 className="text-xl font-bold text-slate-800">Databases</h3>
            </div>
            <div className="space-y-6">
              {databases.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-semibold">{skill.name}</span>
                    <span className="text-amber-600 font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI / ML Skills */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <i className="fa-solid fa-brain text-purple-600 text-xl"></i>
              <h3 className="text-xl font-bold text-slate-800">AI & Machine Learning</h3>
            </div>
            <div className="space-y-6">
              {aiMlSkills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-semibold">{skill.name}</span>
                    <span className="text-purple-600 font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Grid: Tools and Tags */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tools & Platforms */}
          <div className="lg:col-span-1 bg-slate-900 p-8 rounded-3xl text-white shadow-xl shadow-slate-200">
            <div className="flex items-center gap-3 mb-8">
              <i className="fa-solid fa-screwdriver-wrench text-indigo-400 text-xl"></i>
              <h3 className="text-xl font-bold">Tools & Platforms</h3>
            </div>
            <div className="space-y-5">
              {tools.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-indigo-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div
                      className="bg-indigo-400 h-1.5 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Areas & Soft Skills as Pill Tags */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Core Areas */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <i className="fa-solid fa-microchip text-rose-500"></i> Core Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {coreAreas.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 bg-rose-50 text-rose-600 rounded-xl text-sm font-semibold border border-rose-100"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <i className="fa-solid fa-users text-emerald-500"></i> Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl text-sm font-semibold border border-emerald-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
