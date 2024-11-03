import React from "react";

const CustomSVG = () => (
  <svg
    width="70"
    height="70"
    viewBox="0 0 70 70"
    strokeWidth={1.5}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="35.5"
      cy="35"
      rx="30.5"
      ry="31"
      fill="url(#paint0_angular_0_1)"
    />
    <ellipse
      cx="35.5"
      cy="35"
      rx="30.5"
      ry="31"
      fill="url(#paint1_radial_0_1)"
    />
    <path
      d="M41.7375 23.3333L58.4791 52.325M28.2625 23.3333H61.7458M21.525 35L38.2666 6.00834M28.2625 46.6667L11.5208 17.675M41.7375 46.6667H8.25415M48.475 35L31.7333 63.9917M64.1666 35C64.1666 51.1083 51.1083 64.1667 35 64.1667C18.8917 64.1667 5.83331 51.1083 5.83331 35C5.83331 18.8917 18.8917 5.83334 35 5.83334C51.1083 5.83334 64.1666 18.8917 64.1666 35Z"
      stroke="black"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <radialGradient
        id="paint0_angular_0_1"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(35.5 35) rotate(-90) scale(31 30.5)"
      >
        <stop stopColor="#E7E040" />
        <stop offset="0.124041" stopColor="#EEAA3C" />
        <stop offset="0.249383" stopColor="#E8403B" />
        <stop offset="0.365593" stopColor="#B33ED5" />
        <stop offset="0.506092" stopColor="#694AE8" />
        <stop offset="0.642612" stopColor="#3CCAE7" />
        <stop offset="0.748717" stopColor="#3CE885" />
        <stop offset="0.869545" stopColor="#89E743" />
        <stop offset="1" stopColor="#E7E040" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_0_1"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(35.5 35) rotate(90) scale(31 30.5)"
      >
        <stop stopColor="#E4E4E4" />
        <stop offset="0.88" stopColor="#E4E4E4" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

export default CustomSVG;
