"use client";
import * as React from "react";

/**
 * AboutText component displays information about Mithra-AI's history and focus areas
 * in a centered, responsive text block
 */
function AboutText() {
  return (
    <section className="flex justify-center items-center w-full min-h-[352px] bg-gradient-to-r from-[#41A8F6] to-[#6A7BEC] px-[110px]">
  <p className="mt-4 text-lg tracking-tight text-white text-center">
    Started in 2020, just as COVID hit us, we have been busy since by
    redefining how the Plan-to-Strategy process can be rewired. We have
    exceptional talent and are experienced in procurement &amp; supply
    chain, software development, product development, and AI/ML; and it&apos;s
    only by combining all this talent that we are able to drive Mithra-AI.
  </p>
</section>
  );
}

export default AboutText;