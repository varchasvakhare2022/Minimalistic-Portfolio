"use client"

import Link from "next/link"

const navItems = [
    { name: "Work", href: "#work" },
    { name: "Home", href: "/" },
    { name: "Info", href: "/info" },
]

export default function Navbar() {
    return (
        <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-10 px-8 py-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/5 shadow-2xl">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm font-medium text-white/60 hover:text-white transition-colors tracking-wide"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    )
}
