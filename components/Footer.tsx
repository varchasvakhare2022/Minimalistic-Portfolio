export default function Footer() {
    return (
        <footer id="contact" className="py-24 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                    <h2 className="text-2xl font-light mb-2">Get in touch</h2>
                    <a href="mailto:vk.varchasva@gmail.com" className="text-4xl md:text-6xl font-light hover:text-white/70 transition-colors">
                        vk.varchasva@gmail.com
                    </a>
                </div>

                <div className="flex gap-8 text-sm uppercase tracking-widest text-white/50">
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">GitHub</a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24 flex justify-between text-xs text-white/30 uppercase tracking-widest">
                <span>© 2026 Varchasva Khare</span>
                <span>Minimalistic Portfolio</span>
            </div>
        </footer>
    )
}
