import React from "react";

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
    >
      <g clipPath="url(#clip0_arrow)">
        <path
          d="M8 2.66406L7.06 3.60406L10.78 7.33073H2.66666V8.66406H10.78L7.06 12.3907L8 13.3307L13.3333 7.9974L8 2.66406Z"
          fill="#1890FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_arrow">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ArrowIcon;