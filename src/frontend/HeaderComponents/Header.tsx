import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    // px-30 は存在しないクラスなので、px-[120px]のように書くか、px-20などに戻してください
    // ここでは px-20 (80px) にしています
    <header className="fixed top-0 w-full z-50 h-22 flex justify-between items-center px-55 bg-white/80 backdrop-blur-md border-b border-white/40 shadow-sm">
      
      <div className="logo">
        <Link to="/" className="!no-underline">
          <h3 className="font-bold text-2xl text-black drop-shadow-md">Ra1to</h3>
        </Link>
      </div>

      <nav>
        <ul className="flex gap-8 font-medium text-[20px]">
          <li>
            <Link to="/" className="text-black hover:text-[#48b4af]! transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/blog"className="text-black hover:text-[#48b4af]! transition-colors">Blog</Link>
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
  );
};