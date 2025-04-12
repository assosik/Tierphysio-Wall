import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ScrollAnimationProvider } from './components/ScrollAnimationProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScrollAnimationProvider>
      <App />
    </ScrollAnimationProvider>
  </StrictMode>
);