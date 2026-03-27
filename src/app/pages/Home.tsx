import { Link } from "react-router";
import { motion } from "motion/react";
import DesignerPortfolioWebsite from "../../imports/DesignerPortfolioWebsite";
import { projects } from "../data/projects";

const CANVAS_WIDTH = 1143;
const CANVAS_HEIGHT = 6067;

export default function Home() {
  return (
    <main
      id="home"
      className="w-full overflow-x-hidden bg-[#020618]"
    >
      <div
        className="relative mx-auto"
        style={{
          width: `${CANVAS_WIDTH}px`,
          height: `${CANVAS_HEIGHT}px`,
        }}
      >
        <DesignerPortfolioWebsite />
        <ProjectCardsOverlay />
      </div>
    </main>
  );
}

function ProjectCardsOverlay() {
  const guardianProject = projects.find((p) => p.id === "guardian");

  return (
    <>
      {guardianProject && (
        <Link
          to={`/project/${guardianProject.id}`}
          className="absolute left-[698px] top-[1126px] z-10 h-[444px] w-[429px] cursor-pointer group"
          style={{ pointerEvents: "auto" }}
        >
          <motion.div
            className="absolute inset-0 bg-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 rounded-[24px] bg-[rgba(12,174,255,0.1)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Link>
      )}

      <Link
        to="/project/guardian"
        className="absolute left-[48px] top-[1502px] z-10 h-[600px] w-[687px] cursor-pointer group"
        style={{ pointerEvents: "auto" }}
      >
        <motion.div
          className="absolute inset-0 bg-transparent"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 rounded-[24px] bg-[rgba(12,174,255,0.1)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>

      <Link
        to="/project/streetsight"
        className="absolute left-[767px] top-[1582px] z-10 h-[520px] w-[328px] cursor-pointer group"
        style={{ pointerEvents: "auto" }}
      >
        <motion.div
          className="absolute inset-0 bg-transparent"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 rounded-[24px] bg-[rgba(12,174,255,0.1)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>

      <Link
        to="/project/devalokha"
        className="absolute left-[48px] top-[2150px] z-10 h-[450px] w-[507px] cursor-pointer group"
        style={{ pointerEvents: "auto" }}
      >
        <motion.div
          className="absolute inset-0 bg-transparent"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 rounded-[24px] bg-[rgba(12,174,255,0.1)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>

      <Link
        to="/project/clario"
        className="absolute left-[587px] top-[2150px] z-10 h-[450px] w-[507px] cursor-pointer group"
        style={{ pointerEvents: "auto" }}
      >
        <motion.div
          className="absolute inset-0 bg-transparent"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 rounded-[24px] bg-[rgba(12,174,255,0.1)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>
    </>
  );
}