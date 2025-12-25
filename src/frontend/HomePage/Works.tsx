export const Works = () => {
  return (
    <section className="w-full max-w-[8xl] mx-auto mb-8">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-5 border border-white shadow-xl">
            <div className="mb-8 text-left">
                <h2 className="text-3xl ml-5px font-bold text-black uppercase">My Project</h2>
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
  )
};