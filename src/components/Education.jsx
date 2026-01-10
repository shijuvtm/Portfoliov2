import { education } from "../data/education";
import { achievements } from "../data/achievements";
import { certifications } from "../data/certifications";
export default function Education() {
  return (
         <section id="education" className="py-16 bg-white w-full">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Education</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            My academic journey in Computer Science
          </p>

          <div className="bg-blue-500 hover:bg-blue-300 
            transition-all duration-300 ease-in-out
            hover:shadow-lg p-4 rounded space-y-8 mb-16">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <p className="text-gray-600">{edu.percentage} | {edu.period}</p>
                </div>
                <p className="text-gray-700 mb-3">{edu.institution}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Certifications</h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-800">{cert.title}</h4>
                    <p className="text-gray-600 font-medium mb-2">{cert.issuer}</p>
                    <p className="text-gray-600">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Achievements</h3>
              <div className="space-y-6">
                {achievements.map((ach, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-800">{ach.title}</h4>
                    <p className="text-gray-600 font-medium mb-2">{ach.issuer}</p>
                    <p className="text-gray-600">{ach.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
