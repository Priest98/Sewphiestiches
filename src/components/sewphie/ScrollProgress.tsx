import { motion, useScroll } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gold z-[150] origin-left mix-blend-screen"
      style={{ scaleX: scrollYProgress }}
    />
  );
};
