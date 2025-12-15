import { useState, useEffect, useRef } from "react";
import { cn } from "../../lib/utils";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HTML5, TypeScript, ReactDark, TailwindCSS, TanStack, 
  Nodejs,GoDark, Python, Supabase, Git, 
  Figma, VisualStudioCode, AmazonWebServicesDark, Docker, 
  Linux, BashDark, Bun , Terraform
} from "@ridemountainpig/svgl-react";



interface Skill {
  name: string;
  level: number;
  category: "Frontend" | "Backend" | "Tools"; 
  icon: React.ElementType;
  description?: string;
}

//スキル格納配列
const skills :Skill[] = [
  // Frontend
  {
    name: "HTML/CSS", 
    level: 90, 
    category: "Frontend",
    icon: HTML5,
    description: "Creating responsive, accessible and semantic markup with modern CSS techniques"
  },
  { 
    name: "Typescript", 
    level: 70, 
    category: "Frontend",
    icon: TypeScript,
    description: "ES6+, async/await, DOM manipulation, and modern TS patterns"
  },
  { 
    name: "React", 
    level: 68, 
    category: "Frontend",
    icon: ReactDark,
    description: "Building complex UI with hooks, context API, and state management"
  },
  { 
    name: "Tailwind CSS", 
    level: 65, 
    category: "Frontend",
    icon: TailwindCSS,
    description: "Utility-first approach for rapid UI development with custom configurations"
  },

  { name: "TanStack", 
    level: 30, 
    category: "Frontend",
    icon: TanStack,
    description: "Utility-first approach for rapid UI development with custom configurations"
  },

  // Backend
  { 
    name: "Node.js", 
    level: 60, 
    category: "Backend",
    icon: Nodejs,
    description: "Server-side JavaScript, RESTful APIs, and microservices"
  },
   { 
    name: "Go", 
    level: 50, 
    category: "Backend",
    icon: GoDark,
    description: "学習予定"
  },
   { 
    name: "Python", 
    level: 25, 
    category: "Backend",
    icon: Python,
    description: "学習予定"
  },
  { 
    name: "Supabase", 
    level: 55, 
    category: "Backend",
    icon: Supabase,
  },

  // Tools
  { 
    name: "Git/GitHub", 
    level: 72, 
    category: "Tools",
    icon: Git,
    description: "Version control, collaborative workflows, and CI/CD integration"
  },
  { 
    name: "Figma", 
    level: 38, 
    category: "Tools",
    icon: Figma,
    description: "UI/UX design, prototyping, and design system management"
  },
  { 
    name: "VS Code", 
    level: 80, 
    category: "Tools",
    icon: VisualStudioCode,
    description: "Advanced IDE customization, extensions, and productivity workflows"
  }, 
  { 
    name: "AWS", 
    level: 30, 
    category: "Tools",
    icon: AmazonWebServicesDark,
  },
  { 
    name: "Docker", 
    level: 65, 
    category: "Tools",
    icon: Docker,
  },
  { 
    name: "Linux", 
    level: 65, 
    category: "Tools",
    icon: Linux,
  },
  { 
    name: "Z Shell", 
    level: 50, 
    category: "Tools",
    icon: BashDark,
  },
  { 
    name: "Bun", 
    level: 0, 
    category: "Tools",
    icon: Bun,
  },
  { 
    name: "Terraform", 
    level: 30, 
    category: "Tools",
    icon: Terraform,
  }
];

