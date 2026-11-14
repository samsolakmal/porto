import { motion } from "framer-motion";
import ScrollReveal from "../common/ScrollReveal";
import SkillBadge from "../common/SkillBadge";

export default function Skills() {
  const { skills } = skillsData;

  return (
    <section className="py-20 bg-[var(--dark-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            Keahlian <span className="text-[var(--primary)]">Saya</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-center max-w-xl mx-auto mb-12">
            Tech stack yang saya kuasai untuk membangun solusi digital
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-[var(--dark)] rounded-xl p-5 border border-[var(--dark)]">
              <h3 className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide mb-4">
                {category}
              </h3>
              <div className="space-y-4">
                {items.map((skill) => (
                  <SkillBadge key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Separate data for skills to avoid circular imports
const skillsData = {
  languages: [
    { name: "Python", level: 90, color: "bg-blue-500" },
    { name: "PHP", level: 75, color: "bg-amber-500" },
    { name: "JavaScript/TypeScript", level: 85, color: "bg-yellow-500" },
  ],
  frameworks: [
    { name: "React", level: 90, color: "bg-blue-600" },
    { name: "Next.js", level: 70, color: "bg-blue-700" },
    { name: "Laravel", level: 75, color: "bg-indigo-500" },
    { name: "Figma", level: 70, color: "bg-purple-500" },
  ],
  tools: [
    { name: "Dbeaver", level: 80, color: "bg-gray-500" },
    { name: "Git/GitHub", level: 85, color: "bg-gray-700" },
    { name: "Flask/FastAPI", level: 65, color: "bg-green-500" },
    { name: "Tailwind CSS", level: 80, color: "bg-gray-300" },
  ],
};
