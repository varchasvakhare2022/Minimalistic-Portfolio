"use client"

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

function Geometry() {
    const meshRef = useRef<any>(null)

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        if (meshRef.current) {
            meshRef.current.rotation.x = time * 0.2
            meshRef.current.rotation.y = time * 0.1
        }
    })

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} scale={2.5}>
                <icosahedronGeometry args={[1, 0]} />
                <meshBasicMaterial
                    color="#ffffff"
                    wireframe
                    transparent
                    opacity={0.05}
                />
            </mesh>
        </Float>
    )
}

export default function ServiceGeometry() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
            <Canvas camera={{ position: [0, 0, 5] }} resize={{ scroll: false }}>
                <Geometry />
            </Canvas>
        </div>
    )
}
