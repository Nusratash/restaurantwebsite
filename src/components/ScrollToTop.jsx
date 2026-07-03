import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    const scrollToTop = () => {
      // Use requestAnimationFrame for smooth scrolling
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant", // Use instant to avoid smooth scroll delay
        });
      });
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(scrollToTop, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
