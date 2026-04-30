import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ variant = "dark", className = "", size = "md" }: LogoProps) => {
  const color = variant === "light" ? "text-cream" : "text-bottle";
  const textSize = size === "sm" ? "text-xl md:text-2xl" : size === "lg" ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl";

  return (
    <Link
      to="/"
      aria-label="Sewphie Stitches — Go to homepage"
      className={`inline-flex flex-col items-center leading-none ${color} transition-all duration-500 hover:brightness-110 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] ${className}`}
    >
      <span className={`font-display ${textSize} tracking-tight`}>Sewphie</span>
      <span className="gold-line h-px w-full my-1 opacity-80" />
      <span className="font-sans text-[0.55rem] tracking-wider-luxury uppercase">Stitches</span>
    </Link>
  );
};
