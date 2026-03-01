import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroImage from "../../assets/hero.png";

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(".header-item", { opacity: 0, y: -30 });
      gsap.set(".title-main", { opacity: 0, y: 100 });
      gsap.set(".title-highlight", { opacity: 0, y: 100 });
      gsap.set(".description-text", { opacity: 0, y: 30 });
      gsap.set(".hero-image", { opacity: 0, y: 60, scale: 0.95 });

      // All animations start simultaneously
      gsap.to(".header-item", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.2,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.to(".title-main", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.to(".title-highlight", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out",
      });

      gsap.to(".description-text", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.8,
        ease: "power2.out",
      });

      gsap.to(".hero-image", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={heroRef}
      className=" lg:min-h-screen bg-black text-white relative  "
    >
      {/* Header */}
      <section className="w-full flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-28 pt-6 md:pt-10">
        <h1 className="header-item font-bold text-sm md:text-base">
          Web Design
        </h1>
        <h1 className="header-item font-bold text-sm md:text-base">2025©</h1>
      </section>

      {/* read line */}

      <section className="w-full flex flex-col justify-center items-center pt-10 md:pt-20 pb-5 px-4">
        <div className="max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[850px] flex flex-col justify-center items-center">
          <h1 className="title-main font-bold text-lg md:text-2xl text-center mb-4 md:mb-6">
            OCTO <span className="text-red-salmon">SMM</span>
          </h1>
          <h1 className="title-highlight font-bold text-3xl sm:text-4xl md:text-6xl lg:text-8xl z-30 text-center leading-tight">
            <span className="text-red-wrong">Next-gen SMM website</span> for a
            fast- growing agency
          </h1>
        </div>
      </section>

      {/* read line */}

      <section className="w-full flex flex-col justify-center items-center px-4">
        <h1 className="description-text text-white/50 max-w-52 sm:max-w-60 md:max-w-72 z-30 font-light text-center text-sm md:text-base">
          High-impact visuals, bold UI, and metrics that prove results.
        </h1>
      </section>

      <div className="bg-black">
        <img
          src={heroImage}
          alt="Hero"
          className="hero-image w-full h-auto object-cover -mt-16 md:-mt-32"
        />
      </div>
    </main>
  );
};
