"use client";
import React from "react";

function AboutSection() {
  return (
    <section className="flex flex-col gap-8 items-center max-w-screen-xl mx-auto px-6 py-16">
      <h2 className="text-7xl font-medium tracking-tighter text-center leading-[1.1] text-slate-900 max-md:text-5xl max-sm:text-4xl">
        About Mithra
      </h2>
      <p className="text-lg tracking-tight leading-8 text-center text-slate-700 max-w-prose mx-auto max-md:text-base max-sm:text-sm">
        We help procurement teams source more &quot;responsible&quot;
      </p>
      <button
        className="px-4 py-2.5 text-sm font-medium leading-6 text-center border duration-200 border-slate-300 rounded-full text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
        aria-label="Read Our Story"
      >
        Read Our Story
      </button>
    </section>
  );
}

export default AboutSection;