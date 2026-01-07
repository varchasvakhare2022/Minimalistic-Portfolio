"use client";

import { useRef } from "react";
import { MotionValue, motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export interface DockItem {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
}

interface DockProps {
    items: DockItem[];
    panelHeight?: number;
    baseItemSize?: number;
    magnification?: number;
    distance?: number;
}

export default function Dock({
    items,
    baseItemSize = 50,
    magnification = 70,
    distance = 140,
}: DockProps) {
    const mouseY = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseY.set(e.pageY)}
            onMouseLeave={() => mouseY.set(Infinity)}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4 px-3 py-6 rounded-[2rem] bg-neutral-900/50 backdrop-blur-md border border-white/5"
        >
            {items.map((item, i) => (
                <DockItem
                    key={i}
                    mouseY={mouseY}
                    baseItemSize={baseItemSize}
                    magnification={magnification}
                    distance={distance}
                    item={item}
                />
            ))}
        </motion.div>
    );
}

function DockItem({
    mouseY,
    baseItemSize,
    magnification,
    distance,
    item,
}: {
    mouseY: MotionValue;
    baseItemSize: number;
    magnification: number;
    distance: number;
    item: DockItem;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const distanceFromMouse = useTransform(mouseY, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
        const itemCenterY = bounds.y + bounds.height / 2;
        return val - itemCenterY;
    });

    const widthSync = useTransform(
        distanceFromMouse,
        [-distance, 0, distance],
        [baseItemSize, magnification, baseItemSize]
    );

    const width = useSpring(widthSync, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    return (
        <motion.div
            ref={ref}
            style={{ width, height: width }}
            onClick={item.onClick}
            className="aspect-square rounded-full flex items-center justify-center bg-neutral-800/80 border border-white/5 text-white/50 hover:text-white cursor-pointer relative group"
        >
            <motion.div className="relative z-10 w-full h-full flex items-center justify-center">
                {item.icon}
            </motion.div>

            {/* Tooltip */}
            <span className="absolute left-full ml-4 px-2 py-1 bg-neutral-900 border border-white/10 rounded-md text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
            </span>
        </motion.div>
    );
}
