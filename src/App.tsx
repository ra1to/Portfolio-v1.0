import './App.css';
import BlogPage from '@/frontend/HeaderComponents/BlogPage';
import {Header} from '@/frontend/HeaderComponents/Header';
import {HomePage} from '@/frontend/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App () {
  return (
    <BrowserRouter>
        <div className="App">
        <Header />
          <main className="pt-28 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="blog" element={<BlogPage />} />
            </Routes>
          </main>
        </div>
    </BrowserRouter>
  );
}

export default App;