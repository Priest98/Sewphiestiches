import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
      
      const target = e.target as HTMLElement;
      // Provide custom text if available, otherwise just expand
      const interactable = target.closest("a, button, [data-cursor]");
      
      if (interactable) {
        setIsHovering(true);
        const text = interactable.getAttribute("data-cursor");
        if (text) {
          setCursorText(text);
        } else if (interactable.tagName.toLowerCase() === "a") {
          setCursorText("");
        } else {
          setCursorText("");
        }
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    const hideCursor = () => setIsHidden(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);

    // Add global cursor hide class to body when this mounts, only on md+
    document.body.classList.add("md:cursor-none");

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
      document.body.classList.remove("md:cursor-none");
    };
  }, []);

  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[100] pointer-events-none flex items-center justify-center rounded-full bg-gold/90 mix-blend-screen text-bottle-deep"
      animate={{
        x: mousePosition.x - (isHovering ? (cursorText ? 36 : 24) : 8),
        y: mousePosition.y - (isHovering ? (cursorText ? 36 : 24) : 8),
        width: isHovering ? (cursorText ? 72 : 48) : 16,
        height: isHovering ? (cursorText ? 72 : 48) : 16,
        opacity: isHidden ? 0 : 1
      }}
      transition={{ type: "spring", stiffness: 350, damping: 28, mass: 0.5 }}
    >
      {isHovering && cursorText && (
        <span className="text-[0.55rem] uppercase tracking-widest font-medium opacity-100 mix-blend-normal">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
};
