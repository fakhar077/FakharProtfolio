import * as React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
// Fix: Import Transition type to provide explicit typing for the transition object.
import { AnimatePresence, motion, Transition } from 'framer-motion';
import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};

// Fix: Add explicit Transition type to prevent TypeScript from inferring 'type' as a generic string.
const pageTransition: Transition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

const AnimatedRoutes: React.FC = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<PageWrapper key={location.pathname}><Home /></PageWrapper>} />
        <Route path="/work-experience" element={<PageWrapper key={location.pathname}><About /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper key={location.pathname}><Projects /></PageWrapper>} />
        <Route path="/resume" element={<PageWrapper key={location.pathname}><Resume /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper key={location.pathname}><Contact /></PageWrapper>} />
      </Routes>
        </AnimatePresence>
    );
};

interface PageWrapperProps {
    children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => (
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
    >
        {children}
    </motion.div>
);


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen font-sans bg-gray-50 dark:bg-dark">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;