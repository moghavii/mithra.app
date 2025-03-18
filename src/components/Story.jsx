"use client";
import * as React from "react";

function Story() {
  return (
    <section
      className="flex overflow-hidden relative flex-col px-20 py-32 text-lg tracking-tight leading-8 text-center text-white min-h-[352px] max-md:px-5 max-md:py-24 max-md:max-w-full max-sm:max-w-[387px]"
      aria-label="Story section"
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/464c1791c5014f66b5ac8a39076fa203/4645e92ffb0c1067dc6544fe86f12a86470af02b97db5ef1df9479e2400f8b1e?placeholderIfAbsent=true"
        alt="Story background"
        className="object-cover absolute inset-0 size-full"
        aria-hidden="true"
      />
      <br />
      <br />
    </section>
  );
}

export default Story;
