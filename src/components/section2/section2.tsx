import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img2 from "../../assets/img2.png";

gsap.registerPlugin(ScrollTrigger);

export const Section2 = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(".section2-image", { opacity: 0, x: -100, scale: 0.9 });
      gsap.set(".section2-subtitle", { opacity: 0, y: 50 });
      gsap.set(".section2-title", { opacity: 0, y: 50 });
      gsap.set(".section2-description", { opacity: 0, y: 50 });

      // ScrollTrigger animations
      gsap.to(".section2-image", {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".section2-subtitle", {
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

      gsap.to(".section2-title", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".section2-description", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.4,
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
        className=" w-full h-[800px] bg-black text-white relative flex flex-col xl:flex-row"
      >
        <div className="">
          <img
            src={img2}
            alt="Hero"
            className="section2-image md:w-[900px] 2xl:w-auto md:-mt-32 rounded-md xl:absolute -top-10  "
          />
        </div>
        <div className="lg:w-3/4"></div>

        <div className="xl:absolute right-0 xl:max-w-[600px] h-full flex flex-col gap-5   text-center xl:text-start    px-4 md:px-0 lg:pr-20">
          <h1 className="section2-subtitle text-xl pt-10 md:pt-0  font-light text-white/50">
            About the project:
          </h1>
          <h1 className="section2-title text-3xl md:text-6xl xl:text-5xl font-bold  ">
            Octo SMM is a social media marketing studio{" "}
            <span className="text-red-wrong">
              helping brands turn subscribers into loyal clients.
            </span>
          </h1>
          <h1 className="section2-description text-lg sm:text-xl md:text-xl lg:text-3xl xl:text-lg font-light text-white/50">
            Focused on ROI-driven social media optimization, innovative websites
            that reflects their energy, speaks to modern business and makes
            their numbers shine.
          </h1>
        </div>
      </main>
    </>
  );
};
