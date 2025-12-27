import ProfileImage from '@/Image/home_icon.png';
import {SkillsSection} from '../SkillComponents/SkillsSection';
import { Works } from '../HomePage/Works';
import { Contact } from '../HomePage/Contact';


export const HomePage = () => {
  return (
    <div>
        <div className="flex flex-col items-center text-center">
          <img 
            src={ProfileImage} 
            className="w-[170px] h-[170px] object-cover rounded-full mt-[15px] mb-[15px]" 
            alt="プロフィール画像"
          />
          <div className="text-[55px] text-white">Ra1to</div>
            <p className="text-[20px] mt-3 mb-5 text-white">
              Ra1to codeです。普段は個人でYoutubeや書籍にてプログラミングを学習してます。<br/>
              主にReactをメインに扱っており、並行してGoとLinuxを学習。<br/>
              趣味は筋トレです。（最近増量を頑張ってます、しんどいです）
            </p>
            <p className="text-[20px] mt-3 mb-5 text-white">
              趣味 筋トレ 最近はPSPでモンハン3rdを弟とプレイするのにハマってます
            </p>
            <p className="text-[20px] mt-3 mb-5 text-white">
              座右の銘 塞翁が馬 / 初志貫徹
            </p>
            <h3 className="text-white">
              堅牢性とメモリ効率を重視した開発を目指したい
            </h3>
          </div>

        <SkillsSection />
        <Works />
        <Contact />
  </div>
  );
}