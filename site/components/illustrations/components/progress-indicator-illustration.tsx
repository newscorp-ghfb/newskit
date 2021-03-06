import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../svg';
import {Path} from '../path';
import {Rect} from '../rect';

export const ProgressIndicatorIllustration: React.FC = () => {
  const mask0 = getSSRId();

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
        x="285"
        y="321"
        width="773"
        height="118"
        rx="59"
        fill="illustrationBorder010"
      />
      <mask
        id={mask0}
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="300"
        y="331"
        width="498"
        height="98"
      >
        <Rect x="300" y="331" width="498" height="98" rx="49" fill="blue040" />
      </mask>
      <g mask={`url(#${mask0})`}>
        <Rect x="300" y="331" width="498" height="98" rx="49" fill="blue040" />
        <Path
          d="M379.374 242.981C290.802 282.183 250.706 385.599 289.818 473.967C328.929 562.336 432.437 602.194 521.009 562.992C609.581 523.791 649.676 420.375 610.565 332.006C571.453 243.638 467.945 203.78 379.374 242.981Z"
          fill="illustrationPalette060"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M677.021 296.313C647.078 207.711 593.112 194.509 591.847 194.067C554.898 181.143 423.795 157.303 374.253 184.343C324.711 211.384 329.253 336.344 404.488 379.01C479.723 421.676 460.57 484.929 498.753 499.345C536.936 513.761 588.49 498.967 632.439 468.592C676.387 438.218 706.963 384.916 677.021 296.313Z"
          fill="illustrationPalette050"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M695.654 259.875C744.417 310.144 734.573 350.676 734.431 351.671C730.282 380.75 724.92 420.915 689.757 444.739C654.594 468.564 590.395 460.659 589.033 460.396C562.068 455.175 581.92 435 555.048 387C528.177 339.001 497.529 338.719 501.108 308.307C504.688 277.895 539.598 251.467 565.309 230.746C590.378 210.543 646.892 209.606 695.654 259.875Z"
          fill="illustrationPalette040"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M805.141 274.332C849.226 319.779 840.326 356.422 840.197 357.322C836.447 383.612 831.599 419.924 799.809 441.463C768.019 463.001 709.979 455.855 708.747 455.617C684.369 450.897 709.444 438.81 697.444 394.311C685.444 349.812 638.444 331.311 643.444 299.809C648.444 268.308 664.055 266.73 687.299 247.997C709.963 229.732 761.056 228.884 805.141 274.332Z"
          fill="illustrationPalette030"
        />
      </g>
    </Svg>
  );
};
export default ProgressIndicatorIllustration;
