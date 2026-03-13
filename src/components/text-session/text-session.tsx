import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const TextSession = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(
    () => {
      const text = titleRef.current;

      // Split text manual - melhor handling de espaços
      if (text) {
        //@ts-ignore
        const textContent = text.innerText;
        //@ts-ignore
        text.innerHTML = textContent
          .split("")
          //@ts-ignore
          .map((char, index) => {
            if (char === " ") {
              return '<span class="char space" style="display: inline-block; width: 0.3em;">&nbsp;</span>';
            }
            return `<span class="char" style="display: inline-block; transform-origin: center bottom;">${char}</span>`;
          })
          .join("");
      }
      //@ts-ignore
      const chars = text?.querySelectorAll(".char");

      // Separar primeiras 8 letras do resto
      const firstEightChars = Array.from(chars).slice(0, 8);
      const remainingChars = Array.from(chars).slice(8);

      // Pin do container
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        pinSpacing: true,
      });

      // Estado inicial - todas invisíveis
      gsap.set(chars, {
        y: 50, // Movimento menor para mais suavidade
        opacity: 0,
        scale: 0.9,
      });

      // Animação inicial das primeiras 8 letras (mais suave)
      gsap.to(firstEightChars, {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.08, // Mais rápido
        ease: "power2.out", // Easing mais suave
        delay: 2,
      });

      // Animação das letras restantes no scroll
      gsap.to(remainingChars, {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.01, // Muito mais suave
        ease: "power1.out", // Easing mais suave
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom+=80% top",
          scrub: 0.5, // Mais responsivo
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <>
      <main
        ref={containerRef}
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-[90%] lg:max-w-[85%]">
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                     font-light text-white 
                     tracking-[0.1em] 
                     leading-[1.2] 
                     text-center
                     break-words"
            style={{
              wordSpacing: "0.2em",
              letterSpacing: "0.05em",
            }}
          >
            Soluções genéricas criam resultados genéricos. Por isso cada projeto
            é pensado do zero — estratégia, design e desenvolvimento trabalhando
            juntos.
          </h1>
        </div>
      </main>
    </>
  );
};
