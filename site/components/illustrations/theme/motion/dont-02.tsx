import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Circle} from '../../circle';

export const Dont02: React.FC = () => {
  const filter0 = getSSRId();
  return (
    <Svg
      width="1491"
      height="839"
      viewBox="0 0 1491 839"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M0 4.90235C0 2.69321 1.79 0.902344 3.99807 0.902344H1486C1488.21 0.902344 1490 2.6932 1490 4.90234V834.906C1490 837.115 1488.21 838.906 1486 838.906H3.99809C1.79002 838.906 0 837.115 0 834.906V4.90235Z"
        fill="illustrationBackground020"
      />
      <g filter={`url(#filter0_${filter0})`}>
        <Circle cx="745" cy="419.91" r="244" fill="illustrationInterface010" />
      </g>
      <Path
        d="M637.061 332.391C631.63 328.426 624 332.31 624 339.039L624 498.659C624 505.388 631.63 509.271 637.061 505.307L746.393 425.499C750.895 422.213 750.895 415.49 746.394 412.204L637.061 332.391Z"
        fill="illustrationHighlight010"
      />
      <Path
        d="M784.996 332.391C779.565 328.426 771.935 332.31 771.935 339.039L771.935 498.659C771.935 505.388 779.564 509.271 784.996 505.307L894.328 425.499C898.83 422.213 898.83 415.49 894.328 412.204L784.996 332.391Z"
        fill="illustrationHighlight010"
      />
      <defs>
        <filter
          id={`filter0_${filter0}`}
          x="485"
          y="167.91"
          width="520"
          height="520"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="8" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_12:186493"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_12:186493"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};
export default Dont02;
