"use client";
import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqItems = [
    {
      question: "How fast can we get insights using Mithra-AI?",
      answer:
        "The day of activation, you can already upload your spend spreadsheet in our secure cloud platform and minutes later you will have your first opportunity insights to start working on. With Mithra-Ai you will have fast time-to-value and instant ROI.",
      hasSource: true,
    },
    {
      question: "How do you differentiate from other vendors?",
      answer: "We feel our peers are tackling the wrong problem. The problem is not that procurement teams lack dashboards or lack procurement systems. The core problem of spend visibility is that spend management solutions can’t update and maintain spend data volumes to the fast pace of the changing business dynamics. Mithra-Ai disrupts the market with a best-of-breed spend intelligence solution that will pro-actively send insights to stakeholders instead of asking them to collect information.",
    },
    {
      question: "What is your typical engagement path?",
      answer: "Seeing is believing. We typically start with an advanced demo with your data showing how fast and easy Mithra can upload, cleanse, classify and more important show instantly key opportunities, based on a sample spend dataset.",
    },
    {
      question: "Can we do a quick proof of concept?",
      answer: "Our technology allows us to execute POCs in days/weeks depending on the scope definition. Typical implementation times of traditional tools take months so it might be worthwhile to experience a new, cheaper, faster and more effective way to get spend visibility and insights.",
    },
    {
      question: "What do you mean with human in the loop?",
      answer: "Decisions should not be made on incomplete or missing data. MIthra uses artificial intelligence to not only harmonize and enirch your data (e.g find parent-child relationships) but also to accurately classify your spend data in the right sub-categories with the goal to give category owners a complete correct view of their category. Exceptionally, when the confidence level of the AI-engine is not high enough, it recommends options to the subject matter expert to make the choice. This is what we call human in the loop, and how we achieve very high confidence levels.",
    },
    {
      question: "Why is an end-to-end approach important?",
      answer: "Many tools in the market focus on visualization data only (with great dashboard), or on data cleansing & harmonization but few have an end-to-end approach. You need both for a very simple reason. Spend data keeps growing every day and transactional data is typically poluted so needs attention. If you have great dashboard with identified opportunities but you can not manage the flow of new data to be cleansed, harmonized, enriched and auto-classified correctly in the right sub-category, your insights and reports will be incorrect and wrong expensive decisions will be made. Vice versa, if you only have a data cleansing tool without a business case generator you miss all the value and leave all the tedious data analysis to the user. Mithra-Ai combines both worlds and on top uses automation, workflows, artificial intelligence and GenAi to reduce the end-to-end lifecycle from data collection to auto-generated business case by 20x and you see more opportunities and hidden risk because you can manage much more addressable spend thanks to our nextgen classification engine. This is what we call speed-to-value.",
    },
    {
      question: "How accurate is your AI algorithm?",
      answer: "The accuracy and completeness depends also on your base case situation and to which level (L1…L7). We experience accuracy above 96% on datasets with millions of lines. Happy to explore how accurate our AI engine can be in your situation.",
    },
    {
      question: "Can you integrate with our systems",
      answer: "Yes, using internal and external data is important. Mithra-Ai can connect with any data lake or internal system using standard techniques, APIs and we can also just upload spreadsheets in our secure cloud and share instant outcomes. We offer a hybrid solution with a focus on fast time-to-value and low IT effort.",
    },
  ];

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="flex flex-col justify-center py-16 rounded-3xl"> {/* Updated py-8 to py-16 */}
      <div className="mx-auto max-w-2xl md:text-center">
        <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
          FAQ
        </h2>
      </div>
      <div className="self-center mt-6 max-w-full w-[748px]">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isExpanded={expandedIndex === index}
            hasSource={item.hasSource}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default FAQ;