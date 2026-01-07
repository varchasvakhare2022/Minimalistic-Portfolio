"use client";

import Dock from "@/components/Dock";
import { Home as HomeIcon, FolderOpen, User, Mail } from "lucide-react";

export default function DockNavigation() {
    const items = [
        {
            icon: <HomeIcon size={18} />,
            label: 'Home',
            onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' })
        },
        {
            icon: <FolderOpen size={18} />,
            label: 'Work',
            onClick: () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
            icon: <User size={18} />,
            label: 'Services',
            onClick: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
            icon: <Mail size={18} />,
            label: 'Contact',
            onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        },
    ];

    return <Dock items={items} baseItemSize={50} magnification={70} />;
}
