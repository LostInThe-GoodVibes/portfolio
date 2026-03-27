import { RouterProvider } from "react-router";
import AssetCursorStyles from "./components/AssetCursorStyles";
import GlobalCursorGlow from "./components/GlobalCursorGlow";
import { router } from "./routes";

export default function App() {
  return (
    <>
      <AssetCursorStyles />
      <GlobalCursorGlow />
      <RouterProvider router={router} />
    </>
  );
}
