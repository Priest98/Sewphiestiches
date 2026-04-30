import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, User, Scissors, GraduationCap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  options?: { label: string; action: () => void; next?: string }[];
}

export const AiConcierge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const GREETING = "Hi 👋 Welcome to Sewphie Stitches. I'm your fashion concierge. Are you looking to order a custom piece or learn the craft?";

  const KNOWLEDGE_BASE = {
    fabrics: ["Lace", "Aso Oke", "Satin", "Chiffon"],
    styles: ["Corset Gowns", "Ball Gowns", "Asoebi", "Suits"],
    academy: "Our 6-month intensive program covers everything from basic stitching to high-end couture."
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(GREETING, [
        { label: "Book Custom Fit", action: () => handleChoice("I want a custom dress", "custom_occasion") },
        { label: "Join the Academy", action: () => handleChoice("I want to learn", "academy_intro") },
        { label: "Just Browsing", action: () => handleChoice("Just browsing", "browse") }
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const addBotMessage = (text: string, options?: Message["options"]) => {
    setIsTyping(true);
    const delay = Math.max(1000, text.length * 20); // Dynamic typing speed
    
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), text, sender: "bot", options }
      ]);
      setIsTyping(false);
    }, delay);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), text, sender: "user" }
    ]);
  };

  const handleChoice = (text: string, nextStep: string) => {
    addUserMessage(text);
    
    switch (nextStep) {
      case "custom_occasion":
        addBotMessage("Exquisite choice. To better assist you, what is the occasion?", [
          { label: "Wedding / Owambe", action: () => handleChoice("It's for a wedding", "custom_style_wedding") },
          { label: "Corporate Event", action: () => handleChoice("A corporate event", "custom_style_corporate") },
          { label: "Birthday", action: () => handleChoice("My birthday", "custom_style_birthday") }
        ]);
        break;
      
      case "custom_style_wedding":
        addBotMessage("For an Owambe, a structured corset gown in Lace or Aso-Oke would give you that standout presence. Would you like to see our wedding looks or book a fitting?", [
          { label: "See Wedding Looks", action: () => { navigate("/collection"); setIsOpen(false); } },
          { label: "Book Custom Fit", action: () => window.open("https://wa.me/2349065368362?text=I'd like to book a custom fit for a wedding") }
        ]);
        break;

      case "custom_style_corporate":
        addBotMessage("For professional elegance, a bespoke suit or a structured midi dress is ideal. Shall we explore the collection?", [
          { label: "View Corporate Suit", action: () => { navigate("/collection"); setIsOpen(false); } },
          { label: "Book Consultation", action: () => window.open("https://wa.me/2349065368362?text=I'd like to book a corporate suit consultation") }
        ]);
        break;

      case "custom_style_birthday":
        addBotMessage("Birthdays deserve drama! A ball gown or a sleek reception-style dress would be perfect. We have limited slots this week—ready to book?", [
          { label: "View Birthday Outfits", action: () => { navigate("/collection"); setIsOpen(false); } },
          { label: "Book Fitting", action: () => window.open("https://wa.me/2349065368362?text=I'd like to book a birthday outfit fitting") }
        ]);
        break;

      case "academy_intro":
        addBotMessage("Excellence is trained here. Our Academy founder was 1st in her class, and we bring that same precision to you. Would you like the curriculum details?", [
          { label: "Explore Academy", action: () => { navigate("/academy"); setIsOpen(false); } },
          { label: "Enroll Now", action: () => { navigate("/academy"); setIsOpen(false); } }
        ]);
        break;

      case "browse":
        addBotMessage("Of course. Our Lookbook showcases our latest 'Proven Excellence'. Or you can browse by category.", [
          { label: "View Lookbook", action: () => { navigate("/lookbook"); setIsOpen(false); } },
          { label: "View Collections", action: () => { navigate("/collection"); setIsOpen(false); } }
        ]);
        break;

      default:
        addBotMessage("I'm here to help. Would you like to chat with a human consultant on WhatsApp?", [
          { label: "WhatsApp Chat", action: () => window.open("https://wa.me/2349065368362") }
        ]);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[10001] w-16 h-16 rounded-full bg-bottle-deep border border-gold/30 shadow-luxury flex items-center justify-center text-gold group overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="relative"
            >
              <MessageCircle className="w-6 h-6" />
              <div className="absolute inset-0 bg-gold/20 rounded-full animate-ping" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gold/0 via-gold/10 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 z-[10001] w-[calc(100vw-3rem)] md:w-[400px] h-[600px] max-h-[calc(100vh-8rem)] bg-bottle-deep/95 backdrop-blur-xl border border-gold/10 shadow-2xl rounded-[2rem] overflow-hidden flex flex-col items-center justify-center p-0"
          >
            {/* Header */}
            <div className="w-full p-6 border-b border-gold/10 bg-bottle-deep flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-white">Sewphie Concierge</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[0.6rem] text-white/40 uppercase tracking-widest font-medium">Online & Ready</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 w-full p-6 overflow-y-auto space-y-6 scrollbar-none"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] group`}>
                    <div 
                      className={`p-4 rounded-2xl text-sm leading-relaxed ${
                        msg.sender === "user" 
                          ? "bg-gold text-bottle-deep rounded-tr-none" 
                          : "bg-white/5 text-cream/90 border border-white/5 rounded-tl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                    
                    {/* Bot Options */}
                    {msg.sender === "bot" && msg.options && (
                      <div className="mt-4 space-y-2">
                        {msg.options.map((opt, i) => (
                          <motion.button
                            key={i}
                            onClick={opt.action}
                            className="w-full text-left p-3 rounded-xl border border-gold/20 bg-gold/5 text-gold text-xs hover:bg-gold hover:text-bottle-deep transition-all duration-300 flex items-center justify-between group/opt"
                            whileHover={{ x: 4 }}
                          >
                            <span>{opt.label}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover/opt:opacity-100 transition-all" />
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none flex gap-1">
                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-gold/50 rounded-full" />
                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-gold/50 rounded-full" />
                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-gold/50 rounded-full" />
                  </div>
                </div>
              )}
            </div>

            {/* Footer / Disclaimer */}
            <div className="w-full p-4 text-center border-t border-gold/5">
              <p className="text-[0.6rem] text-white/20 uppercase tracking-widest">
                Professional Fashion Consultant AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
