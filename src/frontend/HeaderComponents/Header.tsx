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
        
        <div className="logo">
          <button 
            onClick={() => navigate(ROUTES.HOME)} 
            className="no-underline! bg-transparent border-none cursor-pointer p-0"
          >
            <h3 className="font-bold text-2xl text-black">Ra1to</h3>
          </button>
        </div>
        <nav>
          <ul className="flex gap-8 font-medium text-[20px]">
            <li>
              <button 
                onClick={() => navigate(ROUTES.HOME)} 
                className="text-black hover:text-[#48b4af]! transition-colors bg-transparent border-none cursor-pointer p-0 font-medium text-[20px]"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigate(ROUTES.BLOG)} 
                className="text-black hover:text-[#48b4af]! transition-colors bg-transparent border-none cursor-pointer p-0 font-medium text-[20px]"
              >
                Blog
              </button>
            </li>
            <li>
              <a 
                href="https://x.com/skyappsfree" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-[#48b4af]! transition-colors"
              >
                SNS
              </a>
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