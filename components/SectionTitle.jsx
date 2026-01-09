import React from "react";

export default function SectionTitle({ text1, text2, text3 }) {
  return (
    <div className="text-center mb-16 px-4">
      {/* CAPSULE STYLE:
        - Exact gradient from 'How We Work'
        - White text
        - Purple glow shadow
      */}
      <div className="inline-block px-6 py-2 rounded-full mb-6
          bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600
          shadow-md shadow-purple-600/30">
        <span className="text-xs md:text-sm font-semibold tracking-wide text-white uppercase">
          {text1}
        </span>
      </div>

      {/* Main Heading - Updated to match 'How We Work' font size (4xl/5xl) */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
        {text2}
      </h2>

      {/* Subtext */}
      <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
        {text3}
      </p>
    </div>
  );
}