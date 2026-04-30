import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
}: Props) => {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = tone === "light" ? "text-cream" : "text-bottle";
  const descColor = tone === "light" ? "text-cream/70" : "text-muted-foreground";

  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <p className={`text-[0.7rem] uppercase tracking-luxury mb-5 flex items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        } ${tone === "light" ? "text-gold" : "text-gold-deep"}`}>
          <span className="h-px w-8 gold-line" />
          {eyebrow}
          <span className="h-px w-8 gold-line" />
        </p>
      )}
      <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-6 text-base md:text-lg leading-relaxed font-light ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
};
