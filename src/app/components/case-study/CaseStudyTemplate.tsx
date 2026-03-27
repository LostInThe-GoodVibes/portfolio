import { Link } from "react-router";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  ExternalLink,
  Goal,
  Layers3,
  MonitorSmartphone,
  Sparkles,
  Wrench,
  Swords,
} from "lucide-react";
import type { ProjectData } from "../../data/projects";
import CaseStudyGallery from "./CaseStudyGallery";
import CaseStudyMediaCard from "./CaseStudyMediaCard";
import CaseStudySectionHeading from "./CaseStudySectionHeading";

interface CaseStudyTemplateProps {
  project: ProjectData;
  previousProject?: ProjectData;
  nextProject?: ProjectData;
}

const phaseOrder: Array<keyof ProjectData["phases"]> = [
  "discover",
  "define",
  "design",
  "deliver",
];

export default function CaseStudyTemplate({
  project,
  previousProject,
  nextProject,
}: CaseStudyTemplateProps) {
  const meta = [
    { label: "Role", value: project.role, icon: BriefcaseBusiness },
    { label: "Duration", value: project.duration, icon: Clock3 },
    { label: "Tools", value: project.tools.join(", "), icon: Wrench },
    { label: "Platform", value: project.platform, icon: MonitorSmartphone },
  ];

  if (project.presentation === "game-pitch") {
    return (
      <GamePitchTemplate
        project={project}
        previousProject={previousProject}
        nextProject={nextProject}
      />
    );
  }

  if (project.presentation === "system-product") {
    return (
      <SystemProductTemplate
        project={project}
        previousProject={previousProject}
        nextProject={nextProject}
      />
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020618]">
      <section className="relative min-h-[92vh] overflow-hidden border-b border-white/6 bg-[#020618]">
        <div className="absolute inset-0">
          <img
            src={project.heroImage}
            alt={project.heroImageAlt}
            className="h-full w-full object-cover object-center opacity-24"
          />
          <div
            className="absolute inset-0 opacity-35"
            style={{
              background: `radial-gradient(circle at top right, ${project.accent}28, transparent 28%)`,
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(12,174,255,0.16),transparent_34%),linear-gradient(180deg,rgba(2,6,24,0.24)_0%,rgba(2,6,24,0.82)_55%,#020618_100%)]" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 pb-20 pt-36 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[13px] font-medium uppercase tracking-[0.18em] text-[#90a1b9] transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Work
            </Link>
          </motion.div>

          <div className="mt-10 grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
            >
              <p
                className="mb-4 font-sans text-[13px] font-medium uppercase tracking-[0.22em]"
                style={{ color: project.accent }}
              >
                {project.subtitle}
              </p>
              <h1 className="max-w-[10ch] text-balance font-sans text-[44px] font-bold leading-[0.95] tracking-[-0.06em] text-white sm:text-[68px] lg:text-[88px]">
                {project.title}
              </h1>
              <p className="mt-6 max-w-[56ch] text-[18px] leading-[1.9] text-[#cad5e2] sm:text-[21px]">
                {project.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-4 py-2 text-[13px] font-medium text-white/90"
                    style={{
                      border: `1px solid ${project.accent}33`,
                      backgroundColor: `${project.accent}14`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[rgba(8,15,32,0.72)] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.35)]"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-80"
                style={{
                  background: `radial-gradient(circle at top left, ${project.accent}2a, transparent 36%)`,
                }}
              />
              <div className="relative min-h-[340px] overflow-hidden rounded-[28px] border border-white/8 bg-[#050b17] sm:min-h-[420px]">
                <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
                  <img
                    src={project.heroImage}
                    alt={project.heroImageAlt}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,24,0.08)_0%,rgba(2,6,24,0.6)_100%)]" />
              </div>

              <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
                {meta.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-4"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full"
                          style={{ backgroundColor: `${project.accent}14` }}
                        >
                          <Icon
                            className="h-4 w-4"
                            style={{ color: project.accent }}
                          />
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.22em] text-[#62748e]">
                            {item.label}
                          </p>
                          <p className="mt-2 text-[15px] leading-6 text-white">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 md:px-12 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <CaseStudySectionHeading
              eyebrow="Overview"
              title="A clear case study structure with depth where it matters."
              description={project.overview}
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <InfoCard title="Responsibilities" accent={project.accent}>
              {project.responsibilities.map((item) => (
                <ListRow key={item} text={item} accent={project.accent} />
              ))}
            </InfoCard>
            <InfoCard title="Goals & Challenge" accent={project.accent}>
              {project.goals.map((item) => (
                <ListRow key={item} text={item} accent={project.accent} />
              ))}
            </InfoCard>
          </div>
        </div>
      </section>

      <section className="border-y border-white/6 bg-[linear-gradient(180deg,rgba(7,17,36,0.7)_0%,rgba(2,6,24,0)_100%)] py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <CaseStudySectionHeading
            eyebrow="Problem Space"
            title="Framing the problem before pushing pixels."
            description={project.challenge}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <NarrativeCard
              title="The Problem"
              body={project.problem}
              accent={project.accent}
              icon={<Goal className="h-5 w-5" />}
              tone="danger"
            />
            <NarrativeCard
              title="The Response"
              body={project.solution}
              accent={project.accent}
              icon={<Sparkles className="h-5 w-5" />}
              tone="accent"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <CaseStudySectionHeading
            eyebrow="Process"
            title="A flexible process shaped around real decisions."
            description="Each project uses the same core design arc, but the emphasis shifts based on the product, users, and constraints."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {phaseOrder.map((phaseKey, index) => {
              const phase = project.phases[phaseKey];

              return (
                <motion.article
                  key={phaseKey}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="rounded-[28px] border border-white/10 bg-[rgba(8,15,32,0.72)] p-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className="rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em]"
                      style={{
                        color: project.accent,
                        border: `1px solid ${project.accent}33`,
                        backgroundColor: `${project.accent}14`,
                      }}
                    >
                      0{index + 1}
                    </span>
                    <div
                      className="h-px flex-1"
                      style={{
                        background: `linear-gradient(90deg, ${project.accent}55 0%, transparent 100%)`,
                      }}
                    />
                  </div>

                  <h3 className="mt-6 text-[28px] font-bold tracking-[-0.04em] text-white">
                    {phaseKey.charAt(0).toUpperCase() + phaseKey.slice(1)}
                  </h3>
                  <p className="mt-2 text-[16px] font-medium text-[#cad5e2]">
                    {phase.title}
                  </p>
                  <p className="mt-4 text-[15px] leading-8 text-[#90a1b9]">
                    {phase.content}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {phase.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-2 text-[12px] text-[#cad5e2]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/6 bg-[linear-gradient(180deg,rgba(7,17,36,0.72)_0%,rgba(2,6,24,0)_100%)] py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <CaseStudySectionHeading
            eyebrow="Wireframes"
            title="Early structure, flow, and interaction thinking."
            description="These slots are ready for low-fi or mid-fi work. If you have exports later, you can drop them straight into the project data."
          />

          <div className="mt-14">
            <CaseStudyGallery
              items={project.wireframes}
              accent={project.accent}
              mode="wireframes"
              layout={project.wireframeLayout ?? "default"}
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <CaseStudySectionHeading
            eyebrow="Final UI"
            title="The polished experience, presented as the visual centerpiece."
            description={project.description}
          />

          <div className="mt-14">
            <CaseStudyGallery
              items={project.finalShowcase}
              accent={project.accent}
              mode="final"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/6 bg-[linear-gradient(180deg,rgba(7,17,36,0.65)_0%,rgba(2,6,24,0)_100%)] py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <CaseStudySectionHeading
            eyebrow="Outcome"
            title="What the work achieved and what it taught me."
            description={project.outcome}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {project.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[24px] border border-white/10 bg-[rgba(8,15,32,0.75)] p-6"
                >
                  <p className="text-[13px] uppercase tracking-[0.2em] text-[#62748e]">
                    {stat.label}
                  </p>
                  <p
                    className="mt-4 max-w-full text-[34px] font-bold leading-[1.05] tracking-[-0.05em] break-words sm:text-[36px]"
                    style={{ color: project.accent }}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[rgba(8,15,32,0.75)] p-8 sm:p-10">
              <div
                className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-medium uppercase tracking-[0.22em]"
                style={{
                  color: project.accent,
                  border: `1px solid ${project.accent}33`,
                  backgroundColor: `${project.accent}14`,
                }}
              >
                <Layers3 className="h-4 w-4" />
                Reflection
              </div>
              <p className="max-w-[56ch] text-[19px] leading-[1.9] text-[#cad5e2]">
                {project.takeaway}
              </p>
            </div>
          </div>
        </div>
      </section>

      {project.appUrl ? (
        <ExploreAppSection project={project} appUrl={project.appUrl} />
      ) : null}

      <section className="py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="grid gap-4 md:grid-cols-3">
            {previousProject ? (
              <FooterNavCard
                direction="Previous Project"
                project={previousProject}
                to={`/project/${previousProject.id}`}
                arrow="left"
              />
            ) : (
              <div className="rounded-[28px] border border-white/8 bg-white/[0.02]" />
            )}

            <Link
              to="/#hero"
              className="flex min-h-[170px] flex-col items-center justify-center rounded-[28px] border border-white/10 bg-[rgba(8,15,32,0.72)] px-8 py-10 text-center transition-transform hover:-translate-y-1"
            >
              <span className="text-[12px] uppercase tracking-[0.22em] text-[#62748e]">
                Back Home
              </span>
              <p className="mt-4 text-[28px] font-bold tracking-[-0.04em] text-white">
                Explore the Homepage
              </p>
            </Link>

            {nextProject ? (
              <FooterNavCard
                direction="Next Project"
                project={nextProject}
                to={`/project/${nextProject.id}`}
                arrow="right"
              />
            ) : (
              <div className="rounded-[28px] border border-white/8 bg-white/[0.02]" />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function GamePitchTemplate({
  project,
  previousProject,
  nextProject,
}: CaseStudyTemplateProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020618]">
      <section className="relative min-h-[92vh] overflow-hidden border-b border-white/8 bg-[#020618]">
        <div className="absolute inset-0">
          <img
            src={project.heroImage}
            alt={project.heroImageAlt}
            className="h-full w-full object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,138,71,0.18),transparent_32%),linear-gradient(180deg,rgba(2,6,24,0.2)_0%,rgba(2,6,24,0.8)_55%,#020618_100%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] max-w-[1400px] flex-col justify-end px-6 pb-20 pt-36 md:px-12">
          <Link
            to="/#work"
            className="mb-10 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black/20 px-5 py-2 text-[13px] font-medium uppercase tracking-[0.18em] text-[#cad5e2] backdrop-blur-sm transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Work
          </Link>

          <div className="max-w-[920px]">
            <p
              className="mb-4 font-sans text-[13px] font-medium uppercase tracking-[0.24em]"
              style={{ color: project.accent }}
            >
              {project.subtitle}
            </p>
            <h1 className="max-w-[11ch] text-balance font-sans text-[48px] font-bold leading-[0.9] tracking-[-0.06em] text-white sm:text-[78px] lg:text-[108px]">
              {project.title}
            </h1>
            <p className="mt-6 max-w-[720px] text-[19px] leading-[1.8] text-[#d8dee9] sm:text-[24px]">
              {project.tagline ?? project.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[13px] font-medium text-white/90 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 md:px-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <CaseStudySectionHeading
              eyebrow="Overview"
              title="A mythological fighting game concept built as a cinematic pitch."
              description={project.description}
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <InfoCard title="Platform + Role" accent={project.accent}>
              <ListRow text={project.platform} accent={project.accent} />
              <ListRow text={project.role} accent={project.accent} />
            </InfoCard>
            <InfoCard title="Opportunity" accent={project.accent}>
              <p className="text-[15px] leading-8 text-[#cad5e2]">
                {project.problem}
              </p>
            </InfoCard>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[linear-gradient(180deg,rgba(26,11,8,0.55)_0%,rgba(2,6,24,0)_100%)] py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <CaseStudySectionHeading
            eyebrow="Key Features"
            title="Built to feel like a fighting game world, not just a UI exercise."
            description="The concept focuses on highly readable combat UX while still selling the fantasy of gods, arenas, and cinematic spectacle."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {project.features?.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[26px] border border-white/10 bg-[rgba(8,15,32,0.76)] p-6"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${project.accent}18` }}
                >
                  <Swords className="h-5 w-5" style={{ color: project.accent }} />
                </div>
                <h3 className="mt-6 text-[22px] font-bold tracking-[-0.04em] text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-[15px] leading-8 text-[#90a1b9]">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {project.visualSections?.map((section, sectionIndex) => (
        <section key={section.title} className="py-20">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <CaseStudySectionHeading
              eyebrow={section.title}
              title={section.title}
              description={section.description}
            />

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
              {section.items.map((item, itemIndex) => {
                const spanClass =
                  item.aspect === "wide"
                    ? "lg:col-span-12"
                    : item.aspect === "landscape"
                      ? itemIndex === 0
                        ? "lg:col-span-7"
                        : "lg:col-span-5"
                      : item.aspect === "portrait"
                        ? "lg:col-span-4"
                        : "lg:col-span-5";

                const mediaHeightClassName =
                  item.aspect === "wide"
                    ? "min-h-[320px] lg:min-h-[480px]"
                    : item.aspect === "landscape"
                      ? "min-h-[320px] lg:min-h-[460px]"
                      : item.aspect === "portrait"
                        ? "min-h-[440px] lg:min-h-[620px]"
                        : "min-h-[360px] lg:min-h-[420px]";

                return (
                  <CaseStudyMediaCard
                    key={`${section.title}-${item.title}`}
                    item={item}
                    accent={project.accent}
                    mode="final"
                    className={spanClass}
                    mediaHeightClassName={mediaHeightClassName}
                    imageClassName="object-cover object-center"
                  />
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="border-y border-white/8 bg-[linear-gradient(180deg,rgba(26,11,8,0.4)_0%,rgba(2,6,24,0)_100%)] py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <CaseStudySectionHeading
            eyebrow="References / Inspiration"
            title="Visual and tonal inspirations behind the concept."
            description="This section anchors the pitch in familiar genre touchpoints while still leaving room for Devalokha’s own identity."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {project.inspirations?.map((reference, index) => (
              <motion.article
                key={reference.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[26px] border border-white/10 bg-[rgba(8,15,32,0.76)] p-7"
              >
                <p className="text-[24px] font-bold tracking-[-0.04em] text-white">
                  {reference.title}
                </p>
                <p className="mt-4 text-[15px] leading-8 text-[#90a1b9]">
                  {reference.note}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid gap-4 md:grid-cols-3">
            {previousProject ? (
              <FooterNavCard
                direction="Previous Project"
                project={previousProject}
                to={`/project/${previousProject.id}`}
                arrow="left"
              />
            ) : (
              <div className="rounded-[28px] border border-white/8 bg-white/[0.02]" />
            )}

            <Link
              to="/#hero"
              className="flex min-h-[170px] flex-col items-center justify-center rounded-[28px] border border-white/10 bg-[rgba(8,15,32,0.72)] px-8 py-10 text-center transition-transform hover:-translate-y-1"
            >
              <span className="text-[12px] uppercase tracking-[0.22em] text-[#62748e]">
                Back Home
              </span>
              <p className="mt-4 text-[28px] font-bold tracking-[-0.04em] text-white">
                Explore the Homepage
              </p>
            </Link>

            {nextProject ? (
              <FooterNavCard
                direction="Next Project"
                project={nextProject}
                to={`/project/${nextProject.id}`}
                arrow="right"
              />
            ) : (
              <div className="rounded-[28px] border border-white/8 bg-white/[0.02]" />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function SystemProductTemplate({
  project,
  previousProject,
  nextProject,
}: CaseStudyTemplateProps) {
  const meta = [
    { label: "Role", value: project.role, icon: BriefcaseBusiness },
    { label: "Duration", value: project.duration, icon: Clock3 },
    { label: "Platform", value: project.platform, icon: MonitorSmartphone },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020618]">
      <section className="relative min-h-[92vh] overflow-hidden border-b border-white/8 bg-[#020618]">
        <div className="absolute inset-0">
          <img
            src={project.heroImage}
            alt={project.heroImageAlt}
            className="h-full w-full object-cover object-center opacity-22"
          />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: `radial-gradient(circle at top right, ${project.accent}22, transparent 28%)`,
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(60,200,255,0.16),_transparent_34%),linear-gradient(180deg,rgba(2,6,24,0.24)_0%,rgba(2,6,24,0.82)_55%,#020618_100%)]" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 pb-20 pt-36 md:px-12">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[13px] font-medium uppercase tracking-[0.18em] text-[#90a1b9] transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Work
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p
                className="mb-4 font-sans text-[13px] font-medium uppercase tracking-[0.22em]"
                style={{ color: project.accent }}
              >
                {project.subtitle}
              </p>
              <h1 className="max-w-[10ch] text-balance font-sans text-[44px] font-bold leading-[0.95] tracking-[-0.06em] text-white sm:text-[68px] lg:text-[88px]">
                {project.title}
              </h1>
              <p className="mt-6 max-w-[58ch] text-[18px] leading-[1.9] text-[#cad5e2] sm:text-[21px]">
                {project.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-4 py-2 text-[13px] font-medium text-white/90"
                    style={{
                      border: `1px solid ${project.accent}33`,
                      backgroundColor: `${project.accent}14`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[34px] border border-white/10 bg-[rgba(8,15,32,0.78)] p-5">
              <div className="overflow-hidden rounded-[26px] border border-white/8 bg-[#06101f]">
                <img
                  src={project.heroImage}
                  alt={project.heroImageAlt}
                  className="h-full min-h-[340px] w-full object-contain p-6 sm:min-h-[420px] sm:p-8"
                />
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {meta.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full"
                          style={{ backgroundColor: `${project.accent}14` }}
                        >
                          <Icon
                            className="h-4 w-4"
                            style={{ color: project.accent }}
                          />
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.22em] text-[#62748e]">
                            {item.label}
                          </p>
                          <p className="mt-2 text-[15px] leading-6 text-white">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <NarrativeCard
              title="The Problem"
              body={project.problem}
              accent={project.accent}
              icon={<Goal className="h-5 w-5" />}
              tone="danger"
            />
            <NarrativeCard
              title="The Solution"
              body={project.solution}
              accent={project.accent}
              icon={<Sparkles className="h-5 w-5" />}
              tone="accent"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[linear-gradient(180deg,rgba(7,17,36,0.72)_0%,rgba(2,6,24,0)_100%)] py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <CaseStudySectionHeading
            eyebrow="Core System"
            title="A system-first product built around contracts, projects, and financial clarity."
            description={project.overview}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {project.features?.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-[24px] border border-white/10 bg-[rgba(8,15,32,0.78)] p-6"
              >
                <h3 className="text-[22px] font-bold tracking-[-0.04em] text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-[15px] leading-8 text-[#90a1b9]">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {project.productFlow ? (
        <section className="py-20">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <CaseStudySectionHeading
              eyebrow="Product Flow"
              title={project.productFlow.title}
              description={project.productFlow.description}
            />
            <div className="mt-12">
              <CaseStudyGallery
                items={project.productFlow.items}
                accent={project.accent}
                mode="wireframes"
              />
            </div>
          </div>
        </section>
      ) : null}

      {project.finalShowcase.length ? (
        <section className="border-y border-white/8 bg-[linear-gradient(180deg,rgba(7,17,36,0.72)_0%,rgba(2,6,24,0)_100%)] py-20">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <CaseStudySectionHeading
              eyebrow="Dashboard & UI"
              title="A cleaner product surface focused on visibility, utility, and system behavior."
              description="Even with limited screens, the emphasis is on product structure rather than oversized mockups."
            />
            <div className="mt-12">
              <CaseStudyGallery
                items={project.finalShowcase}
                accent={project.accent}
                mode="final"
              />
            </div>
          </div>
        </section>
      ) : null}

      {project.designSystemSection ? (
        <section className="py-20">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <CaseStudySectionHeading
              eyebrow="Design System"
              title={project.designSystemSection.title}
              description={project.designSystemSection.description}
            />
            <div className="mt-12">
              <CaseStudyGallery
                items={project.designSystemSection.items}
                accent={project.accent}
                mode="wireframes"
              />
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-y border-white/8 bg-[linear-gradient(180deg,rgba(7,17,36,0.72)_0%,rgba(2,6,24,0)_100%)] py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <CaseStudySectionHeading
            eyebrow="Process"
            title="A structured product process from research to final refinement."
            description="This project is presented as a connected system case study, so the process is shown as a clean product timeline."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            {project.processTimeline?.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[24px] border border-white/10 bg-[rgba(8,15,32,0.78)] p-6"
              >
                <div
                  className="inline-flex rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em]"
                  style={{
                    color: project.accent,
                    border: `1px solid ${project.accent}33`,
                    backgroundColor: `${project.accent}14`,
                  }}
                >
                  0{index + 1}
                </div>
                <h3 className="mt-5 text-[24px] font-bold tracking-[-0.04em] text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-8 text-[#90a1b9]">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {project.techStackSection ? (
        <section className="py-20">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <CaseStudySectionHeading
              eyebrow="Tech Stack"
              title={project.techStackSection.title}
              description={project.techStackSection.description}
            />
            <div className="mt-12">
              <CaseStudyGallery
                items={project.techStackSection.items}
                accent={project.accent}
                mode="wireframes"
              />
            </div>
            {project.techStack?.length ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.techStack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-[rgba(8,15,32,0.78)] px-4 py-2 text-[13px] text-[#cad5e2]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ) : project.techStack?.length ? (
        <section className="py-20">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <CaseStudySectionHeading
              eyebrow="Tech Stack"
              title="Tools and systems that shaped the product thinking."
            />
            <div className="mt-10 flex flex-wrap gap-3">
              {project.techStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-[rgba(8,15,32,0.78)] px-4 py-2 text-[13px] text-[#cad5e2]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-y border-white/8 bg-[linear-gradient(180deg,rgba(7,17,36,0.65)_0%,rgba(2,6,24,0)_100%)] py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <CaseStudySectionHeading
            eyebrow="Outcome"
            title="A system-focused case study built around clarity, structure, and workflow intelligence."
            description={project.outcome}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-4 sm:grid-cols-3">
              {project.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[24px] border border-white/10 bg-[rgba(8,15,32,0.78)] p-6"
                >
                  <p className="text-[13px] uppercase tracking-[0.2em] text-[#62748e]">
                    {stat.label}
                  </p>
                  <p
                    className="mt-4 max-w-full text-[30px] font-bold leading-[1.05] tracking-[-0.05em] break-words sm:text-[34px]"
                    style={{ color: project.accent }}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[rgba(8,15,32,0.78)] p-8 sm:p-10">
              <div
                className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-medium uppercase tracking-[0.22em]"
                style={{
                  color: project.accent,
                  border: `1px solid ${project.accent}33`,
                  backgroundColor: `${project.accent}14`,
                }}
              >
                <Layers3 className="h-4 w-4" />
                Reflection
              </div>
              <p className="max-w-[56ch] text-[19px] leading-[1.9] text-[#cad5e2]">
                {project.takeaway}
              </p>
            </div>
          </div>
        </div>
      </section>

      {project.appUrl ? (
        <ExploreAppSection
          project={project}
          appUrl={project.appUrl}
          systemWidth
        />
      ) : null}

      <section className="py-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid gap-4 md:grid-cols-3">
            {previousProject ? (
              <FooterNavCard
                direction="Previous Project"
                project={previousProject}
                to={`/project/${previousProject.id}`}
                arrow="left"
              />
            ) : (
              <div className="rounded-[28px] border border-white/8 bg-white/[0.02]" />
            )}

            <Link
              to="/#hero"
              className="flex min-h-[170px] flex-col items-center justify-center rounded-[28px] border border-white/10 bg-[rgba(8,15,32,0.72)] px-8 py-10 text-center transition-transform hover:-translate-y-1"
            >
              <span className="text-[12px] uppercase tracking-[0.22em] text-[#62748e]">
                Back Home
              </span>
              <p className="mt-4 text-[28px] font-bold tracking-[-0.04em] text-white">
                Explore the Homepage
              </p>
            </Link>

            {nextProject ? (
              <FooterNavCard
                direction="Next Project"
                project={nextProject}
                to={`/project/${nextProject.id}`}
                arrow="right"
              />
            ) : (
              <div className="rounded-[28px] border border-white/8 bg-white/[0.02]" />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({
  title,
  accent,
  children,
}: {
  title: string;
  accent: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[rgba(8,15,32,0.75)] p-6">
      <p
        className="mb-4 text-[12px] font-medium uppercase tracking-[0.22em]"
        style={{ color: accent }}
      >
        {title}
      </p>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function ListRow({ text, accent }: { text: string; accent: string }) {
  return (
    <div className="flex items-start gap-3 rounded-[18px] bg-white/[0.02] px-4 py-4">
      <span
        className="mt-[9px] h-2 w-2 shrink-0 rounded-full"
        style={{ backgroundColor: accent }}
      />
      <p className="text-[15px] leading-7 text-[#cad5e2]">{text}</p>
    </div>
  );
}

function NarrativeCard({
  title,
  body,
  accent,
  icon,
  tone,
}: {
  title: string;
  body: string;
  accent: string;
  icon: ReactNode;
  tone: "danger" | "accent";
}) {
  const tint = tone === "danger" ? "rgba(255,79,79,0.1)" : `${accent}14`;
  const borderColor =
    tone === "danger" ? "rgba(255,79,79,0.18)" : `${accent}22`;
  const iconColor = tone === "danger" ? "#ff6b6b" : accent;

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="rounded-[30px] border p-8 sm:p-10"
      style={{ backgroundColor: tint, borderColor }}
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-full"
        style={{ backgroundColor: tone === "danger" ? "rgba(255,79,79,0.16)" : `${accent}1f` }}
      >
        <div style={{ color: iconColor }}>{icon}</div>
      </div>
      <h3 className="mt-6 text-[30px] font-bold tracking-[-0.04em] text-white">
        {title}
      </h3>
      <p className="mt-4 text-[17px] leading-[1.9] text-[#cad5e2]">{body}</p>
    </motion.article>
  );
}

function ExploreAppSection({
  project,
  appUrl,
  systemWidth = false,
}: {
  project: ProjectData;
  appUrl: string;
  systemWidth?: boolean;
}) {
  return (
    <section className="py-12 sm:py-16">
      <div
        className={`mx-auto px-6 md:px-12 ${
          systemWidth ? "max-w-[1400px]" : "max-w-[1280px]"
        }`}
      >
        <a
          href={appUrl}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col gap-6 rounded-[32px] border border-white/10 bg-[rgba(8,15,32,0.78)] p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-10 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="max-w-[52rem]">
            <p
              className="text-[12px] font-medium uppercase tracking-[0.22em]"
              style={{ color: project.accent }}
            >
              Live Product
            </p>
            <h3 className="mt-4 text-[30px] font-bold tracking-[-0.04em] text-white sm:text-[36px]">
              Explore App
            </h3>
            <p className="mt-3 text-[16px] leading-8 text-[#90a1b9] sm:text-[18px]">
              Open the live {project.title} experience and explore the actual
              product/software.
            </p>
          </div>

          <div
            className="inline-flex items-center justify-center gap-3 self-start rounded-full px-6 py-3 text-[14px] font-medium text-white transition-transform group-hover:translate-x-1 lg:self-center"
            style={{
              backgroundColor: project.accent,
              boxShadow: `0 16px 36px -18px ${project.accent}`,
            }}
          >
            Open Live App
            <ExternalLink className="h-4 w-4" />
          </div>
        </a>
      </div>
    </section>
  );
}

function FooterNavCard({
  direction,
  project,
  to,
  arrow,
}: {
  direction: string;
  project: ProjectData;
  to: string;
  arrow: "left" | "right";
}) {
  return (
    <Link
      to={to}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(8,15,32,0.72)] px-8 py-8 transition-transform hover:-translate-y-1"
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${
            arrow === "left" ? "left" : "right"
          }, ${project.accent}22, transparent 50%)`,
        }}
      />
      <div className="relative flex h-full min-h-[170px] flex-col justify-between">
        <div className="flex items-center justify-between gap-4 text-[#90a1b9]">
          <span className="text-[12px] uppercase tracking-[0.22em]">
            {direction}
          </span>
          {arrow === "left" ? (
            <ArrowLeft className="h-4 w-4" />
          ) : (
            <ArrowRight className="h-4 w-4" />
          )}
        </div>
        <div>
          <p className="text-[28px] font-bold tracking-[-0.04em] text-white">
            {project.title}
          </p>
          <p className="mt-3 text-[15px] leading-7 text-[#90a1b9]">
            {project.summary}
          </p>
        </div>
      </div>
    </Link>
  );
}
