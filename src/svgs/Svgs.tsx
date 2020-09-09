import React from "react";

interface Props {
  size: number;
  color: string;
}

export const Arrow = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 13 13.414"
  >
    <g transform="translate(-183 -242.793)">
      <line
        x2="12"
        transform="translate(183.5 249.5)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.3"
      />
      <line
        y1="3"
        transform="translate(189.5 244.5)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.3"
      />
      <line
        y1="2"
        x2="2"
        transform="translate(187.5 243.5)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.3"
      />
      <line
        x1="2"
        y1="2"
        transform="translate(189.5 243.5)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.3"
      />
      <g transform="translate(187.5 251.5)">
        <line
          y2="3"
          transform="translate(2)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="1.3"
        />
        <line
          x2="2"
          y2="2"
          transform="translate(0 2)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="1.3"
        />
        <line
          x1="2"
          y2="2"
          transform="translate(2 2)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="1.3"
        />
      </g>
    </g>
  </svg>
);

export const ArrowRight = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size * 0.7}
    viewBox="0 0 16.207 11.414"
  >
    <g transform="translate(-202 -185.793)">
      <line
        x2="15"
        transform="translate(202.5 191.5)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1"
      />
      <line
        x2="5"
        y2="5"
        transform="translate(212.5 186.5)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1"
      />
      <line
        x2="5"
        y2="5"
        transform="translate(217.5 191.5) rotate(90)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1"
      />
    </g>
  </svg>
);
