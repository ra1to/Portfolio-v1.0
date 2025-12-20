import ProfileImage from '@/Image/home_icon.png';
import {SkillsSection} from '../SkillComponents/SkillsSection';


export const HomePage = () => {
  return (
    <div className="flex flex-col items-center text-center">
        <img 
          src={ProfileImage} 
          className="w-[170px] h-[170px] object-cover rounded-full mt-[15px] mb-[15px]" 
          alt="プロフィール画像"
        />
        <div className="text-[55px] text-black">Ra1to</div>

        <p className="text-[20px] mt-3 mb-5 text-black">
          Ra1to codeです。普段は個人でYoutubeや書籍にてプログラミングを学習してます。<br/>
          主にReactをメインに扱っており、並行してGoとLinuxを学習。<br/>
          趣味は筋トレです。（最近増量を頑張ってます、しんどいです）
        </p>
        <h3 className="text-black mb-5">
          堅牢性とメモリ効率を重視した開発を目指したい
        </h3>

        <section className="w-full max-w-[1320px] mx-auto mb-8">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-black uppercase">My Project</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-lg hover:bg-white/50 transition-all">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3 text-black font-bold">ECサイト</h4>
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                  maxime quam architecto quo inventore harum ex magni, dicta
                  impedit.
                </p>
              </div>
              <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-lg hover:bg-white/50 transition-all">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3 text-black font-bold">レスポンシブサイト</h4>
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                  maxime quam architecto quo inventore harum ex magni, dicta
                  impedit.
                </p>
              </div>
              <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-lg hover:bg-white/50 transition-all">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3 text-black font-bold">ウェブセキュリティ</h4>
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                  maxime quam architecto quo inventore harum ex magni, dicta
                </p>
              </div>
            </div>
          </div>
        </section>
        <SkillsSection />
  </div>
  );
}