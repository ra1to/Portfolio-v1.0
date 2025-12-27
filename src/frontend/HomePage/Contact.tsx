import React from 'react';
import { Facebook, Twitter, Google, GitHubLight as GitHub} from '@ridemountainpig/svgl-react';

// 1. 型定義の修正（hover時の色指定も型に含める）
interface SocialItem {
  name: string;
  icon: React.ElementType; // コンポーネントそのものを渡す形式に統一
  beforeBg: string;
  afterBg: string;
}

// 2. データの整理
const socialData: SocialItem[] = [
  { 
    name: 'Facebook', 
    icon: Facebook, 
    beforeBg: 'group-hover:before:bg-[#365492]', 
    afterBg: 'group-hover:after:bg-[#4a69ad]' 
  },
  { 
    name: 'Twitter', 
    icon: Twitter, 
    beforeBg: 'group-hover:before:bg-[#097aa5]', 
    afterBg: 'group-hover:after:bg-[#53b9e0]' 
  },
  { 
    name: 'Google', 
    icon: Google, 
    beforeBg: 'group-hover:before:bg-[#b33a2b]', 
    afterBg: 'group-hover:after:bg-[#e66a5a]' 
  },
  { 
    name: 'GitHub', 
    icon: GitHub,  
    beforeBg: 'group-hover:before:bg-[#000000]', 
    afterBg: 'group-hover:after:bg-[#696969]' 
  },
];

export const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px] w-full bg-[#ccc] font-roboto overflow-hidden p-20">
      <ul className="flex m-0 p-0">
        {socialData.map((item, index) => {
          const IconComponent = item.icon;
          
          return (
            <li key={index} className="list-none mx-1.5 group">
              <a
                href="#"
                className={`
                  relative block w-[210px] h-[80px] bg-white pl-5 text-left no-underline transition-all duration-500
                  transform -rotate-30 skew-x-25 shadow-[-20px_20px_10px_rgba(0,0,0,0.5)]
                  group-hover:-translate-y-[15px] group-hover:translate-x-[20px] group-hover:shadow-[-50px_50px_50px_rgba(0,0,0,0.5)]
                  /* 描画をくっきりさせる */
                  backface-hidden
                  
                  before:content-[''] before:absolute before:top-2.5 before:-left-5 before:h-full before:w-5 before:bg-[#b1b1b1]
                  before:transition-all before:duration-500 before:rotate-0 before:-skew-y-45
                  ${item.beforeBg}

                  after:content-[''] after:absolute after:-bottom-5 after:-left-2.5 after:h-5 after:w-full after:bg-[#b1b1b1]
                  after:transition-all after:duration-500 after:rotate-0 after:-skew-x-45
                  ${item.afterBg}
                `}
              >
                {/* アイコン表示部分: 高さを親に合わせ flex で中央へ */}
                <div className="flex items-center h-[80px] text-[#262626] transition-all duration-500 pr-3.5">
                  <IconComponent className="w-8 h-8" />
                </div>
                
                {/* テキスト表示部分: 元の絶対配置を維持 */}
                <span className="absolute top-[30px] left-[65px] text-[#262626] tracking-[4px] transition-all duration-500 font-bold">
                  - {item.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};