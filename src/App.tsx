import { useEffect, useRef } from "react";
import { Hero } from "./components/hero/hero";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import { useGSAP } from "@gsap/react";
import {
  blockColors,
  createPageTransition,
} from "./components/ui/animations/transation-animation/transation-animation";
import { TextSession } from "./components/text-session/text-session";
import { ProjectSession } from "./components/project-session/project-session";

// Registrar plugins do GSAP
gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    function update(time: any) {
      //@ts-ignore
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    //@ts-ignore
    lenisRef.current?.lenis?.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => gsap.ticker.remove(update);
  }, []);

  useGSAP(
    () => {
      // Transição ida: seção 1 -> seção 2
      const executeTransitionToTwo = createPageTransition({
        lenisRef: lenisRef,
        targetSection: "section.two",
        onComplete: () => {
          console.log("Chegou na seção 2!");
        },
      });

      // Transição volta: seção 2 -> seção 1
      const executeTransitionToOne = createPageTransition({
        lenisRef: lenisRef,
        targetSection: "section.one",
        useExitAnimation: true, // Ativar animação de saída
        blockColor: "#ffffff", // Cor diferente para a animação de saída
        onComplete: () => {
          console.log("Voltou para seção 1!");
        },
      });

      // ScrollTrigger para ir da seção 1 para 2
      ScrollTrigger.create({
        trigger: "section.one",
        start: "top -1px",
        onEnter: () => {
          console.log("Saindo da seção 1 → indo para seção 2");
          executeTransitionToTwo();
        },
      });

      // ScrollTrigger para voltar da seção 2 para 1
      ScrollTrigger.create({
        trigger: "section.two",
        start: "top+=39.9% bottom",

        // Quando a seção 2 sair da tela
        onLeaveBack: () => {
          console.log("Saindo da seção 2 → voltando para seção 1");
          executeTransitionToOne();
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />

      <div className="transition-container fixed top-0 left-0 w-full h-full z-[9999] flex pointer-events-none">
        {blockColors().map((_, index) => (
          <div
            key={index}
            className={`transition-block w-[33vh] h-full  hidden origin-bottom `}
          />
        ))}
      </div>

      <main ref={containerRef} className="relative ">
        <section className="one">
          <Hero />
        </section>

        <section className="two w-full  bg-black">
          <div className="w-full min-h-screen flex justify-center items-center gap-20 px-4">
            <TextSession />
          </div>
        </section>

        <section className="three">
          <ProjectSession />
        </section>
      </main>
    </>
  );
}

export default App;
