import { createBrowserRouter } from "react-router";
import PortfolioHome from "./pages/PortfolioHome";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PortfolioHome,
  },
  {
    path: "/project/:projectId",
    Component: ProjectDetail,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);