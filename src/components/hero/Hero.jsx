import { motion } from "framer-motion";
import ScrollReveal from "../common/ScrollReveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[var(--primary)] opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-black opacity-30 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-black opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              <span className="text-sm font-medium text-[var(--primary)]">
                Available for opportunities
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
            >
              <span className="text-white">PORTFOLIO</span>
              <br />
              <span className="text-[var(--primary)]">2025</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl sm:text-2xl text-[var(--text-secondary)] max-w-xl"
            >
              Frontend &amp; Backend &amp; IoT Developer
              <br />
              Building digital solutions with
              <span className="text-white font-semibold"> Python</span>,
              <span className="text-white font-semibold"> PHP</span>, and
              <span className="text-white font-semibold"> React</span>
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a href="mailto:samsolsndr@gmail.com" className="btn-primary">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email saba
              </a>
              <a
                href="https://github.com/samsolakmal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.0.07 1.53 1.03 1.53 1.03.9 1.52 2.36 1.08 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.08-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.53 1.38.19 2.4.08 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
                </svg>
                GitHub
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex space-x-4"
            >
              {[
                { label: "GitHub", href: "https://github.com/samsolakmal", icon: "M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.0.07 1.53 1.03 1.53 1.03.9 1.52 2.36 1.08 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.08-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.53 1.38.19 2.4.08 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" },
                { label: "Instagram", href: "https://www.instagram.com/samsullakmal/", icon: "M12 2.163c3.204 0 3.584.012 4.85.072 1.366.065 2.633.336 3.633 1.312.49.464.867 1.002 1.291 1.608.424.606.636 1.208.636 1.845v.751c0 2.576-.298 3.864-.894 4.192-.197.123-.42.185-.66.185-.093 0-.198-.008-.336-.024-1.688-.198-3.308-.797-4.912-2.19-1.11-.904-2.22-1.83-2.22-2.794v-.5c0-.955.217-1.885.637-2.723.47-.99.914-1.966 1.187-2.929l.004-.044c.249-.325.486-.657.676-.983.547-.95.842-1.962.842-2.993v-.267c0-3.221-1.687-5.385-3.788-5.385-2.118 0-3.787 1.654-3.787 4.893 0 3.239 1.67 4.879 3.788 4.879 2.035 0 3.604-1.5 3.604-3.796v-.275c.067.006.142.01.22.01.236 0 .49-.05.714-.148.28-.118.525-.278.741-.471l.093-.079c.383-.323.718-.69.998-1.092.313-.442.564-.933.564-1.448 0-2.993-2.438-5.43-5.438-5.43-2.814 0-5.278 2.28-5.758 5.294l-.002.044c-.044.088-.077.18-.098.273-.21.136-.402.28-.57.438-.223.208-.42.43-.6.663-.385.467-.65 1.027-.65 1.627 0 .966.203 1.863.609 2.667.406.804.824 1.557 1.067 2.27.266.75.405 1.51.405 2.28v.49c0 2.806-1.703 4.21-3.779 4.21-1.73 0-3.23-1.08-3.23-2.87v-.055c0-1.666.934-2.606 2.306-3.052.28-.088.56-.18.77-.263.356-.148.667-.308.968-.503.36-.233.654-.502.654-.794v-.054c0-.397-.12-.758-.358-1.062C13.927 4.148 12.31 3.33 10.43 3.33 8.55 3.33 7.36 4.12 7.36 6.03c0 1.903 1.19 2.678 2.046 3.134.34.205.72.312 1.12.312.95 0 1.744-.952 1.744-2.12v-.06c0-.979-.579-1.662-1.433-1.662-.473 0-.863.294-1.079.76-.217.47-.29 1.013-.29 1.575v.06c0 2.54 1.682 3.514 3.034 3.514.834 0 1.526-.34 1.526-1.528v-.06c-.484.163-1.096.252-1.772.252-.53 0-.96-.22-.96-.99v-.06c0-.758.38-1.23.972-1.23.702 0 1.177.54 1.177 1.38v.055c0 .678-.276 1.182-.736 1.182-.48 0-.746-.432-.746-.95v-.06c0-.53.286-1.058.872-1.058.67 0 1.083.58 1.083 1.38v.055c0 1.666-1.24 2.698-2.54 2.698-.77 0-1.336-.414-1.336-1.368v-.056c0-.818.34-1.355.893-1.355.666 0 1.204.53 1.204 1.488v.06c0 .456-.178.734-.578.734-.51 0-.793-.43-.793-.947v-.055c0-.53.24-1.06.727-1.06.466 0 .68.39.68 1.02v.055c0 .666-.34 1.143-1.01 1.143-.63 0-1.014-.43-1.014-.97v-.06c0-.484.294-.815.876-.815.596 0 1.025.414 1.025 1.22v.056c0 .678-.374 1.176-.894 1.176-.574 0-1.026-.458-1.026-1.19v-.054c0-.52.267-1.04.806-1.04.58 0 .894.476.894 1.13v.055c0 .52-.22 1.041-.71 1.041-.474 0-.73.39-.73.876v-.054c0-.442.264-1.008.706-1.008.474 0 .67.346.67 1.01v.06c0 1.046-.604 1.578-1.85 1.578-.72 0-1.486-.397-1.486-1.236v-.055c0-.834.367-1.312.955-1.312.71 0 1.37.438 1.37 1.495v.06c0 1.358-1.052 1.97-2.53 1.97-.68 0-1.204-.295-1.204-.983v-.06c0-.656.314-1.116.81-1.116.525 0 .8-.348.8-1.008v-.055c0-.528.31-1.07.893-1.07.593 0 1.03.43 1.03 1.21v.06c0 .834-.39 1.284-1.116 1.284-.633 0-1.027-.42-1.027-1.168v-.054c0-.52.294-1.036.79-1.036.496 0 .73.396.73 1.108v.055c0 .53-.24 1.054-.706 1.054-.57 0-.74-.42-.74-.87v-.055c0-.442.274-1.008.706-1.008.474 0 .67.346.67 1.01v.06c0 1.666-1.56 2.662-2.83 2.662-.88 0-1.56-.46-1.56-1.32v-.06c0-.748.416-1.222 1.055-1.222.69 0 1.35.52 1.35 1.55v.054c0 1.096-1.014 1.67-2.53 1.67-.74 0-1.39-.34-1.39-.99v-.056c0-.74.378-1.33.96-1.33.69 0 1.268.438 1.268 1.46v.055c0 .748-.4 1.37-.954 1.37-.61 0-1.148-.474-1.148-.9v-.054c0-.442.27-1.066.784-1.066.52 0 .68.454.68 1.02v.055c0 1.557-1.45 2.512-2.7 2.512-.76 0-1.384-.44-1.384-1.19v-.054c0-.786.416-1.316 1.08-1.316.702 0 1.396.42 1.396 1.358v.054c0 1.228-1.21 1.834-2.6 1.834-.75 0-1.44-.336-1.44-.95v-.06c0-.54.334-1.094.92-1.094.616 0 1.066.436 1.066 1.06v.06c0 .548-.31 1.106-.874 1.106-.55 0-.804-.444-.804-.89v-.055c0-.49.23-1.086.68-1.086.47 0 .65.45.65 1.28v.054c0 1.014-1.21 1.788-2.576 1.788-.66 0-1.24-.26-1.24-.86v-.055c0-.51.33-1.094.89-1.094.56 0 1.084.398 1.084 1.05v.054c0 .57-.28 1.104-.778 1.104-.48 0-.68-.44-.68-.9s.2-.9.63-1.008c.46-.136 1.01-.15 1.588-.15.64 0 1.266.126 1.84.368.714.306 1.35.8 1.77 1.484.566.904 1.07 1.956 1.31 3.118.044.24.066.483.066.738 0 3.098-2.46 5.358-5.97 5.358-2.714 0-5.238-1.652-5.82-3.906l-.003-.045c-.04-.087-.076-.18-.096-.275-.042-.188-.063-.38-.063-.56 0-.636.25-1.05.74-1.05.47 0 .77.346.77 1.14v.06c0 .536-.21 1.028-.57 1.1-.572.13-1.086.023-1.504-.31-.62-1.443-1.65-2.78-2.99-4.06z" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[var(--dark-light)] border border-[var(--dark)] hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300 flex items-center justify-center text-[var(--text-secondary)] hover:text-white"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: 3D Avatar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            {/* Ring effect */}
            <div className="absolute inset-0 w-[340px] h-[460px] rounded-2xl border-2 border-[var(--primary)]/20 animate-pulse"></div>

            {/* 3D Card */}
            <div className="relative w-[300px] h-[420px] perspective-1200">
              <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 hover:rotate-x-8 hover:rotate-y-12 hover-translate-z-30">
                {/* Front - Photo */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-2 border-[var(--primary)]/30">
                  <img
                    src="photo.jpeg"
                    alt="Photo Profil Samsul Akmal"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      // Show placeholder
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-[var(--dark-light)]">
                          <div class="text-center">
                            <div class="w-20 h-20 mx-auto rounded-full bg-[var(--primary)] flex items-center justify-center mb-4">
                              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <p class="text-lg font-bold text-white">Tunggu Photo</p>
                            <p class="text-xs text-[var(--text-secondary)]">Loading...</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>

                {/* Back - Info Panel */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--dark)] to-[var(--dark-light)] p-6 flex flex-col justify-center shadow-2xl border-2 border-[var(--primary)]/20 backface-hidden">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white">Samsul Akmal</h3>
                    <p className="text-[var(--primary)] font-semibold mt-1">
                      Frontend &amp; Backend &amp; IoT
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] mt-2">
                      Self-taught Designer &amp; Developer
                    </p>
                    <div className="mt-4 flex justify-center space-x-3">
                      <span className="px-3 py-1 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] text-xs font-semibold border border-[var(--primary)]/30">
                        Python
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] text-xs font-semibold border border-[var(--primary)]/30">
                        PHP
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] text-xs font-semibold border border-[var(--primary)]/30">
                        React
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow orbs */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[var(--primary)] opacity-10 blur-3xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-[var(--text-secondary)]">
          <div className="w-1 h-8 rounded-full bg-[var(--primary)]/30"></div>
          <span className="text-xs">Scroll</span>
          <div className="w-1 h-8 rounded-full bg-[var(--primary)]/30"></div>
        </div>
      </motion.div>
    </section>
  );
}
