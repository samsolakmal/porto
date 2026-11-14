import { motion } from "framer-motion";

export default function SkillBadge({ name, level, color }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-[var(--text-secondary)]">{name}</span>
        <span className="text-sm font-semibold text-white">{level}%</span>
      </div>
      <div className="w-full h-2 rounded-full bg-[var(--dark-light)] overflow-hidden">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}
