import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopView = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Timeout isliye taaki page render hone ke baad scroll reset ho
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // 'smooth' ke bajaye 'instant' use karein taaki jhatka na lage
      });
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTopView;