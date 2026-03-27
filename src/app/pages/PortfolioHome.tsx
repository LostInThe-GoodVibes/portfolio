import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Download,
  Linkedin,
  Instagram,
  Mail,
  ExternalLink,
} from "lucide-react";
import { useEffect } from "react";
import { UniqueNavBar } from "../components/UniqueNavBar";
import HeroSection from "../components/HeroSection";
import ProcessSection from "../components/ProcessSection";
import {
  imgImageWithFallback,
  imgImageMosaic,
  imgImageWanderlust,
  imgImageCrave,
  imgAboutPortrait,
} from "../../imports/assets";

export default function PortfolioHome() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 100;
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;

          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const offset = 100;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  };

  return (
    <div id="home" className="min-h-screen w-full overflow-x-hidden bg-[#020618]">
      <UniqueNavBar />

      <HeroSection scrollToSection={scrollToSection} />

      {/* ABOUT */}
      <section
        id="about"
        className="relative w-full bg-gradient-to-b from-[#020618] to-[#0f172b] py-20 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1143px] px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 gap-16 lg:grid-cols-[584px_399px]"
          >
            {/* LEFT */}
            <div>
              <p className="mb-4 font-sans text-[12px] font-medium uppercase tracking-[1.25px] text-[#0caeff] sm:text-[14px]">
                About Me
              </p>

              <div className="mb-8">
                <h2 className="font-sans text-[36px] font-bold leading-[1.1] text-white sm:text-[60px] sm:leading-[75px]">
                  Hi, I'm{" "}
                  <span className="font-protest text-[58px] text-[#c94455] sm:text-[100px]">
                    Arjun
                  </span>
                  <span className="text-[20px] sm:text-[25px]"> —</span>
                </h2>

                <p className="font-jacques text-[40px] leading-[0.98] text-[#0caeff] sm:text-[72px] sm:leading-[0.95] lg:text-[85px] lg:leading-[75px]">
                  Lost In The Good Vibes
                </p>
              </div>

              <div className="max-w-[583px] space-y-4 sm:space-y-6">
                <p className="font-sans text-[14px] leading-[22px] text-[#cad5e2] sm:text-[18px] sm:leading-[29.25px]">
                  I’m a UX/UI designer who believes design isn’t just about
                  making things pretty — it’s about solving real problems for
                  real people. Based in the digital realm, I craft experiences
                  that feel intuitive, look stunning, and actually{" "}
                  <span className="font-medium text-white">matter</span>.
                </p>

                <p className="font-sans text-[14px] leading-[22px] text-[#cad5e2] sm:text-[18px] sm:leading-[29.25px]">
                  My journey started with curiosity and a sketchbook. Over the
                  years, that curiosity evolved into a passion for creating
                  digital products that connect with users on a deeper level.
                  Whether it&apos;s a fintech app or a wellness platform, I
                  approach every project with the same question:{" "}
                  <span className="font-medium text-[#0caeff]">
                    "How can this make someone&apos;s life better?"
                  </span>
                </p>

                <p className="font-sans text-[14px] leading-[22px] text-[#cad5e2] sm:text-[18px] sm:leading-[29.25px]">
                  When I’m not designing, you’ll find me exploring new music,
                  diving into design systems, or enjoying the good vibes that
                  life has to offer. Let’s create something meaningful together.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <ValueCard
                  title="Empathy-driven"
                  subtitle="Design is about people, not pixels"
                />
                <ValueCard
                  title="Quality-focused"
                  subtitle="Details make the difference"
                />
                <ValueCard
                  title="Collaborative"
                  subtitle="Best work happens together"
                />
                <ValueCard
                  title="Always learning"
                  subtitle="Growth is a continuous journey"
                />
              </div>

              <a
                href="/Arjun-Manoj-Resume.pdf"
                download
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#0caeff]/35 bg-[#0caeff]/12 px-6 py-3 text-[14px] font-medium text-white transition-all duration-300 hover:border-[#0caeff]/60 hover:bg-[#0caeff]/18"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-center lg:justify-center">
              {/* Portrait Image */}
              <div className="mb-8 flex w-full justify-center">
                <div className="relative flex h-[280px] w-full max-w-[320px] items-center justify-center">
                  <img
                    src={imgAboutPortrait}
                    alt="Arjun's portrait"
                    className="max-h-full w-auto max-w-full object-contain object-center"
                  />
                </div>
              </div>

              <div className="w-full rounded-[24px] border border-white/10 bg-[rgba(15,23,43,0.5)] p-6 sm:p-10">
                <div className="mb-8">
                  <h3 className="font-sans text-[24px] font-bold text-white">
                    My Journey
                  </h3>
                </div>

                <div className="space-y-8">
                  <TimelineItem
                    year="2015"
                    text="Started design journey"
                  />
                  <TimelineItem
                    year="2019"
                    text="Finished bachelors in Product design"
                  />
                  <TimelineItem
                    year="2019"
                    text="Joined an Advertisement / Design agency"
                  />
                  <TimelineItem
                    year="2021"
                    text="Joined a mental health company as a UX/UI designer"
                  />
                  <TimelineItem
                    year="2023"
                    text="Joined Langara for PG diploma in Mobile and Web Design and Development"
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <StatCard value="3+" label="Years Experience" />
                <StatCard value="10+" label="Projects Completed" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <ProcessSection />

      {/* WORK */}
      <section id="work" className="w-full bg-[#020618] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1143px] px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="mb-14 flex flex-col items-start justify-between gap-6 sm:mb-16 lg:mb-20 lg:flex-row lg:items-end lg:gap-8"
          >
            <div>
              <p className="mb-4 font-sans text-[14px] font-medium uppercase tracking-[1.25px] text-[#0caeff]">
                Selected Work
              </p>
              <h2 className="max-w-[695px] font-sans text-[36px] font-bold leading-[1.08] text-white sm:text-[48px] lg:text-[60px] lg:leading-[75px]">
                Crafting experiences that connect &amp; convert
              </h2>
            </div>
          </motion.div>

          <div className="space-y-12">
            {/* Top row */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[687px_328px]">
              <ProjectCard
                to="/project/guardian"
                image={imgImageWithFallback}
                imageAlt="Guardian project preview"
                eyebrow="Capstone Project"
                title="Guardian"
                description="Guardian, a native iOS app, empowers visually impaired users to navigate confidently."
                tags={["Mobile", "Research", "UI/UX"]}
                large
              />

              <ProjectCard
                to="/project/streetsight"
                image={imgImageMosaic}
                imageAlt="StreetSight project preview"
                eyebrow="Advertising Platform"
                title="StreetSight"
                description="A web platform for managing billboard inventory, proposals, and campaign performance in real time."
                tags={["Web Application", "Advertising", "UI/UX"]}
              />
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <ProjectCard
                to="/project/devalokha"
                image={imgImageWanderlust}
                imageAlt="Devalokha project preview"
                eyebrow="Game Design"
                title="Devalokha"
                description="A war between all the gods from myths and lands."
                tags={["Game Design"]}
              />

              <ProjectCard
                to="/project/clario"
                image={imgImageCrave}
                imageAlt="Clario project preview"
                eyebrow="Freelance"
                title="Clario"
                description="Clario speaks with calm confidence and genuine support."
                tags={["Mobile", "Web", "UX Research"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT + FOOTER */}
      <section id="contact" className="relative w-full bg-[#020618] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1143px] px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-[896px]"
          >
            <div className="mb-16 text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0caeff] bg-white/10 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#00c950]" />
                <span className="text-[14px] text-[#cad5e2]">
                  Available for new projects
                </span>
              </div>

              <h2
                className="text-white"
                style={{
                  fontFamily: '"Island Moments", cursive',
                  fontSize: "clamp(72px, 16vw, 140px)",
                  lineHeight: "0.9",
                }}
              >
                Let&apos;s create
              </h2>

              <p
                className="mt-2 text-[#0caeff]"
                style={{
                  fontFamily: '"Lily Script One", cursive',
                  fontSize: "clamp(36px, 8vw, 72px)",
                  lineHeight: "1",
                }}
              >
                Something Amazing
              </p>

              <p className="mt-6 text-[18px] text-[#90a1b9] sm:mt-8 sm:text-[24px]">
                Available for projects &amp; collaborations
              </p>

              <a
                href="mailto:Arjun.manojvu9@gmail.com"
                className="mx-auto mt-10 flex w-full max-w-[704px] flex-col gap-4 rounded-[16px] bg-[#0caeff] px-5 py-6 text-white shadow-[0px_25px_50px_0px_rgba(0,184,219,0.2)] transition-transform hover:scale-[1.01] sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-8"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <Mail size={30} className="shrink-0 sm:h-[34px] sm:w-[34px]" />
                  <span className="break-all text-left text-[20px] font-bold sm:text-[28px] md:text-[36px]">
                    Arjun.manojvu9@gmail.com
                  </span>
                </div>
                <ExternalLink size={28} className="self-end sm:self-auto" />
              </a>
            </div>

            <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="text-center">
              <p className="mb-6 text-[14px] uppercase tracking-[0.55px] text-[#90a1b9]">
                Connect with me
              </p>

              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
                <SocialCard
                  href="https://www.linkedin.com/in/lostinthegoodvibes"
                  icon={<Linkedin size={22} />}
                  label="LinkedIn"
                  handle="/in/lostinthegoodvibes"
                />
                <SocialCard
                  href="https://www.behance.net/arjunmanoj3"
                  icon={
                    <span className="text-[20px] font-bold text-[#90A1B9]">
                      Be
                    </span>
                  }
                  label="Behance"
                  handle="@arjunmanoj3"
                />
                <SocialCard
                  href="https://www.instagram.com/lostinthegoodvibes/"
                  icon={<Instagram size={22} />}
                  label="Instagram"
                  handle="@lostinthegoodvibes"
                />
              </div>
            </div>

            <p className="mt-14 text-center text-[14px] text-[#62748e]">
              Designed &amp; crafted with care by Arjun Manoj © 2026
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({
  to,
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  tags,
  large = false,
}: {
  to: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  large?: boolean;
}) {
  return (
    <Link to={to} className="group block">
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.25 }}
        className={`relative overflow-hidden rounded-[24px] bg-[#0f172b] ${
          large ? "min-h-[500px] sm:min-h-[560px] lg:h-[600px]" : "min-h-[420px] sm:min-h-[460px] lg:h-[450px]"
        }`}
      >
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#020618] via-[rgba(2,6,24,0.55)] to-transparent" />

        <div
          className={`absolute inset-x-0 bottom-0 z-10 ${
            large ? "p-6 sm:p-8 lg:p-12" : "p-6 sm:p-8"
          }`}
        >
          <p className="mb-3 text-[12px] uppercase tracking-[0.6px] text-[#0caeff]">
            {eyebrow}
          </p>

          <h3
            className={`font-sans font-bold text-white ${
              large
                ? "text-[38px] leading-[0.95] sm:text-[44px] lg:text-[48px] lg:leading-[48px]"
                : "text-[28px] leading-[1.1] sm:text-[30px] sm:leading-[36px]"
            }`}
          >
            {title}
          </h3>

          <p
            className={`mt-3 text-[#cad5e2] ${
              large
                ? "max-w-[485px] text-[16px] leading-[26px] sm:text-[18px] sm:leading-[28px]"
                : "max-w-[420px] text-[15px] leading-[24px] sm:text-[16px]"
            }`}
          >
            {description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[12px] text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2 text-white">
            <span className="text-[16px] font-medium">View Case Study</span>
            <ArrowRight size={18} />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

function ValueCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-[16px] border border-white/10 bg-[rgba(15,23,43,0.5)] p-6">
      <h3 className="text-[18px] font-bold text-white">{title}</h3>
      <p className="mt-2 text-[14px] text-[#90a1b9]">{subtitle}</p>
    </div>
  );
}

function TimelineItem({
  year,
  text,
}: {
  year: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[rgba(12,174,255,0.5)] bg-[#0f172b]">
        <div className="h-2 w-2 rounded-full bg-[#00b8db]" />
      </div>

      <div>
        <p className="text-[18px] font-bold text-[#0caeff]">{year}</p>
        <p className="mt-1 text-[16px] leading-[24px] text-[#cad5e2]">
          {text}
        </p>
      </div>
    </div>
  );
}

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-[16px] border border-white/10 bg-[rgba(15,23,43,0.7)] p-6 text-center">
      <p className="text-[30px] font-bold text-[#0caeff]">{value}</p>
      <p className="mt-1 text-[12px] text-[#90a1b9]">{label}</p>
    </div>
  );
}

function SocialCard({
  href,
  icon,
  label,
  handle,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  handle: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-[16px] border border-white/10 bg-[rgba(15,23,43,0.5)] p-6 transition-colors hover:border-[#0caeff]/40"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#1d293d]">
            {icon}
          </div>

          <div className="text-left">
            <p className="text-[16px] font-medium text-white">{label}</p>
            <p className="text-[14px] text-[#90a1b9]">{handle}</p>
          </div>
        </div>

        <ExternalLink
          size={18}
          className="text-[#45556C] transition-colors group-hover:text-white"
        />
      </div>
    </a>
  );
}
