import { useState, useRef } from "react";
import { cn } from "../../lib/utils";
import "devicon/devicon.min.css"; // deviconのCSSをインポート
import { 
  HTML5, TypeScript, ReactDark, TailwindCSS, TanStack,
  Python, Supabase, Git, 
  Figma, VisualStudioCode, AmazonWebServicesDark, Docker, 
  Linux,  Terraform , CursorLight as Cursor,
  Kubernetes , GoogleCloud , Ubuntu ,  PostgreSQL,
} from "@ridemountainpig/svgl-react";


interface Skill {
  name: string;
  level: number;
  category: "Frontend" | "Backend" | "Tools"; 
  icon?: React.ElementType; // @ridemountainpig/svgl-reactのコンポーネント
  deviconClass?: string; // deviconのCSSクラス名（例: "devicon-react-original"）
  deviconSvg?: string; // deviconのSVGファイルパス（例: "devicon/icons/nodejs/nodejs-original.svg"）
}

//スキル格納配列
const skills :Skill[] = [
  // Frontend
  {
    name: "HTML/CSS", 
    level: 95, 
    category: "Frontend",
    icon: HTML5,
  },
  {
    name: "Typescript", 
    level: 60, 
    category: "Frontend",
    icon: TypeScript,
  },
  {
    name: "React", 
    level: 75, 
    category: "Frontend",
    icon: ReactDark,
  },
  {
    name: "Tailwind", 
    level: 70, 
    category: "Frontend",
    icon: TailwindCSS,
  },
  {
    name: "TanStack", 
    level: 30, 
    category: "Frontend",
    icon: TanStack,
  },

  // Backend
  {
    name: "Node.js", 
    level: 60, 
    category: "Backend",
    deviconClass: "devicon-nodejs-line-wordmark"
  },
   {
    name: "Go", 
    level: 40, 
    category: "Backend",
    deviconClass:"devicon-go-plain colored",
  },
   {
    name: "Python", 
    level: 20, 
    category: "Backend",
    icon: Python,
  },

  // Tools
  {
    name: "Git/GitHub", 
    level: 80, 
    category: "Tools",
    icon: Git,
  },
  {
    name: "Supabase", 
    level: 60, 
    category: "Tools",
    icon: Supabase,
  },
  {
    name: "Figma", 
    level: 40, 
    category: "Tools",
    icon: Figma,
  },
  {
    name: "VS Code", 
    level: 80, 
    category: "Tools",
    icon: VisualStudioCode,
  }, 
  {
    name: "Cursor", 
    level: 60, 
    category: "Tools",
    icon: Cursor,
  }, 
  {
    name: "AWS", 
    level: 40, 
    category: "Tools",
    icon: AmazonWebServicesDark,
  },
  {
    name: "GCP", 
    level: 25, 
    category: "Tools",
    icon: GoogleCloud,
  },
  {
    name: "Docker", 
    level: 65, 
    category: "Tools",
    deviconClass:  "devicon-docker-plain colored",
  },
  {
    name: "Linux", 
    level: 70, 
    category: "Tools",
    icon: Linux,
  },
  {
    name: "Terraform", 
    level: 25, 
    category: "Tools",
    icon: Terraform,
  },
  {
    name: "Kubernetes", 
    level: 10, 
    category: "Tools",
    icon: Kubernetes,
  },
  {
    name: "PostgreSQL", 
    level: 40, 
    category: "Tools",
    icon: PostgreSQL,
  }
];

const categories = ["All","Frontend", "Backend", "Tools"];