const categories = ["All","Frontend", "Backend", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [,setMounted] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      mirror: false,
      easing: 'ease-out-cubic'
    });
    
    setMounted(true);
  }, [setMounted]);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );
  
  //スキルをレベル順に並べ替え（高い順）
  const sortedSkills = [...filteredSkills].sort((a, b) => b.level - a.level);
  
  // スキルを2つのスクロール行用に2つの配列に分割
  const firstRowSkills = [...sortedSkills];
  const secondRowSkills = [...sortedSkills];
  
  const handleSkillClick = (skill:Skill) => {
    setSelectedSkill(selectedSkill?.name === skill.name ? null : skill);
  };
  
  // レベルに基づいて進行状況の色を計算
  const getProgressColor = (level : number) => {
    if (level >= 90) return "from-emerald-500 to-green-400";
    if (level >= 80) return "from-blue-500 to-cyan-400";
    if (level >= 70) return "from-indigo-500 to-blue-400";
    if (level >= 60) return "from-violet-500 to-purple-400";
    if (level >= 50) return "from-pink-500 to-rose-400";
    return "from-red-500 to-orange-400";
  };

  // カテゴリ背景スタイルを取得
  const getCategoryStyle = (category : string) => {
    switch(category) {
      case "Frontend": return "bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20";
      case "Backend": return "bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-emerald-500/20";
      case "Tools": return "bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border-amber-500/20";
      default: return "bg-gradient-to-br from-gray-500/10 to-slate-500/10 border-gray-500/20";
    }
  };

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-4 relative overflow-hidden" data-aos="fade-up">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-secondary/30 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl z-10 relative bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left text-white drop-shadow-lg ml-[25px]" data-aos="fade-right">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-white to-white/70">My Technical Skills</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-16 ml-[25px]" data-aos="fade-up">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-[10px]! transition-all duration-300 capitalize",
                "border shadow-sm text-sm font-medium backdrop-blur-md",
                activeCategory === category
                  ? "bg-white/40 text-white border-white/50 shadow-lg"
                  : "bg-white/20 text-white border-white/30 hover:bg-white/30 hover:border-white/40"
              )}
             >
              {category}
            </button>
          ))}
        </div>
        {/* Scrolling skills rows */}
        <div className="mb-16 overflow-hidden" data-aos="fade-up">
          {/* First row - scrolling right */}
          <div className="relative mb-8 py-4">
            <div className="skills-scroll-container skills-scroll-right">
              <div className="skills-scroll-content">
                {firstRowSkills.map((skill) => (
                  <div
                    key={`row1-${skill.name}`}
                    className={cn(
                      "skills-card bg-white/20 backdrop-blur-md border border-white/30 rounded-xl overflow-hidden shadow-lg transition-all duration-300 mx-4",
                      "hover:shadow-xl hover:bg-white/30 hover:-translate-y-1",
                      getCategoryStyle(skill.category),
                      selectedSkill?.name === skill.name ? "ring-2 ring-primary" : ""
                    )}
                    onClick={() => handleSkillClick(skill)}
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          <skill.icon className="w-8 h-8 mr-3 text-white/90" />
                          <h3 className="font-bold text-lg text-white drop-shadow-md">{skill.name}</h3>
                        </div>
                      </div>
                      
                      <div className="relative w-full h-2.5 rounded-full overflow-hidden bg-white/20 mb-2 backdrop-blur-sm border border-white/20">
                        <div
                          style={{ width: `${skill.level}%` }}
                          className={`absolute top-0 left-0 h-full rounded-full bg-linear-to-r ${getProgressColor(skill.level)}`}
                        />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-white/80 drop-shadow-sm">
                          {skill.category}
                        </span>
                        <span className="text-sm font-semibold text-white drop-shadow-md">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate skills to ensure continuous scrolling */}
                {firstRowSkills.map((skill) => (
                  <div
                    key={`row1-dupe-${skill.name}`}
                    className={cn(
               
                      "skills-card bg-white/20 backdrop-blur-md border border-white/30 rounded-xl overflow-hidden shadow-lg transition-all duration-300 mx-4",
                      "hover:shadow-xl hover:bg-white/30 hover:-translate-y-1",
                      getCategoryStyle(skill.category)
                    )}
                    onClick={() => handleSkillClick(skill)}
                  >
                   <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          <skill.icon className="w-8 h-8 mr-3 text-white/90" />
                          <h3 className="font-bold text-lg text-white drop-shadow-md">{skill.name}</h3>
                        </div>
                      </div>
                      
                      <div className="relative w-full h-2.5 rounded-full overflow-hidden bg-white/20 mb-2 backdrop-blur-sm border border-white/20">
                        <div
                          style={{ width: `${skill.level}%` }}
                          className={`absolute top-0 left-0 h-full rounded-full bg-linear-to-r ${getProgressColor(skill.level)}`}
                        />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-white/80 drop-shadow-sm">
                          {skill.category}
                        </span>
                        <span className="text-sm font-semibold text-white drop-shadow-md">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Second row - scrolling left */}
          <div className="relative py-4">
            <div className="skills-scroll-container skills-scroll-left">
              <div className="skills-scroll-content">
                {secondRowSkills.map((skill) => (
                  <div
                    key={`row2-${skill.name}`}
                    className={cn(
                      "skills-card bg-white/20 backdrop-blur-md border border-white/30 rounded-xl overflow-hidden shadow-lg transition-all duration-300 mx-4",
                      "hover:shadow-xl hover:bg-white/30 hover:-translate-y-1",
                      getCategoryStyle(skill.category),
                      selectedSkill?.name === skill.name ? "ring-2 ring-primary" : ""
                    )}
                    onClick={() => handleSkillClick(skill)}
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          <skill.icon className="w-8 h-8 mr-3 text-white/90" />
                          <h3 className="font-bold text-lg text-white drop-shadow-md">{skill.name}</h3>
                        </div>
                      </div>
                      
                      <div className="relative w-full h-2.5 rounded-full overflow-hidden bg-white/20 mb-2 backdrop-blur-sm border border-white/20">
                        <div
                          style={{ width: `${skill.level}%` }}
                          className={`absolute top-0 left-0 h-full rounded-full bg-linear-to-r ${getProgressColor(skill.level)}`}
                        />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-white/80 drop-shadow-sm">
                          {skill.category}
                        </span>
                        <span className="text-sm font-semibold text-white drop-shadow-md">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate skills to ensure continuous scrolling */}
                {secondRowSkills.map((skill) => (
                  <div
                    key={`row2-dupe-${skill.name}`}
                    className={cn(
                      "skills-card bg-white/20 backdrop-blur-md border border-white/30 rounded-xl overflow-hidden shadow-lg transition-all duration-300 mx-4",
                      "hover:shadow-xl hover:bg-white/30 hover:-translate-y-1",
                      getCategoryStyle(skill.category)
                    )}
                    onClick={() => handleSkillClick(skill)}
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          <skill.icon className="w-8 h-8 mr-3 text-white/90" />
                          <h3 className="font-bold text-lg text-white drop-shadow-md">{skill.name}</h3>
                        </div>
                      </div>
                      
                      <div className="relative w-full h-2.5 rounded-full overflow-hidden bg-white/20 mb-2 backdrop-blur-sm border border-white/20">
                        <div
                          style={{ width: `${skill.level}%` }}
                          className={`absolute top-0 left-0 h-full rounded-full bg-linear-to-r ${getProgressColor(skill.level)}`}
                        />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-white/80 drop-shadow-sm">
                          {skill.category}
                        </span>
                        <span className="text-sm font-semibold text-white drop-shadow-md">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skill details modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl p-6 max-w-md w-full mx-4 shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30">
                    <selectedSkill.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">{selectedSkill.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-white/80 drop-shadow-sm">
                        {selectedSkill.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="relative w-full h-3 rounded-full overflow-hidden bg-white/20 mb-3 backdrop-blur-sm border border-white/20">
                  <div
                    style={{ width: `${selectedSkill.level}%` }}
                    className={`absolute top-0 left-0 h-full rounded-full bg-linear-to-r ${getProgressColor(selectedSkill.level)}`}
                  />
                </div>
                
                <div className="text-right mb-4">
                  <span className="text-lg font-bold text-white drop-shadow-md">{selectedSkill.level}%</span>
                </div>
                
                <div className="border-t border-white/30 pt-4">
                  <h4 className="font-medium mb-2 text-white drop-shadow-md">Description</h4>
                  <p className="text-white/90 drop-shadow-sm">{selectedSkill.description}</p>
                </div>
                
                <button
                  className="mt-6 w-full py-2 rounded-md border border-white/30 hover:bg-white/20 transition-colors text-white backdrop-blur-md bg-white/10"
                  onClick={() => setSelectedSkill(null)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>

      {/* CSS for scrolling animations */}
      <style>{`
        .skills-scroll-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        
        .skills-scroll-content {
          display: flex;
          width: fit-content;
        }
        
        .skills-card {
          flex: 0 0 auto;
          width: 280px;
        }
        
        /* Animation for right scrolling */
        .skills-scroll-right .skills-scroll-content {
          animation: scrollRight 60s linear infinite;
        }
        
        /* Animation for left scrolling */
        .skills-scroll-left .skills-scroll-content {
          animation: scrollLeft 60s linear infinite;
        }
        
        @keyframes scrollRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scrollLeft {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        /* Pause animations on hover */
        .skills-scroll-container:hover .skills-scroll-content {
          animation-play-state: paused;
      `}</style>
    </section>
  );
};