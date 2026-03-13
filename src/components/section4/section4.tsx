import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img4 from "../../assets/img4 (1).jpg";

gsap.registerPlugin(ScrollTrigger);

export const Section4 = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(".section4-title1", { opacity: 0, y: 60 });
      gsap.set(".section4-title2", { opacity: 0, y: 60 });
      gsap.set(".section4-description", { opacity: 0, y: 60 });
      gsap.set(".section4-image-container", { opacity: 0, y: 100, scale: 0.9 });

      // ScrollTrigger animations with delays
      gsap.to(".section4-title1", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".section4-title2", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".section4-description", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".section4-image-container", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        delay: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <main
      ref={sectionRef}
      className="xl:min-h-screen bg-black text-white pt-20 px-1 xl:pt-0 xl:px-0"
    >
      <div className="text-center">
        <h1 className="section4-title1 text-4xl xl:text-8xl font-bold">
          Bold, confident,
        </h1>
        <h1 className="section4-title2 text-4xl xl:text-8xl font-bold text-red-wrong">
          conversion-focused
        </h1>
        <div className="w-full flex justify-center items-center">
          <h1 className="section4-description text-lg xl:text-4xl max-w-[680px] pt-10 text-white/50 pb-10">
            Each section pushes the user to scroll, interact, or convert. From
            service overview to team credibility and CTA placement - all
            decisions are built around performance.
          </h1>
        </div>
      </div>
      <div className="section4-image-container relative w-full flex justify-center items-center">
        <img src={img4} alt="Section 4" className="" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
    </main>
  );
};
