import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './components/shared/header/Header';
import MainContent from './components/main-component/Main';
import Footer from './components/shared/footer/Footer';

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <Header />
    <MainContent />
    <Footer />
  </StrictMode>
);
