import React from 'react';
import { Newspaper, BadgeDollarSign, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Stage design reveal: holographic city',
    excerpt: 'A multi-layered projection system brings a futuristic skyline to life.',
  },
  {
    title: 'Food & drink partners announced',
    excerpt: 'Curated vendors offering plant-based menus and craft mocktails.',
  },
  {
    title: 'Transit & entry guide',
    excerpt: 'All you need to know for a smooth arrival and fast check-in.',
  },
];

const sponsors = [
  'Alpha Audio',
  'Pulse Energy',
  'Orbit Wear',
  'HoloBeam',
  'Nova Media',
  'Vibe Labs',
];

const mediaPartners = [
  'BeatWire',
  'SoundGrid',
  'NightFM',
  'Echo TV',
];

export default function PostsSponsors() {
  return (
    <section className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex items-center gap-3">
              <Newspaper className="text-violet-300" size={20} />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Latest Posts</h2>
            </div>
            <div className="mt-6 space-y-4">
              {posts.map((p, idx) => (
                <motion.a
                  key={p.title}
                  href="#"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.07 }}
                  className="block rounded-xl border border-white/10 bg-white/[0.06] p-5 hover:bg-white/[0.1] transition"
                >
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{p.excerpt}</p>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3">
                <BadgeDollarSign className="text-emerald-300" size={20} />
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Sponsors</h2>
              </div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {sponsors.map((s) => (
                  <div key={s} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-white/80">
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <ImageIcon className="text-cyan-300" size={20} />
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Media Partners</h2>
              </div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {mediaPartners.map((m) => (
                  <div key={m} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-white/80">
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
