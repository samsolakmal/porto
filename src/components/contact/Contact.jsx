import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import ScrollReveal from "../common/ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[var(--dark)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Mari <span className="text-[var(--primary)]">Berhubungan</span>
              </h2>
              <p className="text-lg text-[var(--text-secondary)]">
                Lanjutkan proyek berikutnya dengan bekerja sama. Kirimkan pesan atau hubungi saya langsung melalui email.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-[var(--dark-light)] border border-[var(--dark)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Email</p>
                    <a href={`mailto:${portfolioData.personal.email}`} className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-[var(--dark-light)] border border-[var(--dark)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Lokasi</p>
                    <p className="text-sm text-[var(--text-secondary)]">{portfolioData.personal.location}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-[var(--dark-light)] border border-[var(--dark)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.0.07 1.53 1.03 1.53 1.03.9 1.52 2.36 1.08 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.08-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.53 1.38.19 2.4.08 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">GitHub</p>
                    <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
                      {portfolioData.personal.github}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <a
                href="mailto:samsolsndr@gmail.com"
                className="btn-primary w-full justify-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Hubungi Sekarang
              </a>
            </ScrollReveal>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[var(--dark-light)] rounded-2xl p-8 border border-[var(--dark)]"
          >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-3 rounded-lg bg-[var(--dark)] border border-[var(--dark)] text-white placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                  />
                </div>
                <div className="form-group">
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="nama@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-[var(--dark)] border border-[var(--dark)] text-white placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Pesan
                </label>
                <textarea
                  rows="4"
                  placeholder="Tulis pesan Anda..."
                  className="w-full px-4 py-3 rounded-lg bg-[var(--dark)] border border-[var(--dark)] text-white placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Kirim Pesan
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
