import { OrbitControls, Stage } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Experience() {
  const gltf = useLoader(GLTFLoader, "./models/gold-ring.glb");

  return (
    <>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.25}
      />
      <Stage environment={"studio"} intensity={0.6} adjustCamera={false}>
        <Suspense fallback={null}>
          <primitive object={gltf.scene} />
        </Suspense>
      </Stage>
    </>
  );
}
