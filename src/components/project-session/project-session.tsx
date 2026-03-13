import { useGSAP } from "@gsap/react";
import bg01 from "../../assets/bg-01.png";
import bg02 from "../../assets/bg-02.png";
import bg03 from "../../assets/bg-03.png";

import bgChildren01 from "../../assets/bg-children01.png";
import bgChildren02 from "../../assets/bgChildren02.png";
import bgChildren03 from "../../assets/bgChildren03.png";
// Adicione outras imagens conforme necessário
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Lista de projetos
const projects = [
  {
    id: 1,
    title: "Projeto 1",
    description: "Descrição do projeto 1",
    background: bg01,
    children: bgChildren01,
  },
  {
    id: 2,
    title: "Projeto 2",
    description: "Descrição do projeto 2",
    background: bg02, // Substitua pela imagem real
    children: bgChildren02, // Substitua pela imagem real
  },
  {
    id: 3,
    title: "Projeto 3",
    description: "Descrição do projeto 3",
    background: bg03, // Substitua pela imagem real
    children: bgChildren03, // Substitua pela imagem real
  },
  // Adicione mais projetos aqui...
];

export const ProjectSession = () => {
  const containerRef = useRef(null);
  const projectRefs = useRef<HTMLDivElement[]>([]);
  const textTitle = useRef(null);

  useGSAP(
    () => {
      // Configurações responsivas para diferentes breakpoints
      const mm = gsap.matchMedia();

      // Mobile (até 639px)
      mm.add("(max-width: 639px)", () => {
        projectRefs.current.forEach((project, index) => {
          if (project) {
            gsap.to(project, {
              scaleX: 1.1,
              scaleY: 1.1,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: project,
                start: "top center+=30%",
                end: "center center+=30%",
                scrub: true,
              },
            });
          }
        });

        gsap.set(textTitle.current, {
          opacity: 0,
        });
        gsap.to(textTitle.current, {
          opacity: 1,
          duration: 1,
          scale: 1.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textTitle.current,
            start: "top center+=30%",
            end: "center-=30% center-=15%",
            scrub: true,
          },
        });
      });

      // Tablet (640px - 1023px)
      mm.add("(min-width: 640px) and (max-width: 1023px)", () => {
        projectRefs.current.forEach((project, index) => {
          if (project) {
            gsap.to(project, {
              scaleX: 1.2,
              scaleY: 1.2,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: project,
                start: "top center+=25%",
                end: "center center+=25%",
                scrub: true,
              },
            });
          }
        });

        gsap.set(textTitle.current, {
          opacity: 0,
        });
        gsap.to(textTitle.current, {
          opacity: 1,
          duration: 1,
          scale: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textTitle.current,
            start: "top center+=25%",
            end: "center-=35% center-=20%",
            scrub: true,
          },
        });
      });

      // Desktop (1024px+)
      mm.add("(min-width: 1024px)", () => {
        projectRefs.current.forEach((project, index) => {
          if (project) {
            gsap.to(project, {
              scaleX: 1.3,
              scaleY: 1.3,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: project,
                start: "top center+=20%",
                end: "center center+=20%",
                scrub: true,
              },
            });
          }
        });

        gsap.set(textTitle.current, {
          opacity: 0,
        });
        gsap.to(textTitle.current, {
          opacity: 1,
          duration: 1,
          scale: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textTitle.current,
            start: "top center+=20%",
            end: "center-=45% center-=25%",
            scrub: true,
          },
        });
      });

      return () => mm.revert(); // Cleanup
    },
    {
      scope: containerRef,
    },
  );

  return (
    <main ref={containerRef}>
      <section className="w-full min-h-screen bg-black py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Header */}
        <div className="w-full flex flex-col gap-3 sm:gap-4 md:gap-5 justify-center items-center pb-12 sm:pb-16 md:pb-24 lg:pb-32 px-4">
          <h1
            ref={textTitle}
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center"
          >
            Projetos Recentes
          </h1>
          <span className="text-white text-center text-sm sm:text-base md:text-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl px-4">
            Cada projeto é pensado do zero, unindo estratégia, design e
            desenvolvimento.
          </span>
        </div>

        {/* Lista de Projetos */}
        <div className="w-full flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 px-4">
          {projects.map((project, index) => (
            <section
              key={project.id}
              className="w-full flex justify-center items-center pb-16 sm:pb-24 md:pb-32 lg:pb-48"
            >
              <div
                ref={(el) => {
                  if (el) projectRefs.current[index] = el;
                }}
                className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-[1384px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[737.2px] rounded-lg flex justify-center items-center"
                style={{
                  backgroundImage: `url(${project.background})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {index === 1 ? (
                  <img
                    src={project.children}
                    alt={project.title}
                    className="h-auto rounded-2xl sm:rounded-3xl w-full max-w-[250px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1057px]"
                  />
                ) : (
                  <img
                    src={project.children}
                    alt={project.title}
                    className="w-auto h-auto max-w-[90%] max-h-[90%] sm:max-w-full sm:max-h-full"
                  />
                )}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
};
