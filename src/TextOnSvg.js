import React from 'react';
import { string, number } from 'prop-types';
import svgTextWrap from 'svg-text-wrap';

const TextOnSvg = ({
  className = 'text-on-svg',
  text = '',
  width = 512,
  height = 448,
  textWidth = 0.8,
  fontSize = 48,
  fontWeight = 500,
  fontFamily = '',
  backgroundColor = '#417505',
  color = '#FFFFFF',
}) => {

  let lines = [];
  if (text) {
    lines = svgTextWrap(
      text,
      width * textWidth,
      {
        'letter-spacing': '1px',
        'style': `font-size: ${fontSize}px`,
      },
    ).map((line, index) => (
      <tspan
        key={index}
        x={width / 2}
        dy={fontSize}>
        {line}
      </tspan>
    ));
  }
  const linesNumber = lines.length;

  return (
    <svg
      className={className}
      width={`${width}px`}
      height={`${height}px`}
      viewBox={`0 0 ${width} ${height}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect fill={backgroundColor} x="0" y="0" width={width} height={height}></rect>
        <text
          {...fontFamily !== '' ? {fontFamily: fontFamily} : {}}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fill={color}
          y={0}
          x={0}
          textAnchor="middle"
          alignmentBaseline="middle">
          {lines}
        </text>
      </g>
    </svg>
  )
};

TextOnSvg.propTypes = {
  className: string,
  text: string,
  width: number,
  height: number,
  textWidth: number,
  fontSize: number,
  // fontWeight: string,
  fontFamily: string,
  backgroundColor: string,
  color: string,
};

export default TextOnSvg;