import { Header } from '@/frontend/HeaderComponents/Header';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';



function App () {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // スクロール位置に応じてぼかしの強度を計算（最大20pxまで）
      const maxBlur = 20;
      const blurAmount = Math.min(scrollY / 20, maxBlur);
      document.documentElement.style.setProperty('--blur-amount', `${blurAmount}px`);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
          <Header />
    </BrowserRouter>
  );
}

export default App;