import { Link, useEffect } from "react";
import { useParams } from "react-router";
import { UniqueNavBar } from "../components/UniqueNavBar";
import CaseStudyTemplate from "../components/case-study/CaseStudyTemplate";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const projectIndex = projects.findIndex((item) => item.id === projectId);
  const project = projectIndex >= 0 ? projects[projectIndex] : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [projectId]);

  if (!project) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-[#020618]">
        <div className="text-center">
          <p className="mb-4 text-2xl text-white">Project not found</p>
          <Link to="/" className="text-[#0caeff] hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : undefined;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : undefined;

  return (
    <>
      <UniqueNavBar />
      <CaseStudyTemplate
        project={project}
        previousProject={previousProject}
        nextProject={nextProject}
      />
    </>
  );
}
