import { useState, useEffect } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import BlogPage from './BlogPage';
import { HomePage } from '@/frontend/HomePage/HomePage';

// ルートパスの定義をHeaderコンポーネントに集約
export const ROUTES = {
  HOME: '/',
  BLOG: '/blog',
} as const;

export const Header = () => {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 0pxから400pxの間で0〜1の進行度を計算（App.tsxの背景ぼかし速度に合わせる）
      const progress = Math.min(window.scrollY / 400, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    // 初期位置での計算を実行
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className="fixed top-0 w-full z-50 h-22 flex justify-between items-center px-55"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${0.6 * scrollProgress})`,
          backdropFilter: `blur(${20 * scrollProgress}px)`,
          borderBottom: `1px solid rgba(255, 255, 255, ${0.5 * scrollProgress})`,
          boxShadow: `0 10px 15px -3px rgba(0, 0, 0, ${0.1 * scrollProgress}), 0 4px 6px -4px rgba(0, 0, 0, ${0.1 * scrollProgress})`
        }}
      >

        <nav className="w-full" >
          <ul className="flex items-center justify-between px-10 font-medium text-[22px] text-bald">
            <li>
              <button 
                onClick={() => navigate(ROUTES.HOME)} 
                className="text-orange-200 hover:text-[#48b4af]! transition-colors bg-transparent border-none cursor-pointer p-0 font-medium text-[20px]"
              >
                ABOUT
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigate(ROUTES.HOME)} 
                className="text-orange-200 hover:text-[#48b4af]! transition-colors bg-transparent border-none cursor-pointer p-0 font-medium text-[20px]"
              >
                SKILLS
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigate(ROUTES.HOME)} 
                className="text-orange-200 hover:text-[#48b4af]! transition-colors bg-transparent border-none cursor-pointer p-0 font-medium text-[20px]"
              >
                WORKS
              </button>
            </li>
              <div className="text-white text-4xl">R</div>
            <li>
              <button 
                onClick={() => navigate(ROUTES.BLOG)} 
                className="text-orange-200 hover:text-[#48b4af]! transition-colors bg-transparent border-none cursor-pointer p-0 font-medium text-[20px]"
              >
                BLOG
              </button>
            </li>
            <li>
            <button 
                onClick={() => navigate(ROUTES.BLOG)} 
                className="text-orange-300 hover:text-[#48b4af]! transition-colors bg-transparent border-none cursor-pointer p-0 font-medium text-[20px]"
              >
                CONTACT
              </button>
            </li>
          </ul>
        </nav>
      </header>


      <main className="pt-28 md:px-12 lg:px-24 max-w-screen-2xl mx-auto min-h-screen">
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.BLOG} element={<BlogPage />} />
        </Routes>
      </main>
    </>
  );
};