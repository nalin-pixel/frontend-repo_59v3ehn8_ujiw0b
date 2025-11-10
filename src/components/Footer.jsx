import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-500" />
            <span className="font-semibold tracking-wide">Neon Night</span>
          </div>
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Neon Night. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <a className="hover:text-white" href="#tickets">Tickets</a>
            <a className="hover:text-white" href="#lineup">Lineup</a>
            <a className="hover:text-white" href="#">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
