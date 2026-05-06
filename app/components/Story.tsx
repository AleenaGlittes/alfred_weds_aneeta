import React from 'react';

export default function Story() {
  return (
    <section className="py-32 px-8 bg-primary text-center" id="story">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-accent uppercase tracking-[0.3em] mb-4 font-light">How it all began</p>
        <h2 className="text-4xl md:text-5xl text-text font-heading font-thin tracking-[0.15em] uppercase mb-16">
          Our Story
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-16 items-center text-left mt-12">
          <div className="w-full lg:w-1/2 h-[500px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=1000" 
              alt="Couple holding hands" 
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12">
            <p className="text-lg leading-loose text-text-light font-light text-justify">
              By God's grace, our paths crossed in a beautiful way. We met through mutual friends and instantly bonded over our shared faith, values, and dreams for the future. Over the years, our friendship blossomed into a deep, enduring love. We are so excited to begin this new chapter of our lives together as husband and wife, surrounded by our beloved family and friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
