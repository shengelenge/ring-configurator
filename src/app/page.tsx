"use client";

import ConfiguratorNav from "@/components/configurator-nav/ConfiguratorNav";
import Configurator from "@/components/configurator/Configurator";
import Experience from "@/components/experience/Experience";
import { Canvas } from "@react-three/fiber";
import { cameraPos } from "@/lib/constants";

export default function Home() {
  return (
    <main className={"flex-grow flex items-center justify-center h-full"}>
      <section className="w-1/2 h-full">
        <Canvas camera={{ position: cameraPos }}>
          <Experience />
        </Canvas>
      </section>
      <section className="w-1/6 h-full">
        <ConfiguratorNav />
      </section>
      <section className=" w-1/3 h-full">
        <Configurator />
      </section>
    </main>
  );
}
