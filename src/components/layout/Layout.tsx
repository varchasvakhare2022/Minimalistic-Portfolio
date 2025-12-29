import React, { type ReactNode } from 'react';
import Navbar from '../ui/Navbar';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
            <Navbar />
            <main className="flex-grow w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-32 pb-12">
                {children}
            </main>
            <footer className="py-8 text-center text-sm text-muted">
                <p>&copy; {new Date().getFullYear()} Minimalist Portfolio</p>
            </footer>
        </div>
    );
};

export default Layout;
