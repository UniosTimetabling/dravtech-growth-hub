import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const GOLD = "#e8b630";
const RED = "#d8342c";

function Shapes() {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const dt = Math.min(delta, 0.05);
    g.rotation.y += dt * 0.08;
    const tx = state.pointer.y * 0.25;
    const ty = state.pointer.x * 0.35;
    g.rotation.x += (tx - g.rotation.x) * (1 - Math.exp(-3 * dt));
    g.position.x += (ty - g.position.x) * (1 - Math.exp(-3 * dt));
  });
  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh position={[1.6, 0.4, 0]}>
          <torusKnotGeometry args={[0.9, 0.28, 220, 32]} />
          <meshStandardMaterial color={GOLD} metalness={1} roughness={0.22} />
        </mesh>
      </Float>
      <Float speed={2} floatIntensity={2}>
        <mesh position={[-2.2, -1.2, -1]}>
          <icosahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial color={GOLD} metalness={0.9} roughness={0.35} flatShading />
        </mesh>
      </Float>
      <Float speed={2.6} floatIntensity={2.4}>
        <mesh position={[2.9, -1.6, 0.6]}>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial color={RED} metalness={0.4} roughness={0.3} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={2}>
        <mesh position={[-1, 1.8, -2]} rotation={[0.6, 0.3, 0]}>
          <torusGeometry args={[0.5, 0.06, 16, 80]} />
          <meshStandardMaterial color={GOLD} metalness={1} roughness={0.15} />
        </mesh>
      </Float>
    </group>
  );
}

export function GoldScene() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[4, 5, 3]} intensity={2.2} color="#fff1c9" />
      <pointLight position={[-4, -2, 2]} intensity={12} color={RED} />
      <Shapes />
      <Environment>
        <Lightformer intensity={3} position={[0, 5, 0]} scale={[10, 10, 1]} />
        <Lightformer intensity={1.5} color="#ffd27a" position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[20, 1, 1]} />
        <Lightformer intensity={1} position={[5, -1, 1]} rotation-y={-Math.PI / 2} scale={[20, 2, 1]} />
      </Environment>
    </Canvas>
  );
}
