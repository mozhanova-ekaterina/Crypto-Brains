import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { Router } from "@app/providers/AppRouter";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  // </StrictMode>
);

// app/ → глобальная конфигурация приложения, провайдеры, роутер, лейауты.

// pages/ → страницы.

// widgets/ → переиспользуемые UI-блоки.

// shared/ → утилиты, типы, стили, маленькие UI-компоненты (например, кнопки).
