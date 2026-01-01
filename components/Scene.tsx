"use client"

import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Blob from './Blob'

export default function Scene() {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Blob />
            <Environment preset="studio" />
        </Canvas>
    )
}
