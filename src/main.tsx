import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./i18n";
import NotFound from './sections/NotFound.tsx'
import '@fontsource/cairo/400.css';
import '@fontsource/cairo/600.css';
import '@fontsource/cairo/700.css';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/700.css';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
         <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
