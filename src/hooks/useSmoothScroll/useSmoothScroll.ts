import { useCallback } from "react";

interface UseSmoothScrollOptions {
  onScroll?: (section: string) => void;
  replaceHistory?: boolean;
}

export const useSmoothScroll = ({
  onScroll,
  replaceHistory = false,
}: UseSmoothScrollOptions = {}) => {
  const handleSmoothScroll = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement | HTMLElement> | Event,
      targetHref: string
    ) => {
      e.preventDefault();

      const section = targetHref.startsWith("#")
        ? targetHref.replace("#", "")
        : targetHref;

      if (replaceHistory) {
        window.history.replaceState(null, "", `#${section}`);
      }

      const target = document.getElementById(section);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        onScroll?.(section);
      }
    },
    [onScroll, replaceHistory]
  );

  return handleSmoothScroll;
};
