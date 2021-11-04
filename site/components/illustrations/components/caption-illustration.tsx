import React from 'react';
import {getSSRId} from 'newskit';
import {Path} from '../path';
import {Rect} from '../rect';
import {Circle} from '../circle';
import {Svg} from '../svg';

export const CaptionIllustration: React.FC = () => {
  const mask0 = getSSRId();
  const mask1 = getSSRId();
  return (
    <Svg
      width="1344"
      height="759"
      viewBox="0 0 1344 759"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="1344" height="759" fill="illustrationBackground020" />
      <Rect
        x="280"
        y="561"
        width="805"
        height="24"
        rx="12"
        fill="illustrationInterface050"
      />
      <Rect
        x="237"
        y="501"
        width="891"
        height="24"
        rx="12"
        fill="illustrationInterface050"
      />
      <Circle cx="682" cy="300" r="146" fill="illustrationPalette070" />
      <mask
        id={mask0}
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="534"
        y="150"
        width="300"
        height="299"
      >
        <Path
          d="M645.524 156.065C566.038 177.364 518.828 258.918 540.077 338.222C561.326 417.526 642.989 464.549 722.475 443.251C801.962 421.952 849.172 340.398 827.923 261.094C806.673 181.79 725.011 134.767 645.524 156.065Z"
          fill="white"
        />
      </mask>
      <g mask={`url(#${mask0})`}>
        <Path
          d="M645.524 156.065C566.038 177.364 518.828 258.918 540.077 338.222C561.326 417.526 642.989 464.549 722.475 443.251C801.962 421.952 849.172 340.398 827.923 261.094C806.673 181.79 725.011 134.767 645.524 156.065Z"
          fill="illustrationInterface080"
        />
      </g>
      <mask
        id={mask1}
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="534"
        y="150"
        width="300"
        height="299"
      >
        <Path
          d="M645.524 156.065C566.038 177.364 518.828 258.918 540.077 338.222C561.326 417.526 642.989 464.549 722.475 443.251C801.962 421.952 849.172 340.398 827.923 261.094C806.673 181.79 725.011 134.767 645.524 156.065Z"
          fill="white"
        />
      </mask>
      <g mask={`url(#${mask1})`}>
        <Path
          d="M645.524 156.065C566.038 177.364 518.828 258.918 540.077 338.222C561.326 417.526 642.989 464.549 722.475 443.251C801.962 421.952 849.172 340.398 827.923 261.094C806.673 181.79 725.011 134.767 645.524 156.065Z"
          fill="illustrationPalette060"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M838.736 275.151C825.214 196.853 781.644 178.698 780.64 178.161C751.318 162.47 687.255 133.432 642.124 149.637C596.994 165.842 551.783 262.323 599.129 308.85C641.913 350.894 634.57 398.127 664.733 415.232C694.895 432.337 737.863 433.659 778.735 413.922C819.606 394.185 852.258 353.45 838.736 275.151Z"
          fill="illustrationPalette050"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M840.106 196.137C874.449 244.725 860.874 277.458 860.624 278.274C853.331 302.14 843.566 335.153 810.927 350.543C778.288 365.933 725.435 350.884 724.326 350.484C702.375 342.568 702.49 305.909 689.107 282.736C674.727 257.838 663.462 236.355 670.453 211.295C677.443 186.236 710.211 168.627 734.509 154.603C758.2 140.93 805.762 147.55 840.106 196.137Z"
          fill="illustrationPalette040"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M851.618 193.625C871.327 221.508 863.537 240.292 863.393 240.761C859.208 254.456 853.604 273.401 834.874 282.233C816.144 291.065 785.813 282.429 785.177 282.199C772.58 277.656 772.646 256.619 764.966 243.321C756.714 229.033 750.249 216.705 754.261 202.324C758.272 187.943 777.077 177.838 791.02 169.79C804.616 161.943 831.91 165.742 851.618 193.625Z"
          fill="illustrationPalette030"
        />
      </g>
      <Path
        d="M743.719 293.587L660.582 233.518C655.338 229.729 648 233.469 648 239.931L648 360.069C648 366.531 655.338 370.271 660.582 366.482L743.719 306.413C748.094 303.253 748.094 296.748 743.719 293.587Z"
        fill="white"
      />
    </Svg>
  );
};
export default CaptionIllustration;
