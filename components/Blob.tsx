"use client"

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

export default function Blob() {
    const meshRef = useRef<THREE.Mesh>(null!)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        meshRef.current.rotation.x = t * 0.2
        meshRef.current.rotation.y = t * 0.2
    })

    return (
        <Sphere ref={meshRef} args={[1, 128, 128]} scale={1.5} castShadow receiveShadow>
            <MeshDistortMaterial
                color="#ffffff"
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0.4}
                metalness={0.1}
            />
        </Sphere>
    )
}
