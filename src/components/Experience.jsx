import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function RotatingBox() {
  const ref = useRef()
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta
      ref.current.rotation.y += delta
    }
  })
  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ff6a00" />
    </mesh>
  )
}

export default function Experience() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Canvas>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <RotatingBox />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
