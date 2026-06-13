import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Volume2, VolumeX, MousePointer2 } from 'lucide-react';

const SCENES = [
  {
    id: 1,
    title: "The Glance",
    sub: "a love told without words",
    credit: "CHAPTER I",
    img: "/images/scene1.jpg" // Public folder se path
  },
  {
    id: 2,
    title: "The Blush",
    sub: "and I'm yours",
    credit: "CHAPTER II",
    img: "/images/scene2.jpg"
  },
  {
    id: 3,
    title: "The Wait",
    sub: "hoping for a sign",
    credit: "CHAPTER III",
    img: "/images/scene3.jpg"
  },
  {
    id: 4,
    title: "Silence",
    sub: "I'll read it all",
    credit: "FINALE",
    img: "/images/scene4.jpg"
  }
];

export default function App() {
  const [muted, setMuted] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="relative h-screen w-full select-none">
      
      {/* 1. Grain Overlay (Cinematic Feel) */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-[-200%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-grain" />
      </div>

      {/* 2. Top Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-white z-[60] origin-left" style={{ scaleX }} />

      {/* 3. Audio Control */}
      <button 
        onClick={() => setMuted(!muted)}
        className="fixed top-8 right-8 z-[60] p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all"
      >
        {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {/* 4. Main Snap Container */}
      <div className="snap-container hide-scrollbar">
        {SCENES.map((scene, index) => (
          <section key={index} className="relative h-screen w-full snap-start overflow-hidden flex items-center justify-center">
            
            {/* Nature Image with Ken Burns */}
            <div 
              className="absolute inset-0 bg-cover bg-center animate-kenburns"
              style={{ backgroundImage: `url(${scene.img})` }}
            />
            
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

            {/* Awesome Text Shadows & Fonts */}
            <div className="relative z-10 text-center px-4 max-w-5xl">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-xs md:text-sm tracking-[0.8em] uppercase font-light text-white/70 mb-4"
              >
                {scene.credit}
              </motion.p>

              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="text-7xl md:text-[11rem] font-serif font-black text-white cinematic-text-shadow leading-none"
              >
                {scene.title}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-8 text-xl md:text-3xl font-light italic tracking-[0.2em] text-white/90 drop-shadow-lg"
              >
                {scene.sub}
              </motion.p>
            </div>

            {/* Bottom Border Decorative Line */}
            <div className="absolute bottom-12 w-32 h-[1px] bg-white/30" />
          </section>
        ))}
      </div>

    </div>
  );
}
