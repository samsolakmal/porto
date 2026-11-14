import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import ScrollReveal from "../common/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[var(--dark)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image/Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--dark-light)] border border-[var(--dark)]">
              <img
                src="foto.jpeg"
                alt="Foto Profil Samsul Akmal"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `
                    <div class="w-full h-full flex flex-col items-center justify-center text-white">
                      <div class="w-24 h-24 mx-auto rounded-full bg-[var(--primary)] flex items-center justify-center mb-4">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h3 class="text-lg font-bold">Samsul Akmal</h3>
                      <p class="text-sm text-[var(--text-secondary)]">Frontend &amp; Backend &amp; IoT Developer</p>
                    </div>
                  `;
                }}
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex justify-center space-x-3">
                <span className="px-3 py-1 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] text-xs font-semibold border border-[var(--primary)]/30">
                  🇮🇩 Indonesia
                </span>
                <span className="px-3 py-1 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] text-xs font-semibold border border-[var(--primary)]/30">
                  🇯🇪 Jawa
                </span>
                <span className="px-3 py-1 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] text-xs font-semibold border border-[var(--primary)]/30">
                  🇬🇧 English
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Tentang <span className="text-[var(--primary)]">Saya</span>
              </h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                {portfolioData.personal.bio}
              </p>
            </ScrollReveal>

            {/* Education */}
            <ScrollReveal delay={0.2}>
              <div className="bg-[var(--dark-light)] rounded-xl p-5 border border-[var(--dark)]">
                <h4 className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide mb-2">
                  Pendidikan
                </h4>
                <p className="text-white font-semibold">
                  {portfolioData.education.school}
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  {portfolioData.education.location} &middot; {portfolioData.education.period}
                </p>
              </div>
            </ScrollReveal>

            {/* Languages */}
            <ScrollReveal delay={0.4}>
              <div className="bg-[var(--dark-light)] rounded-xl p-5 border border-[var(--dark)]">
                <h4 className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide mb-3">
                  Bahasa
                </h4>
                <div className="space-y-3">
                  {portfolioData.languages.map((lang) => (
                    <div key={lang.name} className="flex items-center space-x-3">
                      <span className="text-lg">{lang.flag}</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">{lang.name}</p>
                        <div className="w-full h-2 rounded-full bg-[var(--dark)] overflow-hidden">
                          <div
                            className={`h-full rounded-full ${lang.level >= 90 ? 'bg-green-500' : lang.level >= 70 ? 'bg-[var(--primary)]' : 'bg-yellow-500'}`}
                            style={{ width: `${lang.level}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-xs text-[var(--text-secondary)] font-medium">{lang.level}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Contact CTA */}
            <ScrollReveal delay={0.6}>
              <a
                href="mailto:samsolsndr@gmail.com"
                className="btn-primary w-full justify-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Kirim Email
              </a>
            </ScrollReveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
