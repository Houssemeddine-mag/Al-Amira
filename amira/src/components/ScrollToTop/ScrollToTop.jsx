import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top immediately when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use instant instead of smooth
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
