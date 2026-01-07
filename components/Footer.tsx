import { Linkedin, Github, Instagram } from 'lucide-react'

export default function Footer() {
    return (
        <footer id="contact" className="min-h-screen w-full bg-black text-white flex flex-col justify-between py-12 px-6 md:px-12 lg:px-24 relative z-20 overflow-hidden">
            {/* Top Section: About & Connect Cards */}
            <div className="w-[94.2%] mx-auto flex flex-col md:flex-row justify-between items-center pt-12 md:pt-24 gap-8 md:gap-0 px-4 md:px-8">
                {/* Left: About Card */}
                <div className="w-[90%] mx-auto bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#a0a0a0_100%)] text-black rounded-[2.5rem] p-8 md:p-12 w-full max-w-md min-h-[400px] relative overflow-hidden group">
                    <h2 className="font-sans font-bold text-5xl md:text-7xl mb-10 tracking-tighter relative z-10 ml-[-1.5ch] -mt-4 leading-[0.8]">
                        About
                    </h2>
                    <p className="text-xl md:text-2xl font-light leading-relaxed relative z-10 opacity-80">
                        Creating digital experiences with a focus on minimalism and motion.
                    </p>
                </div>
                {/* Right: Connect Card */}
                <div className="w-[100%] mx-auto bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#a0a0a0_100%)] text-black rounded-[2.5rem] p-8 md:p-12 w-full max-w-md relative overflow-hidden group">
                    <h2 className="font-sans font-bold text-5xl md:text-7xl mb-10 tracking-tighter relative z-10 ml-[-1.3ch] -mt-4 leading-[0.8]">
                        Connect
                    </h2>
                    <div className="flex gap-8 relative z-10 pl-2">
                        <a href="#" className="p-2 -ml-2 hover:bg-black/5 rounded-full transition-colors group/icon">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-8 h-8 md:w-10 md:h-10 fill-black group-hover/icon:scale-110 transition-transform p-1">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                            </svg>
                        </a>
                        <a href="#" className="p-2 hover:bg-black/5 rounded-full transition-colors group/icon">
                            <Instagram className="w-8 h-8 md:w-10 md:h-10 stroke-[1.5] group-hover/icon:scale-110 transition-transform" />
                        </a>
                        <a href="#" className="p-2 hover:bg-black/5 rounded-full transition-colors group/icon">
                            <Linkedin className="w-8 h-8 md:w-10 md:h-10 stroke-[1.5] group-hover/icon:scale-110 transition-transform" />
                        </a>
                        <a href="#" className="p-2 hover:bg-black/5 rounded-full transition-colors group/icon">
                            <Github className="w-8 h-8 md:w-10 md:h-10 stroke-[1.5] group-hover/icon:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto w-full flex justify-center text-xs text-white/30 uppercase tracking-widest pb-8">
                <span>© 2026 · Varchasva Khare</span>
            </div>
        </footer>
    )
}
