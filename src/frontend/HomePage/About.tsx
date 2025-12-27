import ProfileImage from '@/Image/home_icon.png';

export const About = () => {
    return(
        <div className="flex flex-col items-center text-center">
                <img 
                src={ProfileImage} 
                className="w-[170px] h-[170px] object-cover rounded-full mt-[15px] mb-[15px]" 
                alt="プロフィール画像"
                />
                <div className="text-[55px] text-white">👋Hi Ra1to codeで〜す</div>
                <div>
                    <p className="text-[20px] text-white">
                            Ra1to codeです。普段は個人でYoutubeや書籍にてプログラミングを学習してます。<br/>
                            主にReactをメインに扱っており、並行してGoとLinuxを学習。<br/>
                            趣味は筋トレです。（最近増量を頑張ってます、しんどいです）
                    </p>
                    
                    <h3 className="text-white">
                    堅牢性とメモリ効率を重視した開発を目指したい
                    </h3>
                </div>

                    <div className="flex flex-col w-full px-40 space-y-4 mb-[70px]">
                        {/* 年齢 */}
                        <div className="flex items-start">
                            <div className="text-[20px] text-white text-left w-[150px] shrink-0">
                                年齢
                            </div>
                            <div className="text-[20px] text-white">
                                22
                            </div>
                        </div>

                        {/* 経歴 */}
                        <div className="flex items-start">
                            <div className="text-[20px] text-white text-left w-[150px] shrink-0">
                                経歴
                            </div>
                            <div className="text-[20px] text-white text-left">
                                大学進学(IT無関係)<br/>
                                プログラミング学習(3ヶ月目)<br/>
                                インフラエンジニア(予定)
                            </div>
                        </div>

                        {/* デバイス */}
                        <div className="flex items-start">
                            <div className="text-[20px] text-white text-left w-[150px] shrink-0">
                                デバイス
                            </div>
                            <div className="text-[20px] text-white">
                                MacBook Air M1
                            </div>
                        </div>

                        {/* 趣味 */}
                        <div className="flex items-start">
                            <div className="text-[20px] text-white text-left w-[150px] shrink-0">
                                趣味
                            </div>
                            <div className="text-[20px] text-white">
                                筋トレ
                            </div>
                        </div>

                        {/* マイブーム */}
                        <div className="flex items-start">
                            <div className="text-[20px] text-white text-left w-[150px] shrink-0">
                                マイブーム
                            </div>
                            <div className="text-[20px] text-white">
                                最近はPSPでモンハン3rdをプレイするのにハマってます
                            </div>
                        </div>

                        {/* 座右の銘 */}
                        <div className="flex items-start">
                            <div className="text-[20px] text-white text-left w-[150px] shrink-0">
                                座右の銘
                            </div>
                            <div className="text-[20px] text-white">
                                塞翁が馬 / 初志貫徹
                            </div>
                        </div>
                    </div>
            <div className="text-[60px] text-white mb-[30px]">動画を載せる</div>
            <div className="text-[20px] text-white mb-[30px]">iPhoneで撮影しているので画質悪いです💦</div>
        </div>
    );
}