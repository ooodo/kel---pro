import React from "react";

const skills = [
  { name: "React", value: 90 },
  { name: "Next.js", value: 88 },
  { name: "Tailwind", value: 85 },
  { name: "Python", value: 75 },
  { name: "OpenAI", value: 70 },
  { name: "Figma", value: 82 }
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-6">
      <h3 className="text-2xl font-semibold">المهارات</h3>
      <div className="mt-4 space-y-4">
        {skills.map(s => (
          <div key={s.name}>
            <div className="flex justify-between">
              <span>{s.name}</span>
              <span>{s.value}%</span>
            </div>
            <div className="w-full h-3 bg-gray-800 rounded mt-2">
              <div className="h-3 rounded" style={{ width: `${s.value}%`, background: "linear-gradient(90deg,#7C3AED,#06B6D4)" }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
