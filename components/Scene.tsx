"use client"

import { Canvas } from '@react-three/fiber'
import Blob from './Blob'

export default function Scene() {
    return (
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.2} />
            <directionalLight
                position={[5, 10, 5]}
                intensity={2}
                castShadow
                shadow-mapSize={[1024, 1024]}
            />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="blue" />
            <Blob />
        </Canvas>
    )
}
