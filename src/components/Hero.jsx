import React, { useEffect, useMemo, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function useCountdown(targetDate) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [timeLeft, setTimeLeft] = useState(() => Math.max(0, target - Date.now()));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(Math.max(0, target - Date.now()));
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  const totalSeconds = Math.floor(timeLeft / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

const TimeBlock = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <div className="relative">
      <div className="absolute inset-0 blur-lg bg-fuchsia-500/40 rounded-xl" />
      <div className="relative px-5 py-3 rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-md text-white/90 font-semibold text-3xl min-w-[88px] text-center">
        {String(value).padStart(2, '0')}
      </div>
    </div>
    <span className="mt-2 text-xs uppercase tracking-wider text-white/60">{label}</span>
  </div>
);

export default function Hero() {
  const { days, hours, minutes, seconds } = useCountdown('2025-12-31T20:00:00Z');

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            <span className="text-xs tracking-wide text-white/70">Live event • New Year's Eve 2025</span>
          </div>

          <h1 className="mt-6 font-extrabold leading-tight tracking-tight text-4xl sm:text-6xl md:text-7xl bg-gradient-to-r from-fuchsia-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
            Neon Night: The Ultimate Concert Experience
          </h1>

          <p className="mt-5 max-w-xl text-white/80 text-base sm:text-lg">
            A massive, immersive show with world-class artists, holographic visuals, and a sound you can feel. Step into the future of live entertainment.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <motion.a
              href="#tickets"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-3 text-white font-semibold shadow-lg shadow-fuchsia-600/30"
            >
              Get Tickets
            </motion.a>
            <a href="#lineup" className="text-white/70 hover:text-white transition">See Lineup</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-14"
        >
          <div className="inline-flex items-center gap-6 rounded-2xl border border-white/15 bg-white/10 px-6 py-5 backdrop-blur-md">
            <TimeBlock label="Days" value={days} />
            <span className="text-2xl text-white/50">:</span>
            <TimeBlock label="Hours" value={hours} />
            <span className="text-2xl text-white/50">:</span>
            <TimeBlock label="Minutes" value={minutes} />
            <span className="text-2xl text-white/50">:</span>
            <TimeBlock label="Seconds" value={seconds} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
