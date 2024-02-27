"use client";

import ConfiguratorNav from "@/components/configurator-nav/ConfiguratorNav";
import Configurator from "@/components/configurator/Configurator";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import { Canvas } from "@react-three/fiber";
import { openSans } from "./fonts";
import { cameraPos } from "./constants";

export default function Home() {
  return (
    <main className={`${openSans.className} flex items-center max-w-screen`}>
      <Canvas camera={{ position: cameraPos }}>
        <Experience />
      </Canvas>
      <ConfiguratorNav />
      <Configurator />
    </main>
  );
}
