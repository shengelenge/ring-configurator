"use client";

import ConfiguratorNav from "@/components/configurator-nav/ConfiguratorNav";
import Configurator from "@/components/configurator/Configurator";
import Experience from "@/components/experience/Experience";
import { Canvas } from "@react-three/fiber";
import { cameraPos } from "@/lib/constants";

export default function Home() {
  return (
    <main className={"flex min-h-screen items-center justify-center"}>
      <Canvas
        camera={{ position: cameraPos }}
        className="absolute inset-0 left-0 w-16"
      >
        <Experience />
      </Canvas>
      <ConfiguratorNav />
      <Configurator />
    </main>
  );
}
