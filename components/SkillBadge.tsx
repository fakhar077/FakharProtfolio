import * as React from 'react';

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="bg-cyan-50 dark:bg-cyan-700 text-cyan-800 dark:text-white px-4 py-2 rounded-full font-semibold text-sm shadow-sm hover:shadow-md transition-shadow duration-300">
      {skill}
    </span>
  );
};

export default SkillBadge;