import React from 'react';
import { Star, Mic2, Music2 } from 'lucide-react';
import { motion } from 'framer-motion';

const guests = [
  {
    name: 'Aurora X',
    role: 'Headliner',
    tag: 'Electronic • Synthwave',
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    name: 'Neon Drift',
    role: 'Special Guest',
    tag: 'Future Bass',
    color: 'from-cyan-500 to-sky-500',
  },
  {
    name: 'Echo Nova',
    role: 'Live Set',
    tag: 'Techno • Ambient',
    color: 'from-violet-500 to-indigo-500',
  },
  {
    name: 'Stellar & Co.',
    role: 'Guest Band',
    tag: 'Alt Rock',
    color: 'from-emerald-500 to-teal-500',
  },
];

export default function Lineup() {
  return (
    <section id="lineup" className="relative bg-gradient-to-b from-black via-black to-[#0b0b10] text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3">
          <Star className="text-fuchsia-400" size={20} />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Guest Star Lineup</h2>
        </div>
        <p className="mt-2 text-white/70 max-w-2xl">A curated selection of boundary-pushing performers lighting up the night with immersive sound and visuals.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guests.map((g, idx) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.06 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${g.color} opacity-20`} />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                    <Mic2 size={14} /> {g.role}
                  </div>
                  <Music2 className="text-white/40" size={18} />
                </div>
                <h3 className="mt-5 text-xl font-bold">{g.name}</h3>
                <p className="text-white/70 text-sm mt-1">{g.tag}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
