import { useEffect, useState } from "react";

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const value = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setProgress(value);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
};

export default useScrollProgress;
