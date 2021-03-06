import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../svg';
import {Path} from '../path';
import {Rect} from '../rect';

export const HeroConsentIllustration: React.FC = () => {
  const mask0 = getSSRId();

  const filter0 = getSSRId();
  return (
    <Svg
      width="1344"
      height="759"
      viewBox="0 0 1344 759"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="1344" height="759" fill="illustrationBackground020" />
      <g filter={`url(#${filter0})`}>
        <mask
          id={mask0}
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="451"
          y="159"
          width="442"
          height="442"
        >
          <Rect
            x="451"
            y="159"
            width="442"
            height="442"
            rx="40"
            fill="illustrationPalette060"
          />
        </mask>
        <g mask={`url(#${mask0})`}>
          <Path
            d="M522.918 20.8407C309.813 77.9421 183.241 296.591 240.211 509.207C297.181 721.823 516.121 847.893 729.226 790.792C942.331 733.69 1068.9 515.041 1011.93 302.425C954.963 89.8088 736.023 -36.2607 522.918 20.8407Z"
            fill="illustrationPalette060"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1085.98 317.44C1049.72 107.52 932.913 58.8466 930.223 57.4067C851.608 15.3388 679.853 -62.5133 558.857 -19.0668C437.861 24.3796 316.651 283.049 443.587 407.789C558.292 520.509 538.604 647.142 619.47 693.001C700.336 738.86 815.534 742.404 925.113 689.489C1034.69 636.573 1122.23 527.36 1085.98 317.44Z"
            fill="illustrationPalette050"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1055.81 119.329C1147.89 249.594 1111.5 337.351 1110.83 339.541C1091.27 403.526 1065.09 492.034 977.587 533.295C890.081 574.556 748.379 534.21 745.406 533.138C686.555 511.914 686.864 413.631 650.982 351.502C612.431 284.75 582.229 227.154 600.97 159.968C619.712 92.7831 707.564 45.5736 772.708 7.97492C836.223 -28.6838 963.738 -10.9353 1055.81 119.329Z"
            fill="illustrationPalette040"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1032.88 121.203C1085.72 195.957 1064.83 246.318 1064.45 247.574C1053.23 284.293 1038.21 335.084 987.989 358.763C937.773 382.441 856.455 359.288 854.749 358.672C820.977 346.493 821.154 290.092 800.563 254.438C778.44 216.131 761.108 183.079 771.863 144.524C782.618 105.969 833.033 78.877 870.417 57.3005C906.866 36.2634 980.042 46.4486 1032.88 121.203Z"
            fill="illustrationPalette030"
          />
        </g>
      </g>
      <Path
        d="M567.618 374.977C560.079 366.904 547.423 366.47 539.35 374.009C531.277 381.548 530.844 394.204 538.382 402.277L567.618 374.977ZM821.074 300.21C828.922 292.438 828.983 279.775 821.21 271.926C813.438 264.078 800.775 264.017 792.926 271.79L821.074 300.21ZM622.439 462.989L607.822 476.639L622.439 462.989ZM628.178 463.101L614.104 448.891L628.178 463.101ZM538.382 402.277L607.822 476.639L637.057 449.339L567.618 374.977L538.382 402.277ZM642.251 477.312L821.074 300.21L792.926 271.79L614.104 448.891L642.251 477.312ZM607.822 476.639C617.057 486.529 632.637 486.833 642.251 477.312L614.104 448.891C620.513 442.543 630.9 442.746 637.057 449.339L607.822 476.639Z"
        fill="white"
      />
      <defs>
        <filter
          id={filter0}
          x="435"
          y="151"
          width="474"
          height="474"
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
      </defs>
    </Svg>
  );
};
export default HeroConsentIllustration;
