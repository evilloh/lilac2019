import React from "react";


const SVG = ({
  style = {},
  fill1 = "#fdfjkoa",
  fill2 = "#fff",
  width = "100%",
  className = "",
  viewBox = "0 0 32 32",
  onClick= '',
}) => (

<svg xmlns="http://www.w3.org/2000/svg" width="633" height="229" viewBox="0 120 633.5 108.9" className={className} >
    <g data-name="Group 11" transform="translate(-807.342 -565.709)translate(807.342 640.412)" onClick={onClick}>
        <path data-name="Path 156" d="M613 201.9l-221.2 3.9 10.7-36.5-402.5-50.1 65.3-119.2 448.8 102.3-17.5 41.3Z" fill={fill1} />
    <path data-name="Path 157" d="M590.5 194.4l-186.3 2.4 15.7-32.2-401-62.8 49-90.3 433.3 98.8-17.6 41.3Z" fill={fill2} onClick={onClick}/></g>
</svg>

);

export default SVG;
