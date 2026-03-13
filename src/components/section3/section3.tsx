import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img3 from "../../assets/img3.png";
import { BlockColor } from "../ui/block-color/block-color";

gsap.registerPlugin(ScrollTrigger);

export const Section3 = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(".section3-image", { opacity: 0, y: 100, scale: 0.6 });
      gsap.set(".section3-title", { opacity: 0, y: 60 });
      gsap.set(".section3-description", { opacity: 0, y: 60 });
      gsap.set(".section3-colors", { opacity: 0, y: 60 });

      // ScrollTrigger animations with delays
      gsap.to(".section3-image", {
        opacity: 1,
        y: 0,
        scale: 0.75,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".section3-title", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".section3-description", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".section3-colors", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <main
        ref={sectionRef}
        className="xl:min-h-screen bg-black text-white relative flex flex-col xl:flex-row"
      >
        <div className="">
          <img
            src={img3}
            alt="Hero"
            className="section3-image -mt-16 md:-mt-32 rounded-md scale-75 "
          />
        </div>

        <div className="xl:w-1/2 px-5 md:px-0 flex flex-col justify-center items-center xl:justify-start xl:items-start gap-5 text-center xl:text-start">
          <h1 className="section3-title text-4xl md:text-6xl font-bold text-center md:text-start  xl:max-w-60">
            Typography <span className="text-red-wrong">& Colors</span>
          </h1>
          <h1 className="section3-description text-lg md:text-2xl mt-4 md:max-w-[70%] xl:max-w-80 text-white/50 ">
            Modern Grotesque + vibrant pink to reflect business, youth, and
            confidence. Black and white + Denis body for contrast and clarity in
            UI.
          </h1>

          <section className="section3-colors flex w-full gap-5 justify-center xl:justify-start items-center xl:items-start">
            <BlockColor string="#73619" color="bg-white/5" textColor="white" />
            <BlockColor string="#73619" color="bg-white/80" />
            <BlockColor string="#73619" color="bg-red-wrong" />
          </section>
        </div>
      </main>
    </>
  );
};
