// src/components/ui/animations/transation-animation/transation-animation.ts
import { gsap } from "gsap";

export interface TransitionAnimationParams {
  lenisRef: React.RefObject<any>;
  targetSection: string;
  onComplete?: () => void;
  useExitAnimation?: boolean;
  exitDelay?: number;
  blockColor?: string; // ✅ Novo parâmetro para cor
}

export const blockColors = (color?: string) => {
  return Array.from({ length: 10 }, () => color || "#000000");
};

export const createPageTransition = ({
  lenisRef,
  targetSection,
  onComplete,
  useExitAnimation = false,
  exitDelay = 0.1,
  blockColor = "#000000", // ✅ Cor padrão preta
}: TransitionAnimationParams) => {
  const executeTransition = () => {
    console.log("🚀 Iniciando transição de página");

    // Parar o scroll
    //@ts-ignore
    lenisRef.current?.lenis?.stop();

    const blocks = document.querySelectorAll(".transition-block");

    if (blocks.length > 0) {
      gsap.set(blocks, {
        display: "block",
        scaleY: 0,
        transformOrigin: "bottom",
        backgroundColor: blockColor, // ✅ Aplicar cor dinamicamente
      });

      // Timeline principal
      const tl = gsap.timeline({
        onComplete: () => {
          console.log("✅ Transição completa!");
          onComplete?.();
        },
      });

      // Animação de entrada dos blocos
      tl.to(blocks, {
        scaleY: 1,
        duration: 0.4,
        ease: "power2.inOut",
        stagger: {
          each: 0.1,
          from: "start",
        },
        onUpdate: function () {
          if (this.progress() > 0.9) {
            const targetElement = document.querySelector(targetSection);
            if (targetElement) {
              //@ts-ignore
              lenisRef.current?.lenis?.start();
              //@ts-ignore
              lenisRef.current?.lenis?.scrollTo(targetElement, {
                duration: 0,
                immediate: true,
              });
              //@ts-ignore
              lenisRef.current?.lenis?.stop();
            }
          }
        },
      });

      // ANIMAÇÃO DE SAÍDA OPCIONAL
      if (useExitAnimation) {
        tl.to(
          blocks,
          {
            scaleY: 0,
            duration: 0.3,
            ease: "power2.inOut",
            stagger: {
              each: 0.05,
              from: "end",
            },
          },
          `+=${exitDelay}`,
        ).call(() => {
          gsap.set(blocks, { display: "none" });
          //@ts-ignore
          lenisRef.current?.lenis?.start();
        });
      } else {
        tl.call(
          () => {
            gsap.set(blocks, { display: "none", scaleY: 0 });
            //@ts-ignore
            lenisRef.current?.lenis?.start();
          },
          [],
          `+=${exitDelay}`,
        );
      }
    } else {
      console.error("❌ Blocos de transição não encontrados!");
      //@ts-ignore
      lenisRef.current?.lenis?.start();
      onComplete?.();
    }
  };

  return executeTransition;
};
