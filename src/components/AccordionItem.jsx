"use client";
import React from "react";

function AccordionItem({ question, answer, isExpanded, hasSource, onToggle }) {
  return (
    <article className="flex flex-col justify-center w-full text-base tracking-normal leading-relaxed text-neutral-800 max-md:max-w-full">
      <div className="flex flex-col justify-center w-full border-t border-solid border-t-[color:var(--Neutral-5,#D9D9D9)] max-md:max-w-full">
        <button
          className="flex flex-wrap gap-4 justify-center items-center px-4 py-3.5 w-full text-left max-md:max-w-full"
          onClick={onToggle}
          aria-expanded={isExpanded}
          aria-controls={`content-${question.replace(/\s+/g, "-").toLowerCase()}`}
        >
          <h3 className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
            {question}
          </h3>
          <img
            src={
              isExpanded
                ? "https://cdn.builder.io/api/v1/image/assets/464c1791c5014f66b5ac8a39076fa203/c01bd70c69e55d7647ef875a8ca4d83adfea13a93d2f22e7ae23425f1dadb165?placeholderIfAbsent=true"
                : "https://cdn.builder.io/api/v1/image/assets/464c1791c5014f66b5ac8a39076fa203/1cd32d30a7b2eab89099de18f2eb41cbc9c89fb11ba55537e39ff277cc9462ca?placeholderIfAbsent=true"
            }
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            alt={isExpanded ? "Collapse" : "Expand"}
          />
        </button>

        {isExpanded && answer && (
          <div
            id={`content-${question.replace(/\s+/g, "-").toLowerCase()}`}
            className="flex flex-col justify-center px-4 pt-2 pb-6 w-full leading-6 max-md:max-w-full"
          >
            <p className="text-sm tracking-normal text-zinc-600 max-md:max-w-full">
              {answer}
            </p>

            {hasSource && (
              <div className="flex flex-wrap gap-2 items-center p-2 mt-4 w-full text-xs tracking-normal text-sky-500 whitespace-nowrap bg-sky-100 rounded border border-solid border-[color:var(--Primary-2,#BAE7FF)] max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/464c1791c5014f66b5ac8a39076fa203/4c743d3c9c5d92703264e1f247d0b883e722ee7f87ffe4d1dbf52c17b0ceddc8?placeholderIfAbsent=true"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  alt="Source icon"
                />
                <span className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
                  Source
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default AccordionItem;
