import { motion } from "framer-motion";
import { education } from "../data/education";
import { achievements } from "../data/achievements";
import { certifications } from "../data/certifications";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50 w-full overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Education
          </h2>
          <div className="h-1.5 w-20 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic journey and professional milestones in Computer Science.
          </p>
        </motion.div>

        {/* Education Timeline/Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 mb-20"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-slate-800">{edu.degree}</h3>
                <span className="text-indigo-600 font-semibold bg-indigo-50 px-4 py-1 rounded-full text-sm mt-2 md:mt-0">
                  {edu.period}
                </span>
              </div>
              <p className="text-lg text-slate-700 font-medium mb-1">{edu.institution}</p>
              <p className="text-slate-500 mb-4 italic">{edu.percentage}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {edu.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Certifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
              <span className="mr-3">📜</span> Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                  className="bg-white p-6 rounded-xl border-l-4 border-blue-500 shadow-sm"
                >
                  <h4 className="text-lg font-bold text-slate-800">{cert.title}</h4>
                  <p className="text-indigo-600 text-sm font-bold mb-2">{cert.issuer}</p>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
              <span className="mr-3">🏆</span> Achievements
            </h3>
            <div className="space-y-6">
              {achievements.map((ach, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                  className="bg-white p-6 rounded-xl border-l-4 border-emerald-500 shadow-sm"
                >
                  <h4 className="text-lg font-bold text-slate-800">{ach.title}</h4>
                  <p className="text-emerald-600 text-sm font-bold mb-2">{ach.issuer}</p>
                  <p className="text-gray-600 text-sm">{ach.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
      }
