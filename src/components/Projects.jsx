import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { projects } from "../data/projects";
import { FaExternalLinkAlt, FaGithub, FaCalendarAlt, FaCheckCircle, FaChevronDown } from "react-icons/fa";

export default function Projects() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Adjusted offset to make sure ball starts and ends correctly
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Center the ball on the line by adjusting the left/X positioning
  const ballY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="projects" ref={containerRef} className="py-24 bg-white w-full relative">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-gray-500 italic">"Design is not just what it looks like, it's how it works."</p>
        </div>

        <div className="relative">
          {/* --- THE TRACK LINE --- */}
          {/* Moved to left:0 and ensured it is behind the ball */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-[2px] bg-gray-100 hidden sm:block">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-0 w-full bg-blue-600 h-full"
            />
            
            {/* THE MOVING BALL - Centered exactly on the line */}
            <motion.div 
              style={{ y: ballY }}
              className="absolute -left-[11px] top-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-30 text-white border-4 border-white"
            >
              <FaChevronDown size={10} className="animate-bounce" />
            </motion.div>
          </div>

          {/* PROJECT LIST */}
          <div className="sm:ml-12 md:ml-20 space-y-24">
            {projects.map((project, index) => (
              <div key={index} className="relative group">
                {/* Static node indicator on the line */}
                <div className="hidden sm:block absolute -left-[53px] md:-left-[69px] top-2 w-3 h-3 bg-white border-2 border-blue-600 rounded-full z-20"></div>

                <div className="flex flex-col gap-6">
                  {/* 1. Date */}
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider">
                    <FaCalendarAlt /> {project.period}
                  </div>

                  {/* 2. Title & Description */}
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                      {project.description}
                    </p>
                  </div>

                  {/* 3. Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                        <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* 4. Tech Stack (NOW UNDER THE PROJECT) */}
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 inline-block w-fit">
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-white px-3 py-1 rounded-lg shadow-sm text-gray-700 text-xs font-semibold border border-gray-100">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 5. Action Buttons */}
                  <div className="flex gap-4 pt-2">
                    <a href={project.demoLink} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 hover:shadow-lg transition-all">
                      <FaExternalLinkAlt size={14} /> Demo
                    </a>
                    <a href={project.codeLink} className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:border-gray-800 hover:bg-gray-800 hover:text-white transition-all">
                      <FaGithub size={16} /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
