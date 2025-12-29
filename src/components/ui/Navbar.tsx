import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50">
            <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
                <div className="text-lg font-medium tracking-tight">
                    <a href="/" className="hover:opacity-60 transition-opacity">
                        Portfolio.
                    </a>
                </div>

                <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
                    <a href="#work" className="hover:text-foreground transition-colors">Work</a>
                    <a href="#about" className="hover:text-foreground transition-colors">About</a>
                    <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
                </div>

                {/* Mobile Menu Trigger (Placeholder) */}
                <button className="md:hidden text-foreground">
                    <span className="sr-only">Menu</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
