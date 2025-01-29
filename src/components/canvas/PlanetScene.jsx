// PlanetScene.js (Or your relevant component file)
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Astronaut() {
  // Load the astronaut model (replace path with the correct location of your model)
  const { scene, error } = useGLTF('/path-to-your-assets/astronaut_model.gltf');  // Example: '/portfolio/planet/scene.gltf'

  if (error) {
    console.error('Error loading GLTF model:', error);
    return <div>Failed to load model</div>;
  }

  return <primitive object={scene} />;
}

export default function PlanetScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Astronaut />  {/* Here we render the astronaut model */}
      <OrbitControls />
    </Canvas>
  );
}
