import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Pc } from "./screens/Pc";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LanguageProvider>
      <div className="min-w-0 overflow-x-hidden">
        <Pc />
      </div>
    </LanguageProvider>
  </StrictMode>,
);
