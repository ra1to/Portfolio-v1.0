import './App.css';
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
    // 初期状態も設定
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
        <div className="App">
          <Header />
        </div>
    </BrowserRouter>
  );
}

export default App;