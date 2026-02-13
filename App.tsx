import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ApartmentDetails from './components/ApartmentDetails';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Tour360 from './components/Tour360';
import BuildingInfo from './components/BuildingInfo';
import Neighborhood from './components/Neighborhood';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  // Implement custom smooth scroll with ease-in-out effect
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      // Only handle left clicks
      if (e.button !== 0) return;

      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      // Check if it's an anchor link pointing to an ID on the same page
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;

        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const navHeight = 80; // Offset for fixed header
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
          const startPosition = window.scrollY;
          const distance = targetPosition - startPosition;
          const duration = 1500; // Slightly increased duration for the smoother easing
          let start: number | null = null;

          // Easing function: easeInOutQuint
          // Stronger "easy in / easy out" effect than Cubic
          const easeInOutQuint = (t: number) => 
            t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;

          const animation = (currentTime: number) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutQuint(progress);

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
              requestAnimationFrame(animation);
            } else {
              // Update URL hash without jumping
              // Wrapped in try-catch to prevent SecurityError in sandboxed/blob environments
              try {
                history.pushState(null, '', `#${targetId}`);
              } catch (e) {
                // Ignore history update errors in restrictive environments
                console.warn("Could not update history state:", e);
              }
            }
          };

          requestAnimationFrame(animation);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ApartmentDetails />
        <Gallery />
        <Testimonials />
        <Tour360 />
        <BuildingInfo />
        <Neighborhood />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;