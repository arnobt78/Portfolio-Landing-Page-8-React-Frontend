import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

/** 3D target (stand + rings + bullseye). GSAP yoyo animation moves it up/down for visual interest. */
const Target = (props) => {
  const targetRef = useRef();

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      {/* Stand base */}
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[0.5, 0.6, 0.2, 32]} />
        <meshStandardMaterial color="#4a5568" metalness={0.6} roughness={0.4} />
      </mesh>
      
      {/* Stand pole */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 2, 16]} />
        <meshStandardMaterial color="#718096" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Target board back */}
      <mesh position={[0, 0.8, -0.05]}>
        <cylinderGeometry args={[1, 1, 0.1, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#2d3748" />
      </mesh>
      
      {/* Target rings - outermost (white) */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[1, 1, 0.05, 32]} />
        <meshStandardMaterial color="#f7fafc" />
      </mesh>
      
      {/* Target ring (red) */}
      <mesh position={[0, 0.8, 0.01]}>
        <cylinderGeometry args={[0.8, 0.8, 0.05, 32]} />
        <meshStandardMaterial color="#e53e3e" />
      </mesh>
      
      {/* Target ring (white) */}
      <mesh position={[0, 0.8, 0.02]}>
        <cylinderGeometry args={[0.6, 0.6, 0.05, 32]} />
        <meshStandardMaterial color="#f7fafc" />
      </mesh>
      
      {/* Target ring (red) */}
      <mesh position={[0, 0.8, 0.03]}>
        <cylinderGeometry args={[0.4, 0.4, 0.05, 32]} />
        <meshStandardMaterial color="#e53e3e" />
      </mesh>
      
      {/* Bullseye center (yellow/gold) */}
      <mesh position={[0, 0.8, 0.04]}>
        <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
        <meshStandardMaterial color="#ecc94b" />
      </mesh>
    </group>
  );
};

export default Target;
