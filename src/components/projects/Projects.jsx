import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import ScrollReveal from "../common/ScrollReveal";

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-[var(--dark)] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-black opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-[var(--primary)] opacity-10 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            Proyek <span className="text-[var(--primary)]">2025</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-center max-w-xl mx-auto mb-12">
            Beberapa proyek yang telah saya kembangkan dalam tahun 2025
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[var(--dark-light)] rounded-xl overflow-hidden border border-[var(--dark)] card-hover"
            >
              {/* Project Icon */}
              <div className="h-32 bg-[var(--dark)] flex items-center justify-center">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[var(--primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={project.icon} />
                  </svg>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5 space-y-3">
                <h3 className="font-semibold text-lg text-white">{project.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-[var(--primary)]/20 text-[var(--primary)] border border-[var(--primary)]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {project.demo && (
                  <div className="flex space-x-3 pt-2">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-sm font-medium text-[var(--primary)] border border-[var(--primary)]/30 rounded-lg py-2 hover:bg-[var(--primary)]/10 transition-colors"
                    >
                      Demo
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-sm font-medium text-white border border-white/10 rounded-lg py-2 hover:bg-white/5 transition-colors"
                    >
                      Code
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
