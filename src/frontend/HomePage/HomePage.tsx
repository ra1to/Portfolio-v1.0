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
        <h1>Ra1to code</h1>

        <p>
          Ra1to codeです。普段は個人でYoutubeや書籍にてプログラミングを学習してます。<br/>
          主にReactをメインに扱っており、並行してGoとLinuxを学習。<br/>
          趣味は筋トレです。（最近増量を頑張ってます、しんどいです）
        </p>

        <section>
          <div className="service">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">My Project</h2>
              <h3 className="section-subheading text-muted mb-5">堅牢性とメモリ効率を重視した開発を目指したい</h3>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">ECサイト</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                  maxime quam architecto quo inventore harum ex magni, dicta
                  impedit.
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">レスポンシブサイト</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                  maxime quam architecto quo inventore harum ex magni, dicta
                  impedit.
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">ウェブセキュリティ</h4>
                <p className="text-muted">
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