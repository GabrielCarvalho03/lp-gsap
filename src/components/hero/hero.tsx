import { ArrowBigDown, MoveUpIcon, MoveUpRightIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroVideo from "../../assets/video_movimento01.mp4";
import WhatsAppIcon from "../../assets/WhatsAppIcon.svg";
import texfill from "../../assets/text-fill.png";
import imgText from "../../assets/imgtext.png";
import { Lenis } from "lenis/react";
import { useGSAP } from "@gsap/react";

// Registrar o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const bigTextRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Set initial states
    gsap.set(
      [
        navRef.current,
        badgeRef.current,
        descriptionRef.current,
        buttonsRef.current,
        bigTextRef.current,
      ],
      {
        opacity: 0,
        y: 30,
      },
    );
    gsap.set([titleRef.current], {
      scale: 1.2,
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
    });

    // Initial entrance timeline
    const entranceTl = gsap.timeline();

    entranceTl
      .to(navRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })
      .to(
        badgeRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.3",
      )
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2",
      )
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4",
      )
      .to(
        buttonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3",
      )
      .to(
        bigTextRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.2",
      );

    // Hover animations for buttons
    //@ts-ignore
    const buttons = buttonsRef.current?.querySelectorAll("button");
    buttons?.forEach((button: any) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Vídeo de fundo */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover object-[center_0%]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        <source src={heroVideo.replace(".mp4", ".webm")} type="video/webm" />
        Seu navegador não suporta vídeo.
      </video>

      {/* Overlay escuro opcional para melhor legibilidade */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>

      {/* Hero */}
      <section
        ref={navRef}
        className="flex justify-between w-full absolute top-4 sm:top-6 md:top-10 px-4 sm:px-8 md:px-12 lg:px-20 z-20"
      >
        <div className="text-white">
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
            Zenn <span className="font-light">thex</span>
          </h1>
        </div>

        <div className="text-white hidden md:flex gap-4 lg:gap-6 xl:gap-10">
          <h1 className="cursor-pointer hover:text-gray-400 duration-300 text-sm lg:text-base">
            Projetos
          </h1>
          <h1 className="cursor-pointer hover:text-gray-400 duration-300 text-sm lg:text-base">
            Sobre Nós
          </h1>
          <h1 className="cursor-pointer hover:text-gray-400 duration-300 text-sm lg:text-base">
            Contato
          </h1>
          <h1 className="cursor-pointer hover:text-gray-400 duration-300 text-sm lg:text-base">
            Orçamento
          </h1>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden text-white">
          <button className="text-2xl">☰</button>
        </div>
      </section>

      {/* Texto por cima do vídeo */}
      <section className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
          <section
            ref={badgeRef}
            className="flex justify-center items-center w-full -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24"
          >
            <div
              className="rounded-full p-2 sm:p-3 md:p-4 relative w-[200px] sm:w-[250px] md:w-[300px] flex justify-center items-center mb-3 sm:mb-4 md:mb-5 scale-110 sm:scale-125 md:scale-150"
              style={{
                backgroundImage: `url(${imgText})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p className="text-white relative z-10 text-xs sm:text-sm md:text-base text-center">
                Vamos criar algo juntos
              </p>
            </div>
          </section>

          <h1
            ref={titleRef}
            className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white text-center font-light leading-tight"
          >
            Experiências digitais sob medida para marcas que querem crescer
            online.
          </h1>

          <p
            ref={descriptionRef}
            className="text-white text-center font-light mt-4 w-full sm:w-[85%] md:w-[80%] lg:w-[70%] mx-auto pt-4 sm:pt-6 md:pt-8 lg:pt-10 text-sm sm:text-base md:text-lg"
          >
            Somos uma agência de desenvolvimento especializada em construir
            sites rápidos, modernos e pensados para gerar resultados.
            Transformando ideias em produtos funcionais e escaláveis.
          </p>

          <div
            ref={buttonsRef}
            className="w-full flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-5 pt-8 sm:pt-12 md:pt-16"
          >
            <button className="rounded-full bg-white h-10 sm:h-11 md:h-12 pl-4 sm:pl-5 md:pl-6 pr-2 sm:pr-2.5 md:pr-3 w-full sm:w-auto">
              <section className="flex items-center justify-between w-full gap-2 sm:gap-3">
                <span className="text-black text-sm sm:text-base whitespace-nowrap">
                  Solicitar orçamento
                </span>
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-[#D9D9D9] flex items-center justify-center">
                  <MoveUpRightIcon className="text-[#434343] w-3 sm:w-4 md:w-5" />
                </div>
              </section>
            </button>

            <button className="rounded-full bg-[#252525] h-10 sm:h-11 md:h-12 pl-4 sm:pl-5 md:pl-6 pr-2 sm:pr-2.5 md:pr-3 w-full sm:w-auto">
              <section className="flex items-center justify-between w-full gap-2 sm:gap-3">
                <span className="text-white text-sm sm:text-base whitespace-nowrap">
                  Entrar em contato
                </span>
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center">
                  <img
                    src={WhatsAppIcon}
                    alt="WhatsApp"
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
                  />
                </div>
              </section>
            </button>
          </div>
        </div>

        <h1
          ref={bigTextRef}
          className="text-center font-bold mt-2 sm:mt-3 md:mt-4 text-[40px] sm:text-[60px] md:text-[80px] lg:text-[120px] xl:text-[151px] absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 xl:bottom-10 bg-clip-text text-transparent bg-cover bg-center px-4"
          style={{
            backgroundImage: `url(${texfill})`,
            backgroundSize: "100% 400%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: `
              brightness(1.2)        
              contrast(1.3)         
              saturate(1.1)          
              hue-rotate(10deg)      
              sepia(0.2)             
            `,
          }}
        >
          Grupo zennthex
        </h1>
      </section>
    </div>
  );
};
