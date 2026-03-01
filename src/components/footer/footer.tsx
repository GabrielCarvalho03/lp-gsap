import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img5 from "../../assets/img5.png";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(".footer-image", { opacity: 0, y: 100, scale: 0.95 });
      gsap.set(".footer-title", { opacity: 0, y: 60 });
      gsap.set(".footer-description", { opacity: 0, y: 60 });
      gsap.set(".footer-credits", { opacity: 0, y: 40 });

      // ScrollTrigger animations with delays
      gsap.to(".footer-image", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".footer-title", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".footer-description", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".footer-credits", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <footer
        ref={footerRef}
        className="bg-black min-h-[200px] xl:min-h-auto  "
      >
        <div>
          <img
            src={img5}
            alt="Section 5"
            className="footer-image object-cover"
          />

          <h1 className="footer-title text-center -mt-32 md:text-4xl lg:text-8xl md:-mt-56 lg:-mt-96 font-bold z-50 absolute w-full text-red-wrong">
            Thanks <br />
            <span className="text-white">for watching</span>
          </h1>

          <div className="w-full flex justify-center items-center">
            <h1 className="footer-description text-center text-xs px-20 lg:text-2xl md:tex -mt-40 max-w-[500px]  font-light z-50 absolute w-full text-white/50 ] pt-10">
              If you're looking to elevate your digital presence with a website
              that truly converts — let's connect.
            </h1>
          </div>
        </div>

        <section className="footer-credits w-full flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-28 pt-6 md:pt-10 lg:pt-48 pb-5">
          <h1 className="font-bold text-sm md:text-base text-white">
            Web Design
          </h1>
          <h1 className="font-bold text-sm md:text-base text-white">2025©</h1>
        </section>
      </footer>
    </>
  );
};
