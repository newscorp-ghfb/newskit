import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const Transition: React.FC = () => {
  const filter0 = getSSRId();
  const filter1 = getSSRId();
  const filter2 = getSSRId();

  return (
    <Svg
      width="1490"
      height="838"
      viewBox="0 0 1490 838"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M0 0H1490V838H0V0Z" fill="illustrationBackground020" />
      <Path
        d="M194 331.523C194 317.979 204.979 307 218.523 307H366.477C380.021 307 391 317.979 391 331.523V479.477C391 493.021 380.021 504 366.477 504H218.523C204.979 504 194 493.021 194 479.477V331.523Z"
        fill="illustrationPalette010"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M366.477 319.261H218.523C211.751 319.261 206.261 324.751 206.261 331.523V479.477C206.261 486.249 211.751 491.739 218.523 491.739H366.477C373.249 491.739 378.739 486.249 378.739 479.477V331.523C378.739 324.751 373.249 319.261 366.477 319.261ZM218.523 307C204.979 307 194 317.979 194 331.523V479.477C194 493.021 204.979 504 218.523 504H366.477C380.021 504 391 493.021 391 479.477V331.523C391 317.979 380.021 307 366.477 307H218.523Z"
        fill="illustrationPalette070"
      />
      <g filter={`url(#${filter0})`}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M287.201 509.168L281.226 500.038C277.146 493.804 268.455 491.53 261.808 494.947L263.357 494.151C261.707 494.999 260.916 497.113 261.595 498.871L269.866 520.27C271.177 523.663 274.526 528.461 277.301 530.871C277.301 530.871 293.94 544.643 293.94 549.807V556.344H320.898H328.27H334.377H341.116V549.807C341.116 544.643 351.285 528.38 351.285 528.38C353.157 525.218 354.717 519.649 354.717 515.951V488.759C354.595 482.739 349.478 477.86 343.163 477.86C340.004 477.86 337.445 480.299 337.445 483.311V485.489C337.445 479.469 332.328 474.59 326.013 474.59C322.854 474.59 320.296 477.029 320.296 480.041V482.219C320.296 476.199 315.178 471.32 308.864 471.32C305.705 471.32 303.146 473.759 303.146 476.771V478.949C303.146 477.981 303.043 477.212 302.843 476.603L301.099 448.521C300.863 444.724 297.662 441.773 293.94 441.773C290.192 441.773 287.201 444.79 287.201 448.512V475.471V509.168Z"
          fill="white"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M263.402 494.245C268.753 492.287 275.01 493.643 279.11 497.515C279.902 498.263 280.613 499.105 281.222 500.035L287.197 509.165V448.509C287.197 444.788 290.188 441.771 293.937 441.771C297.659 441.771 300.859 444.721 301.095 448.519L302.839 476.6C302.857 476.655 302.874 476.711 302.891 476.768C303.057 477.35 303.142 478.066 303.142 478.946V476.768C303.142 476.706 303.143 476.643 303.146 476.581C303.147 476.554 303.148 476.526 303.149 476.499C303.297 473.612 305.796 471.317 308.86 471.317C309.459 471.317 310.048 471.361 310.622 471.446C311.976 471.645 313.251 472.071 314.404 472.682C317.277 474.203 319.39 476.872 320.064 480.039C320.213 480.742 320.292 481.471 320.292 482.216V480.039C320.292 477.027 322.851 474.587 326.01 474.587C326.264 474.587 326.516 474.595 326.765 474.611C328.494 474.718 330.119 475.192 331.553 475.952C334.427 477.474 336.54 480.142 337.213 483.309C337.363 484.012 337.442 484.741 337.442 485.487V483.309C337.442 480.297 340 477.857 343.159 477.857C343.413 477.857 343.665 477.865 343.915 477.881C349.877 478.252 354.596 482.979 354.713 488.757V515.949C354.713 519.646 353.153 525.216 351.281 528.377C351.281 528.377 341.112 544.64 341.112 549.804V556.341H293.937V549.804C293.937 544.64 277.297 530.868 277.297 530.868C274.522 528.458 271.174 523.66 269.862 520.268L261.591 498.868C261.138 497.695 261.34 496.363 262.015 495.355C262.245 495.01 262.53 494.704 262.863 494.455C263.042 494.381 263.222 494.311 263.402 494.245ZM261.804 494.945C262.152 494.766 262.505 494.603 262.863 494.455C263.017 494.34 263.18 494.237 263.353 494.148L261.804 494.945ZM258.166 487.869C253.837 490.993 252.118 496.79 254.048 501.784L262.319 523.183C264.1 527.793 268.213 533.69 271.994 536.974L272.067 537.037L272.139 537.097L272.141 537.098L272.17 537.123L272.29 537.223C272.398 537.313 272.563 537.452 272.775 537.632C273.2 537.994 273.815 538.522 274.556 539.174C276.047 540.485 278.009 542.262 279.948 544.168C281.923 546.109 283.706 548.02 284.939 549.614C285.363 550.163 285.657 550.591 285.849 550.9V564.428H349.2V549.942C349.2 549.976 349.202 549.993 349.206 549.994C349.234 549.999 349.383 549.238 350.148 547.432C350.96 545.515 352.098 543.249 353.314 540.995C354.517 538.766 355.729 536.672 356.646 535.128C357.103 534.359 357.482 533.734 357.744 533.304C357.875 533.09 357.977 532.925 358.044 532.816L358.119 532.696L358.138 532.664L358.19 532.582L358.24 532.497C359.652 530.112 360.748 527.209 361.492 524.526C362.235 521.848 362.801 518.768 362.801 515.949V488.675L362.799 488.593C362.583 477.911 353.612 469.77 343.159 469.77C341.447 469.77 339.774 470.088 338.217 470.676C334.824 468.041 330.54 466.5 326.01 466.5C324.297 466.5 322.624 466.817 321.067 467.405C317.989 465.015 314.178 463.525 310.114 463.269L309.167 448.017C308.664 439.928 301.902 433.684 293.937 433.684C285.703 433.684 279.11 440.34 279.11 448.509V487.767C273.155 484.802 265.991 484.38 259.686 487.017M286.123 551.402C286.122 551.402 286.107 551.372 286.086 551.316C286.115 551.375 286.125 551.403 286.123 551.402ZM258.166 487.869L258.106 487.752L259.655 486.956"
          fill="black"
        />
      </g>
      <Rect
        x="616.195"
        y="306.629"
        width="197.404"
        height="197.404"
        rx="28.5266"
        fill="illustrationPalette070"
      />
      <Path
        d="M694.008 434.721L663.726 404.439L653.414 414.678L694.008 455.272L781.15 368.13L770.911 357.891L694.008 434.721Z"
        fill="white"
      />
      <g filter={`url(#${filter1})`}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M709.396 509.168L703.421 500.038C699.341 493.804 690.65 491.53 684.003 494.947L685.552 494.151C683.902 494.999 683.111 497.113 683.79 498.871L692.061 520.27C693.373 523.663 696.721 528.461 699.496 530.871C699.496 530.871 716.136 544.643 716.136 549.807V556.344H743.093H750.465H756.572H763.312V549.807C763.312 544.643 773.48 528.38 773.48 528.38C775.352 525.218 776.912 519.649 776.912 515.951V488.759C776.79 482.739 771.673 477.86 765.358 477.86C762.2 477.86 759.641 480.299 759.641 483.311V485.489C759.641 479.469 754.523 474.59 748.209 474.59C745.05 474.59 742.491 477.029 742.491 480.041V482.219C742.491 476.199 737.374 471.32 731.059 471.32C727.9 471.32 725.341 473.759 725.341 476.771V478.949C725.341 477.981 725.238 477.212 725.038 476.603L723.294 448.521C723.058 444.724 719.858 441.773 716.136 441.773C712.388 441.773 709.396 444.79 709.396 448.512V475.471V509.168Z"
          fill="white"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M685.598 494.245C690.948 492.287 697.206 493.643 701.305 497.515C702.097 498.263 702.808 499.105 703.417 500.035L709.392 509.165V448.509C709.392 444.788 712.384 441.771 716.132 441.771C719.854 441.771 723.054 444.721 723.29 448.519L725.034 476.6C725.052 476.655 725.069 476.711 725.086 476.768C725.252 477.35 725.338 478.066 725.338 478.946V476.768C725.338 476.706 725.339 476.643 725.341 476.581C725.342 476.554 725.343 476.526 725.344 476.499C725.492 473.612 727.991 471.317 731.055 471.317C731.654 471.317 732.243 471.361 732.817 471.446C734.171 471.645 735.446 472.071 736.599 472.682C739.472 474.203 741.586 476.872 742.259 480.039C742.409 480.742 742.487 481.471 742.487 482.216V480.039C742.487 477.027 745.046 474.587 748.205 474.587C748.459 474.587 748.711 474.595 748.961 474.611C750.69 474.718 752.314 475.192 753.749 475.952C756.622 477.474 758.735 480.142 759.409 483.309C759.558 484.012 759.637 484.741 759.637 485.487V483.309C759.637 480.297 762.196 477.857 765.355 477.857C765.609 477.857 765.861 477.865 766.11 477.881C772.073 478.252 776.792 482.979 776.909 488.757V515.949C776.909 519.646 775.348 525.216 773.476 528.377C773.476 528.377 763.308 544.64 763.308 549.804V556.341H716.132V549.804C716.132 544.64 699.493 530.868 699.493 530.868C696.718 528.458 693.369 523.66 692.058 520.268L683.787 498.868C683.333 497.695 683.535 496.363 684.21 495.355C684.44 495.01 684.726 494.704 685.059 494.455C685.237 494.381 685.417 494.311 685.598 494.245ZM683.999 494.945C684.347 494.766 684.701 494.603 685.059 494.455C685.212 494.34 685.375 494.237 685.548 494.148L683.999 494.945ZM680.361 487.869C676.032 490.993 674.313 496.79 676.243 501.784L684.514 523.183C686.296 527.793 690.408 533.69 694.19 536.974L694.262 537.037L694.334 537.097L694.336 537.098L694.365 537.123L694.485 537.223C694.593 537.313 694.758 537.452 694.97 537.632C695.396 537.994 696.011 538.522 696.752 539.174C698.242 540.485 700.204 542.262 702.143 544.168C704.118 546.109 705.901 548.02 707.134 549.614C707.558 550.163 707.852 550.591 708.045 550.9V564.428H771.395V549.942C771.396 549.976 771.397 549.993 771.401 549.994C771.43 549.999 771.578 549.238 772.344 547.432C773.155 545.515 774.293 543.249 775.509 540.995C776.712 538.766 777.924 536.672 778.841 535.128C779.298 534.359 779.677 533.734 779.939 533.304C780.071 533.09 780.172 532.925 780.24 532.816L780.314 532.696L780.334 532.664L780.386 532.582L780.435 532.497C781.848 530.112 782.943 527.209 783.688 524.526C784.43 521.848 784.996 518.768 784.996 515.949V488.675L784.994 488.593C784.778 477.911 775.807 469.77 765.355 469.77C763.642 469.77 761.969 470.088 760.412 470.676C757.019 468.041 752.736 466.5 748.205 466.5C746.492 466.5 744.819 466.817 743.263 467.405C740.184 465.015 736.373 463.525 732.309 463.269L731.362 448.017C730.86 439.928 724.097 433.684 716.132 433.684C707.898 433.684 701.305 440.34 701.305 448.509V487.767C695.351 484.802 688.186 484.38 681.882 487.017M708.319 551.402C708.317 551.402 708.302 551.372 708.281 551.316C708.31 551.375 708.321 551.403 708.319 551.402ZM680.361 487.869L680.301 487.752L681.85 486.956"
          fill="black"
        />
      </g>
      <Rect
        opacity="0.2"
        x="989.324"
        y="253"
        width="306.947"
        height="306.947"
        rx="153.473"
        fill="illustrationPalette040"
      />
      <Rect
        x="1043.49"
        y="306.348"
        width="197.792"
        height="197.792"
        rx="24.6214"
        fill="illustrationPalette070"
      />
      <Path
        d="M1121.36 434.797L1090.98 404.424L1080.64 414.694L1121.36 455.411L1208.76 368.005L1198.49 357.734L1121.36 434.797Z"
        fill="white"
      />
      <g filter={`url(#${filter2})`}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1137.29 509.168L1131.32 500.038C1127.24 493.804 1118.55 491.53 1111.9 494.947L1113.45 494.151C1111.8 494.999 1111.01 497.113 1111.69 498.871L1119.96 520.27C1121.27 523.663 1124.62 528.461 1127.39 530.871C1127.39 530.871 1144.03 544.643 1144.03 549.807V556.344H1170.99H1178.36H1184.47H1191.21V549.807C1191.21 544.643 1201.38 528.38 1201.38 528.38C1203.25 525.218 1204.81 519.649 1204.81 515.951V488.759C1204.69 482.739 1199.57 477.86 1193.26 477.86C1190.1 477.86 1187.54 480.299 1187.54 483.311V485.489C1187.54 479.469 1182.42 474.59 1176.11 474.59C1172.95 474.59 1170.39 477.029 1170.39 480.041V482.219C1170.39 476.199 1165.27 471.32 1158.96 471.32C1155.8 471.32 1153.24 473.759 1153.24 476.771V478.949C1153.24 477.981 1153.14 477.212 1152.94 476.603L1151.19 448.521C1150.96 444.724 1147.76 441.773 1144.03 441.773C1140.29 441.773 1137.29 444.79 1137.29 448.512V475.471V509.168Z"
          fill="white"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1113.5 494.245C1118.85 492.287 1125.1 493.643 1129.2 497.515C1130 498.263 1130.71 499.105 1131.32 500.035L1137.29 509.165V448.509C1137.29 444.788 1140.28 441.771 1144.03 441.771C1147.75 441.771 1150.95 444.721 1151.19 448.519L1152.93 476.6C1152.95 476.655 1152.97 476.711 1152.98 476.768C1153.15 477.35 1153.24 478.066 1153.24 478.946V476.768C1153.24 476.706 1153.24 476.643 1153.24 476.581C1153.24 476.554 1153.24 476.526 1153.24 476.499C1153.39 473.612 1155.89 471.317 1158.95 471.317C1159.55 471.317 1160.14 471.361 1160.72 471.446C1162.07 471.645 1163.34 472.071 1164.5 472.682C1167.37 474.203 1169.48 476.872 1170.16 480.039C1170.31 480.742 1170.39 481.471 1170.39 482.216V480.039C1170.39 477.027 1172.94 474.587 1176.1 474.587C1176.36 474.587 1176.61 474.595 1176.86 474.611C1178.59 474.718 1180.21 475.192 1181.65 475.952C1184.52 477.474 1186.63 480.142 1187.31 483.309C1187.46 484.012 1187.54 484.741 1187.54 485.487V483.309C1187.54 480.297 1190.09 477.857 1193.25 477.857C1193.51 477.857 1193.76 477.865 1194.01 477.881C1199.97 478.252 1204.69 482.979 1204.81 488.757V515.949C1204.81 519.646 1203.25 525.216 1201.37 528.377C1201.37 528.377 1191.21 544.64 1191.21 549.804V556.341H1144.03V549.804C1144.03 544.64 1127.39 530.868 1127.39 530.868C1124.62 528.458 1121.27 523.66 1119.96 520.268L1111.68 498.868C1111.23 497.695 1111.43 496.363 1112.11 495.355C1112.34 495.01 1112.62 494.704 1112.96 494.455C1113.14 494.381 1113.32 494.311 1113.5 494.245ZM1111.9 494.945C1112.25 494.766 1112.6 494.603 1112.96 494.455C1113.11 494.34 1113.27 494.237 1113.45 494.148L1111.9 494.945ZM1108.26 487.869C1103.93 490.993 1102.21 496.79 1104.14 501.784L1112.41 523.183C1114.19 527.793 1118.31 533.69 1122.09 536.974L1122.16 537.037L1122.23 537.097L1122.23 537.098L1122.26 537.123L1122.38 537.223C1122.49 537.313 1122.66 537.452 1122.87 537.632C1123.29 537.994 1123.91 538.522 1124.65 539.174C1126.14 540.485 1128.1 542.262 1130.04 544.168C1132.02 546.109 1133.8 548.02 1135.03 549.614C1135.46 550.163 1135.75 550.591 1135.94 550.9V564.428H1199.29V549.942C1199.29 549.976 1199.3 549.993 1199.3 549.994C1199.33 549.999 1199.48 549.238 1200.24 547.432C1201.05 545.515 1202.19 543.249 1203.41 540.995C1204.61 538.766 1205.82 536.672 1206.74 535.128C1207.2 534.359 1207.58 533.734 1207.84 533.304C1207.97 533.09 1208.07 532.925 1208.14 532.816L1208.21 532.696L1208.23 532.664L1208.28 532.582L1208.33 532.497C1209.75 530.112 1210.84 527.209 1211.59 524.526C1212.33 521.848 1212.89 518.768 1212.89 515.949V488.675L1212.89 488.593C1212.68 477.911 1203.71 469.77 1193.25 469.77C1191.54 469.77 1189.87 470.088 1188.31 470.676C1184.92 468.041 1180.63 466.5 1176.1 466.5C1174.39 466.5 1172.72 466.817 1171.16 467.405C1168.08 465.015 1164.27 463.525 1160.21 463.269L1159.26 448.017C1158.76 439.928 1152 433.684 1144.03 433.684C1135.8 433.684 1129.2 440.34 1129.2 448.509V487.767C1123.25 484.802 1116.08 484.38 1109.78 487.017M1136.22 551.402C1136.22 551.402 1136.2 551.372 1136.18 551.316C1136.21 551.375 1136.22 551.403 1136.22 551.402ZM1108.26 487.869L1108.2 487.752L1109.75 486.956"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="166.619"
          y="384.796"
          width="281.835"
          height="281.835"
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
          <feOffset dy="16.5438" />
          <feGaussianBlur stdDeviation="16.5438" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_790_135945"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_790_135945"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="588.815"
          y="384.796"
          width="281.835"
          height="281.835"
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
          <feOffset dy="16.5438" />
          <feGaussianBlur stdDeviation="16.5438" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_790_135945"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_790_135945"
            result="shape"
          />
        </filter>
        <filter
          id={filter2}
          x="1016.71"
          y="384.796"
          width="281.835"
          height="281.835"
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
          <feOffset dy="16.5438" />
          <feGaussianBlur stdDeviation="16.5438" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_790_135945"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_790_135945"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default Transition;