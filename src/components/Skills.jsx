import { Code, Server, Wrench } from "lucide-react";
import PropTypes from "prop-types";

const Skills = ({ darkMode }) => {
  const categoryIcons = {
    Frontend: <Code className="w-6 h-6 text-blue-500 inline-block mr-2" />,
    Backend: <Server className="w-6 h-6 text-green-500 inline-block mr-2" />,
    "Tools & DevOps": (
      <Wrench className="w-6 h-6 text-orange-500 inline-block mr-2" />
    ),
  };

  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 95, color: "from-blue-400 to-cyan-500" },
        { name: "Next.js", level: 90, color: "from-gray-700 to-gray-900" },
        { name: "TypeScript", level: 85, color: "from-blue-500 to-blue-700" },
        { name: "Tailwind CSS", level: 92, color: "from-teal-400 to-cyan-500" },
        {
          name: "Framer Motion",
          level: 88,
          color: "from-purple-400 to-pink-500",
        },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 90, color: "from-green-500 to-green-700" },
        { name: "Express", level: 85, color: "from-gray-600 to-gray-800" },
        { name: "PostgreSQL", level: 80, color: "from-blue-600 to-blue-800" },
        { name: "MongoDB", level: 82, color: "from-green-600 to-green-800" },
        { name: "Redis", level: 75, color: "from-red-500 to-red-700" },
      ],
    },
    {
      category: "Tools & DevOps",
      items: [
        { name: "Git", level: 95, color: "from-orange-500 to-red-600" },
        { name: "Docker", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "AWS", level: 80, color: "from-yellow-500 to-orange-600" },
        { name: "Vercel", level: 90, color: "from-black to-gray-700" },
        { name: "Figma", level: 85, color: "from-purple-500 to-pink-600" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#111827] text-white"
          : "bg-gradient-to-r from-[#F9FAFB] via-[#F3F4F6] to-white text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Technical Expertise
          </h2>
          <p
            className={`text-xl ${
              darkMode ? "text-gray-300" : "text-gray-700"
            } max-w-2xl mx-auto`}
          >
            Mastering the tools that power modern web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl backdrop-blur-sm ${
                darkMode ? "bg-white/5 text-white" : "bg-gray-100 text-gray-900"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-6 flex justify-center items-center gap-2`}
              >
                {categoryIcons[skillGroup.category]}
                {skillGroup.category}
              </h3>

              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name} className="relative group">
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`font-semibold ${
                          darkMode ? "text-gray-200" : "text-gray-800"
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span
                        className={`text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color} transition-[width] duration-1000 ease-out group-hover:scale-[1.02]`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Skills.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Skills;
