import type { GalleryItem } from "../../data/projects";
import CaseStudyMediaCard from "./CaseStudyMediaCard";

interface CaseStudyGalleryProps {
  items: GalleryItem[];
  accent: string;
  mode?: "wireframes" | "final";
  layout?: "default" | "bento-duo";
}

const aspectClasses: Record<NonNullable<GalleryItem["aspect"]>, string> = {
  portrait: "min-h-[320px] sm:min-h-[420px] lg:min-h-[620px]",
  landscape: "min-h-[240px] sm:min-h-[320px] lg:min-h-[440px]",
  wide: "min-h-[220px] sm:min-h-[300px] lg:min-h-[420px]",
  square: "min-h-[240px] sm:min-h-[320px] lg:min-h-[420px]",
};

export default function CaseStudyGallery({
  items,
  accent,
  mode = "wireframes",
  layout = "default",
}: CaseStudyGalleryProps) {
  if (layout === "bento-duo" && items.length === 2) {
    const [primary, secondary] = items;

    return (
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <CaseStudyMediaCard
          item={primary}
          accent={accent}
          mode={mode}
          className="lg:col-span-4"
          mediaHeightClassName="min-h-[360px] sm:min-h-[460px] lg:min-h-[760px]"
          imageClassName="object-cover object-top"
        />
        <CaseStudyMediaCard
          item={secondary}
          accent={accent}
          mode={mode}
          className="lg:col-span-8 self-end"
          mediaHeightClassName="min-h-[260px] sm:min-h-[340px] lg:min-h-[560px]"
          imageClassName="object-cover object-center"
        />
      </div>
    );
  }

  return (
    <div className="grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-6 lg:grid-cols-12">
      {items.map((item, index) => {
        const spanClass =
          mode === "final" && items.length === 3
            ? index === 0
              ? "lg:col-span-7"
              : index === 1
                ? "lg:col-span-5"
                : "lg:col-span-7"
            : mode === "final"
              ? index === 0
                ? "lg:col-span-7"
                : item.aspect === "wide"
                  ? "lg:col-span-12"
                  : item.aspect === "landscape"
                    ? "lg:col-span-5"
                    : item.aspect === "square"
                      ? "lg:col-span-4"
                      : "lg:col-span-5"
            : item.aspect === "wide"
              ? "lg:col-span-12"
              : item.aspect === "landscape"
                ? "lg:col-span-6"
                : item.aspect === "square"
                  ? "lg:col-span-4"
                  : index === 0
                    ? "lg:col-span-5"
                    : "lg:col-span-4";

        const mediaHeightClassName =
          mode === "final" && items.length === 3
            ? index === 0
              ? "min-h-[260px] sm:min-h-[320px] lg:min-h-[460px]"
              : index === 1
                ? "min-h-[260px] sm:min-h-[320px] lg:min-h-[460px]"
                : "min-h-[220px] sm:min-h-[280px] lg:min-h-[360px]"
            : aspectClasses[item.aspect ?? "portrait"];

        return (
          <CaseStudyMediaCard
            key={`${item.title}-${index}`}
            item={item}
            accent={accent}
            mode={mode}
            className={spanClass}
            mediaHeightClassName={mediaHeightClassName}
            imageClassName={
              mode === "final"
                ? "object-cover object-center"
                : "object-contain object-center"
            }
          />
        );
      })}
    </div>
  );
}
