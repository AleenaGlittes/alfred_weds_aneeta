"use client";

import React, { useState } from 'react';

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section 
      className="py-32 px-8 bg-cover bg-center bg-fixed text-center relative" 
      style={{ backgroundImage: "linear-gradient(rgba(253, 251, 247, 0.95), rgba(253, 251, 247, 0.95)), url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2000')" }}
      id="rsvp"
    >
      <div className="max-w-2xl mx-auto relative z-10">
        <p className="text-sm text-accent uppercase tracking-[0.3em] mb-4 font-light">Join us</p>
        <h2 className="text-4xl md:text-5xl text-text font-heading font-thin tracking-[0.15em] uppercase mb-12">
          RSVP
        </h2>
        <p className="text-sm text-text-light mb-16 tracking-widest uppercase">Kindly respond by November 1st, 2026</p>

        {submitted ? (
          <div className="py-12 border border-accent/30 bg-primary/50">
            <h3 className="text-xl font-heading font-thin tracking-widest text-accent mb-4 uppercase">Thank You</h3>
            <p className="text-sm font-light tracking-wider text-text">We look forward to celebrating with you.</p>
          </div>
        ) : (
          <form className="flex flex-col gap-8 text-left bg-primary/80 p-8 md:p-16 border border-gray-200/50" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="font-heading text-xs uppercase tracking-widest text-text">Full Name(s)</label>
              <input type="text" id="name" className="w-full p-4 border-b border-gray-300 bg-transparent font-body text-sm font-light focus:outline-none focus:border-accent transition-colors" required placeholder="John & Jane Doe" />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="attendance" className="font-heading text-xs uppercase tracking-widest text-text">Will you attend?</label>
              <select id="attendance" className="w-full p-4 border-b border-gray-300 bg-transparent font-body text-sm font-light focus:outline-none focus:border-accent transition-colors appearance-none" required>
                <option value="">Please Select...</option>
                <option value="yes">Joyfully accept</option>
                <option value="no">Regretfully decline</option>
              </select>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="guests" className="font-heading text-xs uppercase tracking-widest text-text">Number of Guests</label>
              <select id="guests" className="w-full p-4 border-b border-gray-300 bg-transparent font-body text-sm font-light focus:outline-none focus:border-accent transition-colors appearance-none">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="dietary" className="font-heading text-xs uppercase tracking-widest text-text">Dietary Requirements</label>
              <textarea id="dietary" className="w-full p-4 border-b border-gray-300 bg-transparent font-body text-sm font-light focus:outline-none focus:border-accent transition-colors" rows={2} placeholder="E.g., Vegetarian, Gluten-free"></textarea>
            </div>

            <button type="submit" className="bg-text hover:bg-accent text-primary py-5 px-8 mt-8 font-body text-xs uppercase tracking-[0.3em] transition-colors duration-500 w-full md:w-auto self-center">
              Confirm Attendance
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
