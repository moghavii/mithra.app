"use client";
import * as React from "react";

/**
 * AboutText component displays information about Mithra-AI's history and focus areas
 * in a centered, responsive text block
 */
function AboutText() {
  return (
    <section className="flex justify-center items-center w-full min-h-[352px] bg-gradient-to-r from-[#41A8F6] to-[#6A7BEC]">
      <p className="px-5 py-0 w-full text-2xl leading-normal text-center text-white max-w-[1200px] max-md:px-10 max-md:py-0 max-md:text-xl max-sm:px-5 max-sm:py-0 max-sm:text-base">
        Started in 2020, just as COVID hit us, we have been busy since by
        redefining how the Plan-to-Strategy process can be rewired. We have
        exceptional talent and are experienced in procurement &amp; supply
        chain, software development, product development, and AI/ML; and it's
        only by combining all this talent that we are able to drive Mithra-AI.
      </p>
    </section>
  );
}

export default AboutText;