import React from 'react';
import { motion } from 'framer-motion';

const SCENES = [
  { title: "The Glance", sub: "a love told without words", credit: "CHAPTER I", img: "/images/scene1.jpg" },
  { title: "The Blush", sub: "and I'm yours", credit: "CHAPTER II", img: "/images/scene2.jpg" },
  { title: "The Wait", sub: "hoping for a sign", credit: "CHAPTER III", img: "/images/scene3.jpg" },
  { title: "Silence", sub: "I'll read it all", credit: "FINALE", img: "/images/scene4.jpg" }
];

export default function App() {
  return (
    <div className="h-screen w-full bg-black overflow-y-scroll snap-y snap-mandatory hide-scrollbar">
      {SCENES.map((scene, index) => (
        <section key={index} className="relative h-screen w-full snap-start flex items-center justify-center overflow-hidden">
          
          {/* Background Layer: Cinematic Zoom Effect */}
          <motion.div 
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${scene.img})` }}
          />
          
          {/* Nature Cinematic Overlays */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />

          {/* Awesome Text with Heavy Shadows */}
          <div className="relative z-10 text-center px-4">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[10px] md:text-xs tracking-[1em] uppercase font-light text-white/60 mb-4 drop-shadow-md"
            >
              {scene.credit}
            </motion.p>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="text-6xl md:text-[11rem] font-serif font-black text-white leading-none custom-text-glow"
            >
              {scene.title}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-lg md:text-3xl font-light italic text-white/90 tracking-[0.2em] drop-shadow-2xl"
            >
              {scene.sub}
            </motion.p>
          </div>

          {/* Side Frame Decor */}
          <div className="absolute inset-10 border border-white/10 pointer-events-none hidden md:block" />
        </section>
      ))}

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Poppins:wght@200;400&display=swap');
        
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Poppins', sans-serif; }

        .custom-text-glow {
          text-shadow: 0 10px 40px rgba(0,0,0,1), 
                       0 20px 80px rgba(0,0,0,0.8),
                       0 0 120px rgba(0,0,0,0.4);
        }

        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