// アイコンを表示するヘルパー関数
const renderIcon = (skill: Skill) => {
  if (skill.deviconSvg) {
    // deviconのSVGファイルを使用する場合
    const svgPath = new URL(`../../../../node_modules/devicon/icons/${skill.deviconSvg}`, import.meta.url).href;
    return <img src={svgPath} alt={skill.name} className="w-8 h-8 mr-3" />;
  } else if (skill.deviconClass) {
    // deviconのCSSクラスを使用する場合
    return <i className={cn("w-8 h-8 mr-3", skill.deviconClass)}></i>;
  } else if (skill.icon) {
    // @ridemountainpig/svgl-reactを使用する場合
    const IconComponent = skill.icon;
    return <IconComponent className="w-8 h-8 mr-3" />;
  }
  return null;
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef(null);
  
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );
  
  //スキルをレベル順に並べ替え（高い順）
  const sortedSkills = [...filteredSkills].sort((a, b) => b.level - a.level);
  
  // スキルを2つのスクロール行用に2つの配列に分割
  const firstRowSkills = [...sortedSkills];
  const secondRowSkills = [...sortedSkills];
  
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
    <div ref={sectionRef} id="skills" className="py-24 ">
      
      {/* Background pattern */}
      <div className="container w-full max-w-[8xl] mx-auto z-10 relative bg-white/20 backdrop-blur-xl rounded-3xl p-5 border border-white/30 shadow-xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left drop-shadow-lg">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-white to-white">My Technical Skills</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-[10px]! transition-all duration-300 capitalize",
                "border shadow-sm text-sm font-medium backdrop-blur-md",
                activeCategory === category
                  ? "bg-white text-black border-white/50 shadow-lg"
                  : "bg-black/20 text-white border-white/30 hover:bg-black/60 hover:border-white/40"
              )}
             >
              {category}
            </button>
          ))}
        </div>
        <div className="overflow-hidden">
          <div className="relative mb-8 py-4">
            <div className="skills-scroll-container skills-scroll-right">
              <div className="skills-scroll-content">
                {firstRowSkills.map((skill) => (
                  <div
                    key={`row1-${skill.name}`}
                    className={cn(
                      "skills-card bg-white/20 backdrop-blur-md border border-white/30 rounded-xl overflow-hidden shadow-lg transition-all duration-300 mx-4",
                      "hover:shadow-xl hover:bg-white/30",
                      getCategoryStyle(skill.category)
                    )}
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          {renderIcon(skill)}
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
                        <span className="text-xs font-medium text-white drop-shadow-sm">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* 複製したskillカード */}
                {firstRowSkills.map((skill) => (
                  <div
                    key={`row1-dupe-${skill.name}`}
                    className={cn(
               
                      "skills-card bg-white/20 backdrop-blur-md border border-white/30 rounded-xl overflow-hidden shadow-lg transition-all duration-300 mx-4",
                      getCategoryStyle(skill.category)
                    )}
                    >
                   <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          {renderIcon(skill)}
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
                        <span className="text-xs font-medium text-white drop-shadow-sm">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* 左から右スクロール */}
          <div className="relative py-4">
            <div className="skills-scroll-container skills-scroll-left">
              <div className="skills-scroll-content">
                {secondRowSkills.map((skill) => (
                  <div
                    key={`row2-${skill.name}`}
                    className={cn(
                      "skills-card bg-white/20 backdrop-blur-md border border-white/30 rounded-xl overflow-hidden shadow-lg transition-all duration-300 mx-4",
                      "hover:shadow-xl hover:bg-white/30",
                      getCategoryStyle(skill.category)
                    )}
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          {renderIcon(skill)}
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
                        <span className="text-xs font-medium text-white drop-shadow-sm">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* 2列目の初期値設定 */}
                {secondRowSkills.map((skill) => (
                  <div
                    key={`row2-dupe-${skill.name}`}
                    className={cn(
                      "skills-card border border-white/30 rounded-xl overflow-hidden shadow-lg transition-all duration-300 mx-4",
                      "hover:bg-white/30",
                      getCategoryStyle(skill.category)
                    )}
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          {renderIcon(skill)}
                          {/* 2列目スクロールの初期文字色*/}
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
                        {/* 2列目スクロールの初期カテゴリーの文字色*/}
                        <span className="text-xs font-medium text-white drop-shadow-sm">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

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
    </div>
  );
};