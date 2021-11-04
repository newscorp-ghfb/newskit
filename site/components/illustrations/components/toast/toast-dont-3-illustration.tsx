import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const ToastDont3Illustration: React.FC = () => {
  const clip0 = getSSRId();

  const filter0 = getSSRId();
  const filter1 = getSSRId();

  return (
    <Svg
      width="1490"
      height="838"
      viewBox="0 0 1490 838"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clip0})`}>
        <Path
          d="M0 4.00001C0 1.79087 1.79086 0 4 0H1486.72C1488.93 0 1490.72 1.79086 1490.72 4V834.004C1490.72 836.213 1488.93 838.004 1486.72 838.004H4.00002C1.79088 838.004 0 836.213 0 834.004V4.00001Z"
          fill="illustrationBackground010"
        />
        <g filter={`url(#${filter0})`}>
          <Rect
            x="228.889"
            y="166"
            width="1030.5"
            height="234.999"
            rx="17.3496"
            fill="illustrationInterface010"
          />
          <Rect
            x="933.549"
            y="258.999"
            width="269.356"
            height="83.1535"
            rx="41.5767"
            fill="illustrationHighlight010"
          />
          <Path
            d="M1029.87 288.64V303.214C1029.87 304.671 1030.23 305.793 1030.95 306.58C1031.66 307.366 1032.72 307.759 1034.1 307.759C1035.49 307.759 1036.56 307.366 1037.3 306.58C1038.04 305.793 1038.41 304.671 1038.41 303.214V288.64H1044.34V303.179C1044.34 305.354 1043.88 307.193 1042.95 308.696C1042.03 310.2 1040.78 311.333 1039.2 312.097C1037.65 312.86 1035.92 313.242 1034 313.242C1032.08 313.242 1030.36 312.872 1028.83 312.132C1027.33 311.368 1026.13 310.235 1025.26 308.731C1024.38 307.204 1023.94 305.354 1023.94 303.179V288.64H1029.87ZM1060.3 293.429C1062.57 293.429 1064.38 294.169 1065.72 295.649C1067.08 297.107 1067.76 299.119 1067.76 301.687V312.999H1061.87V302.485C1061.87 301.19 1061.53 300.183 1060.86 299.466C1060.19 298.749 1059.29 298.391 1058.15 298.391C1057.02 298.391 1056.12 298.749 1055.45 299.466C1054.78 300.183 1054.44 301.19 1054.44 302.485V312.999H1048.51V293.637H1054.44V296.205C1055.04 295.349 1055.85 294.678 1056.87 294.192C1057.89 293.683 1059.03 293.429 1060.3 293.429ZM1070.71 303.283C1070.71 301.294 1071.08 299.547 1071.82 298.044C1072.58 296.54 1073.61 295.383 1074.91 294.574C1076.2 293.764 1077.65 293.359 1079.24 293.359C1080.52 293.359 1081.67 293.625 1082.71 294.157C1083.78 294.689 1084.61 295.407 1085.21 296.309V287.322H1091.15V312.999H1085.21V310.223C1084.66 311.148 1083.86 311.889 1082.82 312.444C1081.8 312.999 1080.61 313.277 1079.24 313.277C1077.65 313.277 1076.2 312.872 1074.91 312.062C1073.61 311.229 1072.58 310.061 1071.82 308.558C1071.08 307.031 1070.71 305.273 1070.71 303.283ZM1085.21 303.318C1085.21 301.837 1084.8 300.669 1083.96 299.813C1083.15 298.957 1082.16 298.529 1080.98 298.529C1079.8 298.529 1078.79 298.957 1077.96 299.813C1077.15 300.646 1076.75 301.803 1076.75 303.283C1076.75 304.764 1077.15 305.944 1077.96 306.823C1078.79 307.678 1079.8 308.106 1080.98 308.106C1082.16 308.106 1083.15 307.678 1083.96 306.823C1084.8 305.967 1085.21 304.798 1085.21 303.318ZM1104.25 313.277C1102.36 313.277 1100.64 312.872 1099.12 312.062C1097.61 311.252 1096.42 310.096 1095.54 308.592C1094.69 307.089 1094.26 305.33 1094.26 303.318C1094.26 301.329 1094.7 299.582 1095.58 298.078C1096.46 296.552 1097.66 295.383 1099.19 294.574C1100.71 293.764 1102.42 293.359 1104.32 293.359C1106.22 293.359 1107.93 293.764 1109.46 294.574C1110.98 295.383 1112.19 296.552 1113.07 298.078C1113.94 299.582 1114.38 301.329 1114.38 303.318C1114.38 305.307 1113.93 307.065 1113.03 308.592C1112.15 310.096 1110.94 311.252 1109.39 312.062C1107.86 312.872 1106.15 313.277 1104.25 313.277ZM1104.25 308.141C1105.39 308.141 1106.35 307.725 1107.13 306.892C1107.94 306.059 1108.35 304.868 1108.35 303.318C1108.35 301.768 1107.95 300.577 1107.17 299.744C1106.4 298.911 1105.46 298.495 1104.32 298.495C1103.17 298.495 1102.21 298.911 1101.44 299.744C1100.68 300.554 1100.3 301.745 1100.3 303.318C1100.3 304.868 1100.67 306.059 1101.41 306.892C1102.17 307.725 1103.12 308.141 1104.25 308.141Z"
            fill="illustrationInterface010"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M294.857 234.999C294.857 229.476 299.335 224.999 304.857 224.999H678.667C684.19 224.999 688.667 229.476 688.667 234.999C688.667 240.522 684.19 244.999 678.667 244.999H304.857C299.335 244.999 294.857 240.522 294.857 234.999ZM294.857 283.369C294.857 278.063 299.158 273.762 304.464 273.762H870.968C876.273 273.762 880.574 278.063 880.574 283.369C880.574 288.674 876.273 292.975 870.968 292.975H304.464C299.158 292.975 294.857 288.674 294.857 283.369ZM305.064 321.795C299.427 321.795 294.857 326.364 294.857 332.002C294.857 337.639 299.427 342.209 305.064 342.209H870.367C876.005 342.209 880.574 337.639 880.574 332.002C880.574 326.364 876.005 321.795 870.367 321.795H305.064Z"
            fill="illustrationInterface020"
          />
        </g>
        <g filter={`url(#${filter1})`}>
          <Rect
            x="228.889"
            y="436.998"
            width="1030.5"
            height="234.999"
            rx="17.3496"
            fill="illustrationInterface010"
          />
          <Rect
            x="933.549"
            y="529.998"
            width="269.356"
            height="83.1535"
            rx="41.5768"
            fill="illustrationHighlight010"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M294.857 505.998C294.857 500.475 299.335 495.998 304.857 495.998H678.667C684.19 495.998 688.667 500.475 688.667 505.998C688.667 511.521 684.19 515.998 678.667 515.998H304.857C299.335 515.998 294.857 511.521 294.857 505.998ZM294.857 554.368C294.857 549.062 299.158 544.761 304.464 544.761H870.968C876.273 544.761 880.574 549.062 880.574 554.368C880.574 559.673 876.273 563.974 870.968 563.974H304.464C299.158 563.974 294.857 559.673 294.857 554.368ZM305.064 592.794C299.427 592.794 294.857 597.364 294.857 603.001C294.857 608.638 299.427 613.208 305.064 613.208H870.367C876.005 613.208 880.574 608.638 880.574 603.001C880.574 597.364 876.005 592.794 870.367 592.794H305.064Z"
            fill="illustrationInterface020"
          />
          <Path
            d="M1092.97 558.789L1087.27 553.084L1060.36 579.975L1049.77 569.38L1044.04 575.077L1060.36 591.41L1092.97 558.789Z"
            fill="illustrationInterface010"
          />
        </g>
      </g>
      <defs>
        <filter
          id={filter0}
          x="212.889"
          y="158"
          width="1062.5"
          height="266.999"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
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
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="212.889"
          y="428.998"
          width="1062.5"
          height="266.999"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
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
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <clipPath id={clip0}>
          <Rect width="1490" height="838" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
export default ToastDont3Illustration;
