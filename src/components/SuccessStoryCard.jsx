"use client";
import React from "react";
import ArrowIcon from "./ArrowIcon";

function SuccessStoryCard({ logo, logoAlt, statistic, subtitle, description }) {
  return (
    <article className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
      <div className="flex flex-col gap-8 items-center">
        {typeof logo === "string" ? (
          <img
            src={logo}
            alt={logoAlt || "Company logo"}
            className="object-contain h-8"
          />
        ) : (
          logo
        )}

        <div className="flex flex-col gap-4 items-center w-full">
          <p
            className="text-6xl font-bold tracking-tight text-center leading-[80px] max-sm:text-5xl max-sm:leading-[60px]"
            style={{
              background: "linear-gradient(95deg, #766AEA 0%, #3F94F3 50%, #43B1F8 85.5%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {statistic}
          </p>
          <h3 className="text-xl font-bold tracking-normal text-center text-black max-sm:text-lg">
            {subtitle}
          </h3>
        </div>

        <p className="text-base tracking-normal leading-7 text-center text-neutral-800 max-sm:text-sm">
          {description}
        </p>

        <a
          href="#"
          className="flex gap-2.5 justify-center items-center p-3 rounded-lg cursor-pointer h-[54px]"
        >
          <span className="text-sm tracking-normal leading-6 text-center text-sky-500">
            Read The Success Story
          </span>
          <ArrowIcon />
        </a>
      </div>
    </article>
  );
}

export default SuccessStoryCard;