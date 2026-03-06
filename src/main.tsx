import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ChatScreen } from "./modules/features/chat/pages/chat";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChatScreen />
  </StrictMode>,
);
