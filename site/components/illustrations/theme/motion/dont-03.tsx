import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const Dont03: React.FC = () => {
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
        <Rect
          x="254"
          y="295.913"
          width="981"
          height="180"
          rx="90"
          fill="illustrationInterface010"
        />
      </g>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M735.943 607.628V571.4H745C790.014 571.4 826.513 607.9 826.513 652.913C826.513 697.926 790.014 734.426 745 734.426C699.897 734.426 663.488 697.926 663.488 652.913C663.488 626.195 676.349 602.647 696.183 587.793V587.612L757.771 649.2L745 661.97L695.912 612.881C686.945 623.75 681.602 637.697 681.602 652.913C681.602 687.963 709.95 716.312 745 716.312C780.051 716.312 808.399 687.963 808.399 652.913C808.399 620.942 784.761 594.677 754.057 590.239V607.628H735.943ZM745 707.255C740.019 707.255 735.943 703.179 735.943 698.198C735.943 693.217 740.019 689.141 745 689.141C749.982 689.141 754.057 693.217 754.057 698.198C754.057 703.179 749.982 707.255 745 707.255ZM799.342 652.913C799.342 647.932 795.267 643.856 790.285 643.856C785.304 643.856 781.228 647.932 781.228 652.913C781.228 657.894 785.304 661.97 790.285 661.97C795.267 661.97 799.342 657.894 799.342 652.913ZM699.716 661.97C694.734 661.97 690.659 657.894 690.659 652.913C690.659 647.932 694.734 643.856 699.716 643.856C704.697 643.856 708.773 647.932 708.773 652.913C708.773 657.894 704.697 661.97 699.716 661.97Z"
        fill="illustrationHighlight010"
      />
      <Rect
        x="287"
        y="320.913"
        width="227"
        height="130"
        rx="65"
        fill="illustrationHighlight010"
      />
      <defs>
        <filter
          id={`filter0_${filter0}`}
          x="238"
          y="287.913"
          width="1013"
          height="212"
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
            result="effect1_dropShadow_12:186492"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_12:186492"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};
export default Dont03;
