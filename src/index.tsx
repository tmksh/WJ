import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Pc } from "./screens/Pc";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Pc />
  </StrictMode>,
);
