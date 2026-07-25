import {
  programmingLanguages,
  frameworks,
  databases,
  aiMlSkills,
  tools,
  coreAreas,
  softSkills,
} from "../data/Skills";

const SkillCard = ({ title, icon, skills, colorClass, gradientFrom, gradientTo, textColor }) => {
  return (
    <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-8">
        <div className={`p-3 rounded-lg ${colorClass}`}>
          <i className={`fa-solid ${icon} text-white text-lg`}></i>
        </div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      </div>
      <div className="space-y-5">
        {skills.map((skill) => (
          <div key={skill.name} className="group/item">
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-700 font-semibold text-sm">{skill.name}</span>
              <span className={`text-sm font-bold ${textColor}`}>{skill.percentage}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div
                className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} h-full rounded-full transition-all duration-1000 ease-out group-hover/item:shadow-lg`}
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TagPill = ({ label, colorClass, borderColor, textColor }) => {
  return (
    <span
      className={`px-4 py-2 ${colorClass} ${textColor} rounded-full text-xs font-semibold border ${borderColor} transition-all duration-300 hover:shadow-md hover:scale-105 cursor-default`}
    >
      {label}
    </span>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-white via-slate-50 to-white w-full overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 w-8 bg-indigo-600 rounded-full"></div>
              <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Skills & Expertise</span>
              <div className="h-1 w-8 bg-indigo-600 rounded-full"></div>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900">
            Technical Expertise
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            A comprehensive overview of my technical stack, tools, and proficiencies built over years of full-stack development and AI/ML work.
          </p>
        </div>

        {/* Top Grid: Main Tech Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SkillCard
            title="Programming Languages"
            icon="fa-terminal"
            skills={programmingLanguages}
            colorClass="bg-indigo-600"
            gradientFrom="from-indigo-500"
            gradientTo="to-blue-500"
            textColor="text-indigo-600"
          />

          <SkillCard
            title="Frameworks & Libraries"
            icon="fa-layer-group"
            skills={frameworks}
            colorClass="bg-blue-600"
            gradientFrom="from-blue-500"
            gradientTo="to-cyan-500"
            textColor="text-blue-600"
          />
        </div>

        {/* Middle Grid: Databases & AI/ML */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SkillCard
            title="Databases & Storage"
            icon="fa-database"
            skills={databases}
            colorClass="bg-amber-600"
            gradientFrom="from-amber-500"
            gradientTo="to-orange-500"
            textColor="text-amber-600"
          />

          <SkillCard
            title="AI & Machine Learning"
            icon="fa-brain"
            skills={aiMlSkills}
            colorClass="bg-purple-600"
            gradientFrom="from-purple-500"
            gradientTo="to-indigo-500"
            textColor="text-purple-600"
          />
        </div>

        {/* Bottom Grid: Tools, Core Areas, and Soft Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tools & Platforms */}
          <div className="group lg:col-span-1 bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 border border-slate-700">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-indigo-600 rounded-lg">
                <i className="fa-solid fa-screwdriver-wrench text-white text-lg"></i>
              </div>
              <h3 className="text-xl font-bold">Tools & Platforms</h3>
            </div>
            <div className="space-y-4">
              {tools.map((skill) => (
                <div key={skill.name} className="group/tool">
                  <div className="flex justify-between mb-1.5 text-sm">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-indigo-400 font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Areas & Soft Skills */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Core Areas */}
            <div className="group bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl border border-rose-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <div className="p-2 bg-rose-600 rounded-lg">
                  <i className="fa-solid fa-microchip text-white"></i>
                </div>
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {coreAreas.map((area) => (
                  <TagPill
                    key={area}
                    label={area}
                    colorClass="bg-white"
                    borderColor="border-rose-200"
                    textColor="text-rose-600"
                  />
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <div className="p-2 bg-emerald-600 rounded-lg">
                  <i className="fa-solid fa-users text-white"></i>
                </div>
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <TagPill
                    key={skill}
                    label={skill}
                    colorClass="bg-white"
                    borderColor="border-emerald-200"
                    textColor="text-emerald-600"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 right-0 w-72 h-72 bg-indigo-100 rounded-full opacity-20 blur-3xl -z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl -z-0 pointer-events-none"></div>
    </section>
  );
}
