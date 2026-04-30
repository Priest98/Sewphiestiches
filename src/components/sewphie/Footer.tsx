import { Logo } from "./Logo";
import logoDark from "@/assets/logo-dark.png";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-bottle text-cream/80 relative overflow-hidden">
      <div className="container py-20 relative z-10">
        {/* Top: brand statement */}
        <div className="flex flex-col items-start mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-gold/80 font-light mb-2">
            Crafting Timeless Elegance
          </p>
          <p className="mt-4 text-sm font-light leading-relaxed max-w-xs text-cream/50">
            A Kwara State-born house of couture dressing women of presence — bespoke, ready-to-wear,
            and the Sewphie Academy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-cream/10 pt-12">
          <div>
            <Logo size="sm" variant="light" />
            <p className="mt-8 text-cream/40 text-[0.65rem] uppercase tracking-luxury max-w-[200px]">
              Crafting Timeless Presence. Est. Kwara State.
            </p>
          </div>

          <div>
            <p className="text-[0.65rem] uppercase tracking-luxury text-gold mb-5">Visit</p>
            <address className="not-italic text-sm font-light leading-relaxed text-cream/70">
              Sewphie Stitches<br />
              Balogun Fulani junction Emirs road ilorin<br />
              <span className="text-xs opacity-60">By appointment only</span>
            </address>
            <p className="mt-4 text-sm">
              <a href="mailto:info@sewphiestitches.com" className="hover:text-gold transition-colors">
                info@sewphiestitches.com
              </a>
            </p>
          </div>

          <div>
            <p className="text-[0.65rem] uppercase tracking-luxury text-gold mb-5">Follow</p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/sewphiestitches" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 border border-cream/20 flex items-center justify-center btn-pill hover:border-gold hover:text-gold transition-all">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 border border-cream/20 flex items-center justify-center btn-pill hover:border-gold hover:text-gold transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="mailto:info@sewphiestitches.com" aria-label="Email" className="w-10 h-10 border border-cream/20 flex items-center justify-center btn-pill hover:border-gold hover:text-gold transition-all">
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-6 text-xs text-cream/50">@sewphiestitches · @sewphie_stitches</p>
          </div>
        </div>

        <div className="gold-divider my-12 opacity-30" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} Sewphie Stitches. All rights reserved.</p>
          <p className="tracking-luxury uppercase">Hand-finished in Kwara State</p>
        </div>
      </div>
    </footer>
  );
};
