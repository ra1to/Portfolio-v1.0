import ProfileImage from '@/Image/home_icon.png';

export const About = () => {
    return (
        <div className="flex flex-col items-center text-center">
            <img 
                src={ProfileImage} 
                className="w-[170px] h-[170px] object-cover rounded-full mt-[15px] mb-[15px]" 
                alt="プロフィール画像"
            />
            <div className="text-[55px] text-white">👋Hi Ra1toです</div>
            <div className="mb-25 px-4">
                <p className="text-[20px] text-white">
                        普段は個人でYoutubeや書籍にてプログラミングを学習してます。<br/>
                        主にReactをメインに扱っており、並行してGoとLinuxを学習。<br/>
                        趣味は筋トレです。（最近増量を頑張ってます、しんどいです）
                </p>
                
                <h3 className="text-white mt-4">
                堅牢性とメモリ効率を重視した開発を目指してます
                </h3>
            </div>
            
            <div className="w-full max-w-[900px] px-4 md:px-40 mt-[50px]">
                <div className="flex flex-col w-full space-y-4 mb-[70px]">
                    {/* 年齢 */}
                    <div className="flex items-center pb-4 mb-4 border-white/70 border-b">
                        <div className="text-[20px] text-white text-left w-[150px] shrink">
                            🎉年齢
                        </div>
                        <div className="text-[20px] text-white text-left">
                            22
                        </div>
                    </div>

                    {/* 経歴 */}
                    <div className="flex items-center pb-4 mb-4 border-white/70 border-b">
                        <div className="text-[20px] text-white text-left w-[150px] shrink">
                            👨‍🎓経歴
                        </div>
                        <div className="text-[20px] text-white text-left ">
                            大学進学(IT無関係)<br/>
                            プログラミング学習(3ヶ月目)<br/>
                            インフラエンジニア(予定)
                        </div>
                    </div>

                    {/* デバイス */}
                    <div className="flex items-center pb-4 mb-4 border-white/70 border-b">
                        <div className="text-[20px] text-white text-left w-[150px] shrink">
                            👨‍💻使用機器
                        </div>
                        <div className="text-[20px] text-white text-left">
                            MacBook Air M1
                        </div>
                    </div>

                    {/* 趣味 */}
                    <div className="flex items-center pb-4 mb-4 border-white/70 border-b">
                        <div className="text-[20px] text-white text-left w-[150px] shrink">
                            💪趣味
                        </div>
                        <div className="text-[20px] text-white text-left">
                            筋トレ
                        </div>
                    </div>

                    {/* マイブーム */}
                    <div className="flex items-center pb-4 mb-4 border-white/70 border-b">
                        <div className="text-[20px] text-white text-left w-[150px] shrink">
                            🔥マイブーム
                        </div>
                        <div className="text-[20px] text-white text-left">
                        遊戯王とモンハン3rdに再熱熱<br/>
                        未成年の主張<br/>
                        <span className="text-sm opacity-70">※20代前半なのにおじさんっぽいとかやめてね💦</span>
                        </div>
                    </div>

                    {/* 好きなもの❤️ */}
                    <div className="flex items-center pb-4 mb-4 border-white/70 border-b">
                        <div className="text-[20px] text-white text-left w-[150px] shrink">
                            ❤️スキ
                        </div>
                        <div className="text-[20px] text-white text-left">
                        合トレで負けず嫌いを発動して最高に追い込めた筋トレがスキ!!<br/>
                        </div>
                    </div>

                    {/* 座右の銘 */}
                    <div className="flex items-center pb-4 mb-4 border-white/70 border-b">
                        <div className="text-[20px] text-white text-left w-[150px] shrink">
                        💡座右の銘
                        </div>
                        <div className="text-[20px] text-white text-left">
                            塞翁が馬 / 初志貫徹
                        </div>
                    </div>
                    {/* 出身 */}
                    <div className="flex items-center">
                        <div className="text-[20px] text-white text-left w-[150px] shrink">
                        🌺出身
                        </div>
                        <div className="text-[20px] text-white text-left">
                            沖縄
                        </div>
                    </div>
                </div>
            </div>

            {/* 動画セクション */}
            <div className="w-full max-w-[800px] px-4 mb-[100px]">                
                
                <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <video 
                        className="w-full h-full object-contain"
                        controls 
                        controlsList="nodownload"
                        onContextMenu={(e) => e.preventDefault()}
                        preload="metadata"
                    >
                        <source src="https://pub-54be2b8a62994395b141afdc5ee888ae.r2.dev/redpandacompress_1228.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="text-[20px] text-white/70 mt-[30px] text-left">沖縄にいた頃、高校最後の夏休みに友達と３日かけました<br/>
                                                                                スマホ撮影なので画質が悪いのはご愛嬌で
                </div>
            </div>
        </div>
    );
}