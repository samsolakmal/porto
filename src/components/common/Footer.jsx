import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";

export default function Footer() {
  return (
    <footer className="bg-[var(--dark-light)] border-t border-[var(--dark)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Samsul <span className="text-[var(--primary)]">Akmal</span>
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Frontend &amp; Backend &amp; IoT Developer
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href={portfolioData.personal.email}
                className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.0.07 1.53 1.03 1.53 1.03.9 1.52 2.36 1.08 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.08-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.53 1.38.19 2.4.08 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
                </svg>
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={portfolioData.personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.072 1.366.065 2.633.336 3.633 1.312.49.464.867 1.002 1.291 1.608.424.606.636 1.208.636 1.845v.751c0 2.576-.298 3.864-.894 4.192-.197.123-.42.185-.66.185-.093 0-.198-.008-.336-.024-1.688-.198-3.308-.797-4.912-2.19-1.11-.904-2.22-1.83-2.22-2.794v-.5c0-.955.217-1.885.637-2.723.47-.99.914-1.966 1.187-2.929l.004-.044c.249-.325.486-.657.676-.983.547-.95.842-1.962.842-2.993v-.267c0-3.221-1.687-5.385-3.788-5.385-2.118 0-3.787 1.654-3.787 4.893 0 3.239 1.67 4.879 3.788 4.879 2.035 0 3.604-1.5 3.604-3.796v-.275c.067.006.142.01.22.01.236 0 .49-.05.714-.148.28-.118.525-.278.741-.471l.093-.079c.383-.323.718-.69.998-1.092.313-.442.564-.933.564-1.448 0-2.993-2.438-5.43-5.438-5.43-2.814 0-5.278 2.28-5.758 5.294l-.002.044c-.044.088-.077.18-.098.273-.21.136-.402.28-.57.438-.223.208-.42.43-.6.663-.385.467-.65 1.027-.65 1.627 0 .966.203 1.863.609 2.667.406.804.824 1.557 1.067 2.27.266.75.405 1.51.405 2.28v.49c0 2.806-1.703 4.21-3.779 4.21-1.73 0-3.23-1.08-3.23-2.87v-.055c0-1.666.934-2.606 2.306-3.052.28-.088.56-.18.77-.263.356-.148.667-.308.968-.503.36-.233.654-.502.654-.794v-.054c0-.397-.12-.758-.358-1.062C13.927 4.148 12.31 3.33 10.43 3.33 8.55 3.33 7.36 4.12 7.36 6.03c0 1.903 1.19 2.678 2.046 3.134.34.205.72.312 1.12.312.95 0 1.744-.952 1.744-2.12v-.06c0-.979-.579-1.662-1.433-1.662-.473 0-.863.294-1.079.76-.217.47-.29 1.013-.29 1.575v.06c0 2.54 1.682 3.514 3.034 3.514.834 0 1.526-.34 1.526-1.528v-.06c-.484.163-1.096.252-1.772.252-.53 0-.96-.22-.96-.99v-.06c0-.758.38-1.23.972-1.23.702 0 1.177.54 1.177 1.38v.055c0 .678-.276 1.182-.736 1.182-.48 0-.746-.432-.746-.95v-.06c0-.53.286-1.058.872-1.058.67 0 1.083.58 1.083 1.38v.055c0 1.666-1.24 2.698-2.54 2.698-.77 0-1.336-.414-1.336-1.368v-.056c0-.818.34-1.355.893-1.355.666 0 1.204.53 1.204 1.488v.06c0 .456-.178.734-.578.734-.51 0-.793-.43-.793-.947v-.055c0-.53.24-1.06.727-1.06.466 0 .68.39.68 1.02v.055c0 .666-.34 1.143-1.01 1.143-.63 0-1.014-.43-1.014-.97v-.06c0-.484.294-.815.876-1.062C13.927 4.148 12.31 3.33 10.43 3.33 8.55 3.33 7.36 4.12 7.36 6.03c0 1.903 1.19 2.678 2.046 3.134.34.205.72.312 1.12.312.95 0 1.744-.952 1.744-2.12v-.06c0-.979-.579-1.662-1.433-1.662-.473 0-.863.294-1.079.76-.217.47-.29 1.013-.29 1.575v.06c0 2.54 1.682 3.514 3.034 3.514.834 0 1.526-.34 1.526-1.528v-.06c-.484.163-1.096.252-1.772.252-.53 0-.96-.22-.96-.99v-.06c0-.758.38-1.23.972-1.23.702 0 1.177.54 1.177 1.38v.055c0 .678-.276 1.182-.736 1.182-.48 0-.746-.432-.746-.95v-.06c0-.53.286-1.058.872-1.058.67 0 1.083.58 1.083 1.38v.055c0 1.666-1.24 2.698-2.54 2.698-.77 0-1.336-.414-1.336-1.368v-.056c0-.818.34-1.355.893-1.355.666 0 1.204.53 1.204 1.488v.06c0 .456-.178.734-.578.734-.51 0-.793-.43-.793-.947v-.055c0-.53.24-1.06.727-1.06.466 0 .68.39.68 1.02v.055c0 .666-.34 1.143-1.01 1.143-.63 0-1.014-.43-1.014-.97v-.06c0-.484.294-.815.876-1.062C13.927 4.148 12.31 3.33 10.43 3.33 8.55 3.33 7.36 4.12 7.36 6.03c0 1.903 1.19 2.678 2.046 3.134.34.205.72.312 1.12.312.95 0 1.744-.952 1.744-2.12v-.06c0-.979-.579-1.662-1.433-1.662-.473 0-.863.294-1.079.76-.217.47-.29 1.013-.29 1.575v.06c0 2.54 1.682 3.514 3.034 3.514.834 0 1.526-.34 1.526-1.528v-.06c-.484.163-1.096.252-1.772.252-.53 0-.96-.22-.96-.99v-.06c0-.758.38-1.23.972-1.23.702 0 1.177.54 1.177 1.38v.055c0 .678-.276 1.182-.736 1.182-.48 0-.746-.432-.746-.95v-.06c0-.53.286-1.058.872-1.058.67 0 1.083.58 1.083 1.38v.055c0 1.666-1.24 2.698-2.54 2.698-.77 0-1.336-.414-1.336-1.368v-.056c0-.818.34-1.355.893-1.355.666 0 1.204.53 1.204 1.488v.06c0 .456-.178.734-.578.734-.51 0-.793-.43-.793-.947v-.055c0-.53.24-1.06.727-1.06.466 0 .68.39.68 1.02v.055c0 .666-.34 1.143-1.01 1.143-.63 0-1.014-.43-1.014-.97v-.06c0-.484.294-.815.876-" />
                </svg>
              </a>
            </div>
            <div className="pt-4 border-t border-[var(--dark)]">
              <p className="text-xs text-[var(--text-secondary)]">
                © 2025 Samsul Akmal. All rights reserved.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigasi</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                    </svg>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Profil Singkat</h4>
            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-[var(--primary)] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Banda Aceh, Indonesia</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-[var(--primary)] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Frontend &amp; Backend &amp; IoT Developer</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-[var(--primary)] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h8a4 4 0 004-4V3a4 4 0 00-4-4H3a4 4 0 00-4 4v12z" />
                </svg>
                <span>Skill: Python, PHP, React</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
