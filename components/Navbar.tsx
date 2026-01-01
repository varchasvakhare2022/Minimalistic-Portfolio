"use client"

import Link from "next/link"

const navItems = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
]

export default function Navbar() {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-6 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-lg">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    )
}
