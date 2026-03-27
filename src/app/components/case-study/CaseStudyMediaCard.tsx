import { motion } from "motion/react";
import type { GalleryItem } from "../../data/projects";

interface CaseStudyMediaCardProps {
  item: GalleryItem;
  accent: string;
  mode?: "wireframes" | "final";
  className?: string;
  imageClassName?: string;
  mediaHeightClassName?: string;
}

export default function CaseStudyMediaCard({
  item,
  accent,
  mode = "wireframes",
  className = "",
  imageClassName = "",
  mediaHeightClassName = "min-h-[280px] sm:min-h-[360px] lg:min-h-[420px]",
}: CaseStudyMediaCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className={`overflow-hidden rounded-[24px] border border-white/10 bg-[rgba(8,15,32,0.75)] sm:rounded-[28px] ${className}`}
    >
      <div className={`relative overflow-hidden ${mediaHeightClassName}`}>
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              mode === "final"
                ? `radial-gradient(circle at top left, ${accent}22, transparent 48%), linear-gradient(180deg, rgba(11,17,34,0.6) 0%, rgba(4,9,22,1) 100%)`
                : `linear-gradient(180deg, rgba(5,11,24,0.98) 0%, rgba(8,15,32,1) 100%)`,
          }}
        />

        {item.image ? (
          <div className="absolute inset-0">
            <img
              src={item.image}
              alt={item.title}
              className={`h-full w-full ${
                item.fit === "contain" ? "object-contain object-center" : imageClassName
              }`}
            />
          </div>
        ) : (
          <div className="absolute inset-4 rounded-[20px] border border-dashed border-white/12 bg-[rgba(255,255,255,0.02)] sm:inset-5 sm:rounded-[22px]">
            <div className="absolute inset-x-4 top-4 flex items-center justify-between sm:inset-x-5 sm:top-5">
              <span
                className="rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em]"
                style={{
                  color: accent,
                  backgroundColor: `${accent}1a`,
                  border: `1px solid ${accent}22`,
                }}
              >
                Placeholder
              </span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#62748e]">
                Add asset
              </span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center px-5 text-center sm:px-8">
              <div>
                <p className="text-[16px] font-semibold text-white sm:text-[18px]">{item.title}</p>
                <p className="mt-3 text-[13px] leading-6 text-[#90a1b9] sm:text-[14px] sm:leading-7">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-white/8 px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:gap-4">
          <div>
            <h3 className="text-[18px] font-semibold tracking-[-0.03em] text-white sm:text-[20px]">
              {item.title}
            </h3>
            <p className="mt-2 max-w-[52ch] text-[13px] leading-6 text-[#90a1b9] sm:text-[14px] sm:leading-7">
              {item.caption}
            </p>
          </div>
          {item.image ? (
            <span
              className="shrink-0 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em]"
              style={{
                color: accent,
                backgroundColor: `${accent}16`,
                border: `1px solid ${accent}22`,
              }}
            >
              Live
            </span>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
