import { motion } from "motion/react";

interface CaseStudySectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function CaseStudySectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: CaseStudySectionHeadingProps) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className={centered ? "mx-auto max-w-[760px] text-center" : "max-w-[760px]"}
    >
      <p className="mb-4 font-sans text-[12px] font-medium uppercase tracking-[2px] text-[#0caeff] sm:text-[13px]">
        {eyebrow}
      </p>
      <h2 className="text-balance font-sans text-[28px] font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-[40px] md:text-[48px] lg:text-[56px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-[15px] leading-[1.8] text-[#90a1b9] sm:mt-6 sm:text-[17px] lg:text-[19px]">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
