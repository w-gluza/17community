import React from "react";

const SVG = ({
  style = {},
  fill = "",
  alt = "",
  width = "100%",
  className = "",
  viewBox = "0 0 512 512"
}) => (
  <svg
    fill={fill}
    alt={alt}
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
      d="M392 0H120C53.832 0 0 53.832 0 120v272c0 66.168 53.832 120 120 120h272c66.168 0 120-53.832 120-120V120C512 53.832 458.168 0 392 0zm80 392c0 44.113-35.887 80-80 80H120c-44.113 0-80-35.887-80-80V120c0-44.113 35.887-80 80-80h272c44.113 0 80 35.887 80 80zM256 143c-62.309 0-113 50.691-113 113s50.691 113 113 113 113-50.691 113-113-50.691-113-113-113zm0 186c-40.254 0-73-32.746-73-73s32.746-73 73-73 73 32.746 73 73-32.746 73-73 73zm157.332-205.332c0 13.805-11.191 25-25 25-13.805 0-25-11.195-25-25 0-13.809 11.195-25 25-25 13.809 0 25 11.191 25 25zm0 0"
    />
  </svg>
);

export default SVG;
