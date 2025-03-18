"use client";

import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/32418782e46523199eab487277e04b95b523e43a",
      name: "Arash Saberi",
      title: "Co-Founder & CEO",
      description:
        "Passionate about SaaS product development for procurement. another thing to say about.",
      linkedinIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7d08bac6ef53363e193dd241bc23e84e41086db0",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0a619219d5f33c9b6895c4fc25ecfb0868712ec5",
      name: "Dennis van den Brand",
      title: "Chief Technology Officer",
      description:
        "Experienced Software Engineer working in the automotive industry with a profound background.",
      linkedinIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7d08bac6ef53363e193dd241bc23e84e41086db0",
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9a185cc154e98e7898e518ef43d8e47a3a7397a1",
      name: "Rasa Raoufi",
      title: "Co-Founder",
      description:
        "Passionate to orchestrate processes, people and technology for scalable outcomes.",
      linkedinIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7d08bac6ef53363e193dd241bc23e84e41086db0",
    },
    {
      id: 4,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c147368bf1470e9002aaae723a8d2e9c9e50e887",
      name: "Farbod Saraf",
      title: "Product Lead",
      description:
        "Product leader with a background in software engineering. Currently platformizing the future.",
      linkedinIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7d08bac6ef53363e193dd241bc23e84e41086db0",
    },
  ];

  return (
    <section className="flex flex-col gap-20 items-center px-8 py-32 max-sm:px-4 max-sm:py-16">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Lexend:wght@400&display=swap"
        rel="stylesheet"
      />
      <h2 className="gap-4 py-0 pr-8 pl-8 max-w-screen-sm text-4xl tracking-tighter text-center leading-[56px] text-slate-900 w-[640px] max-md:px-5 max-md:py-0 max-md:w-full max-sm:text-3xl max-sm:leading-10">
        Our Amazing People
      </h2>
      <div className="flex gap-8 justify-center items-start w-[1216px] max-md:flex-col max-md:w-full max-md:max-w-[600px]">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.id}
            image={member.image}
            name={member.name}
            title={member.title}
            description={member.description}
            linkedinIcon={member.linkedinIcon}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
