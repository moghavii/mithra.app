"use client";

import React from "react";

const TeamMemberCard = ({ image, name, title, description, linkedinIcon }) => {
  return (
    <article className="flex flex-col gap-6 justify-center items-center p-8 rounded-3xl border border-solid border-zinc-300 flex-[1_0_0] max-md:w-full max-sm:p-6">
      <img
        src={image}
        alt={`${name} profile picture`}
        className="object-cover w-32 h-32 rounded-2xl max-sm:w-24 max-sm:h-24"
      />
      <div className="flex flex-col gap-4 justify-center items-center self-stretch">
        <h3 className="gap-2.5 self-stretch text-xl font-bold leading-8 text-center text-black flex-[1_0_0] max-sm:text-lg max-sm:leading-7">
          {name}
        </h3>
        <span className="p-1 text-sm font-semibold leading-6 text-center text-white bg-blue-600 rounded-[100px]">
          {title}
        </span>
        <p className="self-stretch text-base leading-7 text-center text-slate-700 max-sm:text-sm max-sm:leading-6">
          {description}
        </p>
      </div>
      <a href="#" aria-label={`${name}'s LinkedIn profile`}>
        <img src={linkedinIcon} alt="LinkedIn" className="h-[30px] w-[30px]" />
      </a>
    </article>
  );
};

export default TeamMemberCard;
