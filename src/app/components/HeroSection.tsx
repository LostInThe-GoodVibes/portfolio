import { useEffect, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import {
  imgImageCrave,
  imgImageMosaic,
  imgImageWanderlust,
  imgImageWithFallback,
} from "../../imports/assets";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const featuredProjects = [
    {
      title: "Guardian",
      image: imgImageWithFallback,
      tags: ["Mobile", "Accessibility"],
      to: "/project/guardian",
    },
    {
      title: "StreetSight",
      image: imgImageMosaic,
      tags: ["Web", "Advertising"],
      to: "/project/streetsight",
    },
    {
      title: "Devalokha",
      image: imgImageWanderlust,
      tags: ["Game", "Visual Design"],
      to: "/project/devalokha",
    },
    {
      title: "Clario",
      image: imgImageCrave,
      tags: ["Web", "System Design"],
      to: "/project/clario",
    },
  ];
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveProjectIndex((current) => (current + 1) % featuredProjects.length);
    }, 7000);

    return () => window.clearInterval(intervalId);
  }, [featuredProjects.length]);

  const activeProject = featuredProjects[activeProjectIndex];

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#020618] via-[#0f172b] to-[#020618]"
      style={{
        backgroundImage:
          "linear-gradient(144.47655deg, rgb(2, 6, 24) 0%, rgb(15, 23, 43) 50%, rgb(2, 6, 24) 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(12,174,255,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(12,174,255,0.08),transparent_26%)]" />

      <div className="relative mx-auto max-w-[1143px] px-6 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-24 lg:pt-40">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_430px] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-[620px]"
          >
            <div>
              <p className="[font-family:'Jaini',cursive] text-[44px] leading-[0.95] tracking-[-2.4px] text-white sm:text-[72px] lg:text-[96px]">
                Designing
              </p>
              <p className="[font-family:'Jaini',cursive] text-[44px] leading-[0.95] tracking-[-2.4px] text-white sm:text-[72px] lg:text-[96px]">
                experiences
              </p>

              <div className="flex flex-wrap items-baseline gap-x-3">
                <p className="[font-family:'Jaini',cursive] text-[44px] leading-[0.95] tracking-[-2.4px] text-white sm:text-[72px] lg:text-[96px]">
                  that
                </p>
                <p className="font-jacques text-[44px] leading-[0.95] tracking-[-2.4px] text-[#0caeff] sm:text-[72px] lg:text-[96px]">
                  Matter
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-[36rem] font-sans text-[15px] leading-[1.8] tracking-[-0.02em] text-[#90a1b9] sm:text-[18px] lg:mt-8 lg:text-[20px] lg:leading-[1.65]">
              UX/UI designer crafting digital products with purpose,
              personality, and pixel-perfect attention to detail.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-10 lg:gap-4">
              <button
                onClick={() => scrollToSection("work")}
                className="h-[50px] rounded-full bg-[#0caeff] px-6 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-[#0a9de6] sm:h-[58px] sm:px-7 sm:text-[16px]"
              >
                View My Work
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="h-[50px] rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] px-6 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-[rgba(255,255,255,0.1)] sm:h-[58px] sm:px-7 sm:text-[16px]"
              >
                About Me
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to={activeProject.to}
              className="group relative block overflow-hidden rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[rgba(15,23,43,0.5)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 hover:border-[rgba(12,174,255,0.5)]"
            >
              <div className="relative p-5 sm:p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    <div className="mb-5">
                      <p className="font-sans text-[12px] uppercase tracking-[0.6px] text-[#90a1b9]">
                        Featured Project
                      </p>
                    <p className="mt-2 font-sans text-[20px] font-bold tracking-[-0.03em] text-white sm:text-[22px]">
                      {activeProject.title}
                    </p>
                    </div>

                    <div className="relative overflow-hidden rounded-[16px] bg-[#1d293d]">
                      <div className="aspect-[4/3] w-full">
                        <img
                          alt={`${activeProject.title} project preview`}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          src={activeProject.image}
                        />
                      </div>
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,24,0)_0%,rgba(2,6,24,0.22)_100%)]" />
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {activeProject.tags.map((tag, index) => (
                        <span
                          key={`${activeProject.title}-${tag}`}
                          className={`rounded-full px-3 py-1 text-[12px] ${
                            index === 0
                              ? "border border-[rgba(12,174,255,0.3)] bg-[#0caeff] text-white"
                              : "border border-[#2b7fff] bg-[rgba(43,127,255,0.2)] text-[#8ec5ff]"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-12 hidden flex-col items-center gap-2 lg:flex"
        >
          <p className="text-[12px] uppercase tracking-[0.6px] text-[#90a1b9]">
            Scroll
          </p>
          <div className="relative h-8 w-[20px]">
            <div className="absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 rounded-full bg-[#90A1B9]" />
            <div className="absolute bottom-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-b border-r border-[#90A1B9]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
