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

  return (
    <>
      <header className="fixed top-0 w-full z-50 h-22 flex justify-between items-center px-55 bg-white/60 backdrop-blur-xl border-b border-white/50 shadow-lg">
        
        <div className="logo">
          <button 
            onClick={() => navigate(ROUTES.HOME)} 
            className="no-underline! bg-transparent border-none cursor-pointer p-0"
          >
            <h3 className="font-bold text-2xl text-gray-900">Ra1to</h3>
          </button>
        </div>
        <nav>
          <ul className="flex gap-8 font-medium text-[20px]">
            <li>
              <button 
                onClick={() => navigate(ROUTES.HOME)} 
                className="text-gray-900 hover:text-[#48b4af]! transition-colors bg-transparent border-none cursor-pointer p-0 font-medium text-[20px]"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigate(ROUTES.BLOG)} 
                className="text-gray-900 hover:text-[#48b4af]! transition-colors bg-transparent border-none cursor-pointer p-0 font-medium text-[20px]"
              >
                Blog
              </button>
            </li>
            <li>
              <a 
                href="https://x.com/skyappsfree" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-[#48b4af]! transition-colors"
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