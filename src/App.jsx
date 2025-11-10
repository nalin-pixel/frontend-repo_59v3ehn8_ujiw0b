import React from 'react';
import Hero from './components/Hero';
import Lineup from './components/Lineup';
import Tickets from './components/Tickets';
import PostsSponsors from './components/PostsSponsors';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black font-['Inter','Manrope',system-ui,sans-serif]">
      <Hero />
      <Lineup />
      <Tickets />
      <PostsSponsors />
      <Footer />
    </div>
  );
}
