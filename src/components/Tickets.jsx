import React from 'react';
import { Ticket, Crown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'General Admission',
    price: '$79',
    perks: ['Floor access', 'Merch booth', 'Public lounge'],
    color: 'from-slate-800 to-slate-900',
    accent: 'border-white/15',
  },
  {
    name: 'VIP',
    price: '$159',
    perks: ['VIP pit', 'Fast track entry', 'Exclusive bar'],
    color: 'from-violet-600 to-fuchsia-600',
    accent: 'border-fuchsia-400/40',
    icon: <Crown size={16} />,
  },
  {
    name: 'Ultra Pass',
    price: '$299',
    perks: ['Backstage tour', 'Artist meet & greet', 'Private lounge'],
    color: 'from-cyan-600 to-emerald-600',
    accent: 'border-cyan-300/40',
    icon: <Sparkles size={16} />,
  },
];

export default function Tickets() {
  return (
    <section id="tickets" className="relative bg-[#0b0b10] text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3">
          <Ticket className="text-cyan-300" size={20} />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Ticket Options</h2>
        </div>
        <p className="mt-2 text-white/70 max-w-2xl">Choose your experience level. Every tier gets you closer to the energy.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.08 }}
              className={`relative rounded-2xl border ${t.accent} bg-gradient-to-br ${t.color} p-6`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{t.name}</h3>
                <div className="text-white/70">{t.icon}</div>
              </div>
              <p className="mt-4 text-4xl font-extrabold">{t.price}</p>
              <ul className="mt-4 space-y-2 text-white/80 text-sm">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60" /> {p}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-xl bg-white/10 hover:bg-white/20 transition px-4 py-2 font-semibold backdrop-blur">
                Select
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
